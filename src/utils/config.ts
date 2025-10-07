import { init } from "@noriginmedia/norigin-spatial-navigation";

export const setupSpatialNavigation = () => {
  init({
    debug: false,
    visualDebug: false,
    distanceCalculationMethod: "center",
  });
};
