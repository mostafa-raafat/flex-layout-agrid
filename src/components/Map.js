import React from "react";
import { loadMap } from "./loadMap";

const Map = props => {
  const containerID = "map-view-container";

  loadMap(containerID, props.mapConfig).then((view) => {
    window.EsriView = view;
  });

  return <div style={{ height: "100%", width: "100%" }} id={containerID}></div>;
};


export default React.memo(Map)