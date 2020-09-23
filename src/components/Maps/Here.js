/* eslint-disable no-unused-vars */
import React, { useLayoutEffect, useRef } from 'react';

export const HereMap = () => {
  const mapRef = useRef(null);

  useLayoutEffect(() => {
    if (!mapRef.current) return;
    const { H } = window;
    const platform = new H.service.Platform({
      apikey: 'q3OKsZk6PeP4ufg0e6cAH8hz2DmYPCMNU7JQ5jeHkjk'
    });
    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 50, lng: 5 },
      zoom: 4,
      pixelRatio: window.devicePixelRatio || 1
    });

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

    const ui = H.ui.UI.createDefault(hMap, defaultLayers);

    // eslint-disable-next-line consistent-return
    return () => {
      hMap.dispose();
    };
  }, [mapRef]);

  return (
    <div
      className="map"
      ref={mapRef}
      style={{ height: '100%', width: '100%' }}
    />
  );
};

export default HereMap;
