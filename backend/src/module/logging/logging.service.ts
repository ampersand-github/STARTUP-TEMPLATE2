import { Injectable, LoggerService } from "@nestjs/common";
import * as winston from "winston";
import * as winstonDailyRotateFile from "winston-daily-rotate-file";
import { TransformableInfo } from "logform";

type LogLevel = "debug" | "info" | "warn" | "error" | "verbose";

interface ILog {
  url: string;
  method: string; // http method
  uid?: string;
  message: string;
}

@Injectable()
export class LoggingService implements LoggerService {
  logger: winston.Logger;
  private readonly dateFormat = "YYYY-MM-DD";
  private readonly dirName = ".log";

  private createLogTransport(level: LogLevel, filename: string): winstonDailyRotateFile {
    return new winstonDailyRotateFile({
      level: level,
      datePattern: this.dateFormat,
      filename: `${filename}-%DATE%.log`,
      dirname: this.dirName,
      maxSize: "20m",
      maxFiles: "32d",
    });
  }

  private readonly loggerFormat = winston.format.combine(
    winston.format.timestamp({ format: `${this.dateFormat} HH:mm:ss` }),
    winston.format.errors({ stack: true }),
    winston.format.printf(
      (info: TransformableInfo) =>
        `"${info.timestamp}", "${info.level}", "${info.url}"," ${info.method}", "${info.uid}", "${info.message}"`
    )
  );

  private readonly createDevelopTransport = new winston.transports.Console({
    level: "debug",
    format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
  });

  private readonly createLog = (logLevel: LogLevel, props: ILog) => {
    return this.logger.log({
      level: logLevel,
      url: props.url,
      method: props.method,
      uid: props.uid ? props.uid : "anonymous",
      message: props.message,
    });
  };

  constructor() {
    const logger = winston.createLogger({
      format: this.loggerFormat,
      transports: [
        this.createLogTransport("debug", "application"),
        this.createLogTransport("error", "error"),
      ],
    });

    if (process.env.NODE_ENV !== "production") logger.add(this.createDevelopTransport);

    this.logger = logger;
  }

  public log(props: ILog) {
    this.createLog("info", props);
  }
  public error(props: ILog) {
    this.createLog("error", props);
  }
  public warn(props: ILog) {
    this.createLog("warn", props);
  }
  public debug(props: ILog) {
    this.createLog("debug", props);
  }
  public verbose(props: ILog) {
    this.createLog("verbose", props);
  }
}
