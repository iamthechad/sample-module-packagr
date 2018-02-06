import { Component } from "@angular/core";
import {Logger} from "../modules/logger";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  constructor(private logger: Logger) {}

  doLog() {
    this.logger.warn("Warn message");
    this.logger.log("Log message");
    this.logger.error("Error message");
    this.logger.debug("Debug message");
  }
}
