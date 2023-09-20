import * as rudderanalytics from "rudder-sdk-js";
export function rudderInitialize() {
  rudderanalytics.load(
    "2V0toPgLsGoZnhDm6Ovox1sITBW",
    "http://localhost:8080/"
  );
  rudderanalytics.ready(() => {
    console.log("We are all set!!!");
  });
}
export { rudderanalytics };
