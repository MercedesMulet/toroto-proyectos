import React from 'react';

export const MapCard = () => {
  return (
    <div className="map-card">
      <img
        src="/assets/images/img_project_1.png"
        alt="Proyecto 1"
        className="img-map-card"
      />
      <div className="content-map-card">
        <p className="volanta-grid-item">Región donde se ubica, Estado.</p>
        <h2 className="h2-map-card">
          Nombre del proyecto escrito en dos líneas, lo que sea
        </h2>
        <p className="txt-map-card">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          amet error nisi eveniet in magnam quo laudantium similique blanditiis.
          Dolores quedi deserunt unde molestias facere reprehenderit.
        </p>
      </div>
    </div>
  );
};
