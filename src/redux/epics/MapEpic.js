import { mergeMap, map } from "rxjs/operators";
import { ofType } from 'redux-observable';
import { from } from "rxjs";

import { loadModules } from "esri-loader";
import * as actions from "../actions";
import { generateRandomPoint } from "../../utils/helper";

const addGraphic = () => {

    return loadModules([
        "esri/geometry/Point",
        "esri/symbols/PictureMarkerSymbol",
        "esri/geometry/SpatialReference",
        "esri/Graphic"
    ], {
        css: true,
    }).then(([Point, PictureMarkerSymbol, SpatialReference, Graphic]) => {
        let view = window.EsriView;
        let wgs = new SpatialReference({
            "wkid": 4326
        });
        const randomLocation = generateRandomPoint();
        let geometry = new Point(randomLocation, wgs);
        let symbol = new PictureMarkerSymbol({
            "url": "./Call.png",
            "height": 15,
            "width": 15
        });
        let graphic = new Graphic(geometry, symbol);
        view.map.layers.items[0].add(graphic);
        graphic.setAttribute("id", Math.floor(Math.random() * 1000) + 1);
        graphic.setAttribute("location", randomLocation.join("/"));
        return graphic;
    });
}

const zoomToPoint = async (location) => {
    let view = window.EsriView;
    return await view.goTo({
        center: location,
        zoom: 15
    });
}

const updateCall = (graphic) => {
    return loadModules([
        "esri/geometry/Point",
        "esri/geometry/SpatialReference"
    ], {
        css: true,
    }).then(([Point, SpatialReference]) => {
        let wgs = new SpatialReference({
            "wkid": 4326
        });
        const randomLocation = generateRandomPoint();
        let geometry = new Point(randomLocation, wgs);
        let graphic = window.EsriView.map.layers.items[0].graphics.items[0];
        let graphicLayer = window.EsriView.map.layers.items[0];

        var g = graphic.clone();
        g.geometry = geometry;
        graphicLayer.remove(graphic);
        graphicLayer.add(g);
        g.setAttribute("location", randomLocation.join("/"));
        return g;
    })
}

const callsEpic = action$ => action$.pipe(
    ofType("ADD_CALL"),
    mergeMap(action =>
        from(addGraphic(action.payload)).pipe(
            map((graphic) => actions.callAdded(graphic))
        )
    )
);

const callsUpdateEpic = action$ => action$.pipe(
    ofType("UPDATE_CALL"),
    mergeMap(action =>
        from(updateCall(action.payload)).pipe(
            map((graphic) => actions.callUpdated(graphic))
        )
    )
);

const zoomToPointEpic = action$ => action$.pipe(
    ofType("ZOOM_TO_POINT"),
    mergeMap(action =>
        from(zoomToPoint(action.payload)).pipe(
            map(() => actions.zoomDone())
        )
    )
);



export default [
    callsEpic,
    zoomToPointEpic,
    callsUpdateEpic
];
