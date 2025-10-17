import { init } from "@noriginmedia/norigin-spatial-navigation";

export const setupSpatialNavigation = () => {
  init({
    debug: true,
    visualDebug: false,
    distanceCalculationMethod: "center",
  });
};
