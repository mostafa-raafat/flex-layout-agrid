import { loadModules } from "esri-loader";

export function loadMap(element, mapOptions) {
  return loadModules(["esri/Map", "esri/views/MapView", "esri/layers/GraphicsLayer",], {
    css: true
  }).then(([Map, MapView, GraphicsLayer]) => {
    if (!element) {
      // component or app was likely destroyed
      return;
    }
    // create the Map
    let map = new Map({
      basemap: "streets"
    });
    // show the map at the element
    let view = new MapView({
      map,
      container: element,
      center: [-118, 34],
      zoom: 8
    });
    // wait for the view to load TODO: may not need this?
    return view.when(() => {
      // return a reference to the view
      map.add(new GraphicsLayer(
        {
          id: "calls graphics",
          visible: true
        }
      ));
      return view;
    });
  });
}
