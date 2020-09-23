import React, { useRef } from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = () => {
  const mapRef = useRef();

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDdjXRFN8l-HXi2OfLiDiN2FnWy2mhPuso' }}
        defaultCenter={[45.4, -75.7]}
        defaultZoom={13}
        ref={mapRef}
      />
    </div>
  );
};

export default GoogleMap;
