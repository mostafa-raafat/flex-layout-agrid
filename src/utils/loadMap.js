import { loadModules } from 'esri-loader';
import { store } from '../redux/store';

// setDefaultOptions({ version: '4.1' });
// localhost:8080/examples/4.16/dojo/dojo.js

// setDefaultOptions({ url: 'http://localhost:4000/init.js' });

export default function loadMap(element) {
  return loadModules(
    ['esri/Map', 'esri/views/MapView', 'esri/layers/GraphicsLayer'],
    {
      css: true
    }
  ).then(([Map, MapView, GraphicsLayer]) => {
    if (!element) {
      // component or app was likely destroyed
      return;
    }
    // create the Map
    const map = new Map({
      basemap: 'streets'
    });
    // show the map at the element
    const view = new MapView({
      map,
      container: element,
      center: [-118, 34],
      zoom: 8
    });
    // wait for the view to load TODO: may not need this?
    // eslint-disable-next-line consistent-return
    return view.when(() => {
      // return a reference to the view
      map.add(
        new GraphicsLayer({
          id: 'calls graphics',
          visible: true,
          graphics: Object.values(store.getState().calls)
        })
      );
      return view;
    });
  });
}
