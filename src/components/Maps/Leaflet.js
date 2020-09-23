import React, { useRef } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = () => {
  const mapRef = useRef();

  return (
    <Map
      ref={mapRef}
      center={[45.4, -75.7]}
      zoom={13}
      style={{
        height: '100vh',
        width: '100vw'
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[45.4, -75.7]}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};

export default LeafletMap;
