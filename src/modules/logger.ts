import {Injectable} from "@angular/core";

@Injectable()
export class Logger {

  public log(message: any, type?: string) {
    console.log(`LOG${type ? "|" + type : ""}: ${message}`);
  }

  public debug(message: any, type?: string) {
    console.debug(`DEBUG${type ? "|" + type : ""}: ${message}`);
  }

  public error(message: any, type?: string) {
    console.error(`ERR${type ? "|" + type : ""}: ${message}`);
  }

  public warn(message: any, type?: string) {
    console.warn(`WRN${type ? "|" + type : ""}: ${message}`);
  }
}
