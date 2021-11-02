import React from 'react';

export const ButtonPrimary = ({ children, buttonStyle }) => {
  const STYLES = ['btn--primary--solid', 'btn--primary--outline'];

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <button className={`btn-primary ${checkButtonStyle}`}>
      <p>{children}</p>
    </button>
  );
};
