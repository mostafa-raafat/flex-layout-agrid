import React, { useEffect, useRef } from 'react';
import loadMap from '../../utils/loadMap';

const Map = () => {
  const mapRef = useRef();

  useEffect(() => {
    loadMap(mapRef.current).then(view => {
      window.EsriView = view;
    });
  }, []);

  return (
    <div style={{ height: '100%', width: '100%' }} ref={mapRef} id="test" />
  );
};

export default Map;
