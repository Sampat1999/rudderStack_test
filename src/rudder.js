import * as rudderanalytics from "rudder-sdk-js";
export function rudderIntialize() {
  rudderanalytics.load(
    "2Uz46tFADI5X2O34MGgGLhPFcqn",
    "https://fusemachinkbzs.dataplane.rudderstack.com"
  );
  rudderanalytics.ready(() => {
    console.log("We are all set!!!");
  });
}
export { rudderanalytics };
