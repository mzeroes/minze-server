import CONFIG from '../../config';
import {createLogger, format, transports} from 'winston';
import winstonDailyRotateFile from 'winston-daily-rotate-file';

const colorizer = format.colorize();

const prettyJson = format.printf(info => {
  if (info.message.constructor === Object) {
    info.message = JSON.stringify(info.message, null, 2);
  }
  return `${info.level}: ${info.message}`;
});

const logger = createLogger({
  level: CONFIG.DEBUG ? 'debug' : 'info',
  format: format.combine(
    format.prettyPrint(),
    format.splat(),
    format.simple(),
    prettyJson,
    // @ts-ignore
    // format.label({ label: path.basename(process.mainModule.filename) }),
    format.timestamp({format: 'hh:mm:ss A'}),
    format.printf(info => colorizer.colorize(info.level, `${info.level}: ${info.message}`))
  )
});

if (CONFIG.LOGGING.includes('File')) {
  logger.add(
    new winstonDailyRotateFile({
      level: 'info',
      filename: './logs/combine-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      format: format.combine(
        format.printf(
          (info: any) => `${info.timestamp} [${info.level}] [${info.label}]:\n${info.message}`
        )
      )
    })
  );
}

if (CONFIG.LOGGING.includes('Console')) {
  logger.add(
    new transports.Console({
      level: CONFIG.DEBUG ? 'debug' : 'info'
    })
  );
}

export {logger};
