#!/usr/bin/env bash
source scripts/common.sh
########################################################################################
# Command: ./scripts/secrets.sh -e APP_ENV -m [pack|unpack] -p [APP_SECRET_PASSPHRASE]            #
# pack: secrets, from the root of the project. Saves the location of the secrets       #
# unpack: secrets, copying the secret files to the correct locations in the repo       #
# for later unzipping.                                                                 #
########################################################################################

MODE='unpack'

while getopts ":m:e:p:" opt; do
  case $opt in
  m)
    MODE="$OPTARG"
    ;;
  e)
    APP_ENV="$OPTARG"
    ;;
  p)
    APP_SECRET_PASSPHRASE="$OPTARG"
    ;;
  \?)
    echo "${RED}Invalid option -$OPTARG${NO_COLOR}" >&2
    ;;
  esac
done

if [ -z $APP_SECRET_PASSPHRASE ]; then
  echo -e "↪ Checking for secrets/secrets File"
  FILE=secrets/secrets && test -f $FILE && source $FILE
  if [ $APP_ENV == "production" ]; then
    APP_SECRET_PASSPHRASE=$PROD_SECRET
  else
    APP_SECRET_PASSPHRASE=$DEV_SECRET
  fi
fi

echo -e "${YELLOW}↪ ${APP_ENV} Secrets 🤖 ${NO_COLOR}"

# required to decrypt secrets
if ! [ -x "$(command -v gpg)" ]; then
  echo 'Error: gpg is not installed.' >&2
  if [[ "$OSTYPE" == "linux-gnu" ]]; then
    apt-get install gnupg2
  elif [[ "$OSTYPE" == "darwin"* ]]; then
    brew install gnupg gnupg2
  fi
fi

if [[ $MODE == "pack" ]]; then
  # Select files to put in the archive
  source fastlane/.env # should have GRADLE_KEYSTORE def in it
  if [[ $ENV != $APP_ENV ]]; then
    echo -e "${RED}Make sure to setup env vars properly!!!"
    exit -1
  fi
  SECRETS_TO_PACK=".env fastlane/.env fastlane/.env.secret android/app/src/main/assets/appcenter-config.json android/app/debug.keystore android/app/${GRADLE_KEYSTORE} android/app/google-services.json"
  # Create archive
  FILE_ROOT="${APP_ENV}_app_secrets_with_paths"
  tar -cvzf $FILE_ROOT.tar.gz $SECRETS_TO_PACK

  # Encrypt archive
  if [ -z $APP_SECRET_PASSPHRASE ]; then
    echo -e "↪ APP_SECRET_PASSPHRASE Not Set"
    gpg --symmetric $FILE_ROOT.tar.gz
  else
    echo $APP_SECRET_PASSPHRASE | gpg --batch --yes --symmetric --passphrase-fd 0 $FILE_ROOT.tar.gz
  fi
  ## Remove intermediaries
  rm $FILE_ROOT.tar.gz
  # move to secrets folder
  mkdir -p secrets
  mv $FILE_ROOT.tar.gz.gpg secrets
  echo -e "${GREEN}↪ ${APP_ENV} secrets have been packed into ${FILE_ROOT}.tar.gz.gpg. Please commit this encrypted archive."

elif [[ $MODE == "unpack" ]]; then
  FILE=.env
  if test -f "$FILE"; then
    echo -e "${YELLOW}↪ ${APP_ENV} .env file already exists!!"
    exit 0
  fi
  # if .env do not exits
  FILE_ROOT="${APP_ENV}_app_secrets_with_paths"
  if [ -z $APP_SECRET_PASSPHRASE ]; then
    echo -e "❌ ${RED} APP_SECRET_PASSPHRASE for '${APP_ENV}' is required to decrypt the secrets.${NO_COLOR}"
    exit 1
  fi
  ## Decrypt
  gpg --decrypt --passphrase $APP_SECRET_PASSPHRASE --batch secrets/$FILE_ROOT.tar.gz.gpg >$FILE_ROOT.tar.gz
  ## Unzip to correct locations in project
  tar -xzvf $FILE_ROOT.tar.gz
  ## Remove intermediaries
  rm $FILE_ROOT.tar.gz
  echo -e "${GREEN}↪ ${APP_ENV} secrets have been unpacked to the correct location in your local environment"
fi
