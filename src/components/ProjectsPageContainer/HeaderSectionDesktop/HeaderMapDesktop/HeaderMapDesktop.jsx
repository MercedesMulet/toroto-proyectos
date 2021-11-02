import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { MapCard } from './MapCard/MapCard';

export const HeaderMapDesktop = () => {
  const [isShown, setIsShown] = useState(false);

  const [viewport, setViewport] = useState({
    latitude: 22,
    longitude: -108,
    width: '100vw',
    height: '748px',
    zoom: 4.45,
  });

  return (
    <div className="header-map-desktop">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mercedes-mulet/ckvfy4h0p4zbx15nseolblfja"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <Marker
          latitude={19.4978}
          longitude={-99.1269}
          key="pin01"
          offsetTop={-viewport.zoom * 5}
          offsetLeft={-viewport.zoom * 5}
        >
          <button
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className="pin-btn"
          >
            <img
              className="pin-icon"
              src="/assets/icons/project_pin.svg"
              alt="Project"
              width={viewport.zoom * 5}
              height={viewport.zoom * 5}
            />
          </button>
          {isShown && (
            <div>
              <MapCard />
            </div>
          )}
        </Marker>
        <Marker
          latitude={14.90385}
          longitude={-92.25749}
          key="pin02"
          offsetTop={-viewport.zoom * 5}
          offsetLeft={-viewport.zoom * 5}
        >
          <button
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className="pin-btn"
          >
            <img
              className="pin-icon"
              src="/assets/icons/project_pin.svg"
              alt="Project"
            />
          </button>
          {isShown && (
            <div>
              <MapCard />
            </div>
          )}
        </Marker>
        <Marker
          latitude={18.5057}
          longitude={-89.3966}
          key="pin03"
          offsetTop={-viewport.zoom * 5}
          offsetLeft={-viewport.zoom * 5}
        >
          <button
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className="pin-btn"
          >
            <img
              className="pin-icon"
              src="/assets/icons/project_pin.svg"
              alt="Project"
            />
          </button>
          {isShown && (
            <div>
              <MapCard />
            </div>
          )}
        </Marker>
        <Marker
          latitude={16.2642}
          longitude={-90.621}
          key="pin04"
          offsetTop={-viewport.zoom * 5}
          offsetLeft={-viewport.zoom * 5}
        >
          <button
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className="pin-btn"
          >
            <img
              className="pin-icon"
              src="/assets/icons/project_pin.svg"
              alt="Project"
            />
          </button>
          {isShown && (
            <div>
              <MapCard />
            </div>
          )}
        </Marker>
      </ReactMapGL>
    </div>
  );
};
