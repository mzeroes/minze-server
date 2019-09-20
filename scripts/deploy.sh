#! /bin/bash
source scripts/common.sh
source fastlane/.env
source fastlane/.env.secret
################################################################################
# DEPLOY SCRIPT
################################################################################

check_environment(){
  CURRENT_BRANCH=`git rev-parse --abbrev-ref HEAD`

  if [ "$CURRENT_BRANCH" != "$REPO_GIT_BRANCH" ]
  then
    warn "Wrong branch, checkout $REPO_GIT_BRANCH to deploy to $APP_ENV."
  else
    success "Deploying to $APP_ENV."
  fi
}

DEPLOY_TYPE='soft'
while getopts ":e:o:t:d:m:" opt; do
  case $opt in
    e) APP_ENV="$OPTARG"
    ;;
    o) APP_OS="$OPTARG"
    ;;
    t) DEPLOY_TYPE="$OPTARG"
    ;;
    d) DEV=1
    ;;
    \?) echo "❌ ${RED}Invalid option -$OPTARG${NO_COLOR}" >&2
    ;;
  esac
done

[[ -z $(git status -s) ]] || warn 'Please make sure you deploy with no changes or untracked files. You can run *git stash --include-untracked*.'


check_environment $APP_ENV

if [[ $DEPLOY_TYPE == "hard" ]]; then
  echo -e "${BLUE}* * * * *"
  echo -e "👷  Hard-Deploy"
  echo -e "* * * * *${NO_COLOR}"
  bundle exec fastlane set_build_numbers_to_current_timestamp

  if [[ $APP_OS != "android" ]]; then
    echo -e "${GREEN}- - - - -"
    echo -e "Fastlane 🍎  iOS $APP_ENV"
    echo -e "- - - - -${NO_COLOR}"
    bundle exec fastlane ios deploy
  fi
  if [[ $APP_OS != "ios" ]]; then
    echo -e "${YELLOW}- - - - -"
    echo "Fastlane 🤖  Android $APP_ENV"
    echo -e "- - - - -${NO_COLOR}"
    bundle exec fastlane android deploy
  fi
fi

if [[ $DEPLOY_TYPE == "soft" ]]; then
  echo -e "${CYAN}* * * * *"
  echo -e "🍦  Soft-Deploy"
  echo -e "* * * * *${NO_COLOR}"

  if [[ $APP_OS != "android" ]]; then
    echo -e "${GREEN}- - - - -"
    echo -e "Codepush 🍎  iOS ${APP_ENV}"
    echo -e "- - - - -${NO_COLOR}"
    bundle exec fastlane ios deploy codepush: --env=$APP_ENV
  fi
  if [[ $APP_OS != "ios" ]]; then
    echo -e "${YELLOW}- - - - -"
    echo -e "Codepush 🤖  Android ${APP_ENV}"
    echo -e "- - - - -${NO_COLOR}"
    bundle exec fastlane android deploy codepush: --env=$APP_ENV
  fi
fi

success "📦  Deploy succeeded."
