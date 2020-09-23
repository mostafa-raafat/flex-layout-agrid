import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { from } from 'rxjs';

import { loadModules } from 'esri-loader';
import * as actions from '../actions';
import { generateRandomPoint } from '../../utils/helper';

const addGraphic = call => {
  return loadModules(
    [
      'esri/geometry/Point',
      'esri/symbols/PictureMarkerSymbol',
      'esri/geometry/SpatialReference',
      'esri/Graphic'
    ],
    {
      css: true
    }
  ).then(([Point, PictureMarkerSymbol, SpatialReference, Graphic]) => {
    // eslint-disable-next-line no-undef
    const view = window.EsriView;
    const wgs = new SpatialReference({
      wkid: 4326
    });
    const randomLocation = generateRandomPoint();
    const geometry = new Point(randomLocation, wgs);
    const symbol = new PictureMarkerSymbol({
      url: './Call.png',
      height: 15,
      width: 15
    });
    const graphic = new Graphic(geometry, symbol);
    view.map.layers.items[0].add(graphic);
    graphic.setAttribute('id', call.id);
    graphic.setAttribute('location', randomLocation.join('/'));
    return graphic;
  });
};

const updateGraphic = graphic => {
  return loadModules(
    ['esri/geometry/Point', 'esri/geometry/SpatialReference'],
    {
      css: true
    }
  ).then(([Point, SpatialReference]) => {
    const wgs = new SpatialReference({
      wkid: 4326
    });
    const randomLocation = generateRandomPoint();
    const geometry = new Point(randomLocation, wgs);
    // eslint-disable-next-line no-undef
    const graphicLayer = window.EsriView.map.layers.items[0];

    const g = graphic.clone();
    g.geometry = geometry;
    graphicLayer.remove(graphic);
    graphicLayer.add(g);
    g.setAttribute('location', randomLocation.join('/'));
    return g;
  });
};

const zoomToPoint = location => {
  // eslint-disable-next-line no-undef
  const view = window.EsriView;
  return view.goTo({
    center: location,
    zoom: 15
  });
};

const callsEpic = action$ =>
  action$.pipe(
    ofType('ADD_CALL'),
    mergeMap(action =>
      from(addGraphic(action.payload)).pipe(
        map(graphic => actions.callAdded(graphic))
      )
    )
  );

const callsUpdateEpic = action$ =>
  action$.pipe(
    ofType('UPDATE_CALL'),
    mergeMap(action =>
      from(updateGraphic(action.payload)).pipe(
        map(graphic => actions.callUpdated(graphic))
      )
    )
  );

const zoomToPointEpic = action$ =>
  action$.pipe(
    ofType('ZOOM_TO_POINT'),
    mergeMap(action =>
      from(zoomToPoint(action.payload)).pipe(map(() => actions.zoomDone()))
    )
  );

export default [callsEpic, zoomToPointEpic, callsUpdateEpic];
