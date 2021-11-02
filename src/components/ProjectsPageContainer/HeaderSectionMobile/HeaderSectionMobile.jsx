import React from 'react';
import { HeaderContentMobile } from './HeaderContentMobile/HeaderContentMobile';

export const HeaderSectionMobile = () => {
  return (
    <div className="header-section-mobile">
      <HeaderContentMobile />
      <img
        src="/assets/images/header_img_mobile.png"
        alt="Hombre midiendo diámetro de un árbol"
      />
    </div>
  );
};
