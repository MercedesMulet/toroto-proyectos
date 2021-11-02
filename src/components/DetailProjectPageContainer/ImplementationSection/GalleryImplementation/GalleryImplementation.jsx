import React from 'react';

export const GalleryImplementation = () => {
  return (
    <>
      <h3 className="h3-implementation">Galería de imágenes</h3>
      <div className="grid-gallery-one">
        <img
          src="assets/images/img_project_gallery_1.png"
          alt=""
          className="img-gallery"
        />
        <img
          src="assets/images/img_project_gallery_2.png"
          alt=""
          className="img-gallery"
        />
        <img
          src="assets/images/img_project_gallery_3.png"
          alt=""
          className="img-gallery"
        />
      </div>
      <div className="grid-gallery-two">
        <img
          src="assets/images/img_project_gallery_4.png"
          alt=""
          className="img-gallery"
        />
        <img
          src="assets/images/img_project_gallery_5.png"
          alt=""
          className="img-gallery"
        />
        <img
          src="assets/images/img_project_gallery_6.png"
          alt=""
          className="img-gallery"
        />
      </div>
    </>
  );
};
