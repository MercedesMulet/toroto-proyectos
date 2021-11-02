import React from 'react';

export const ContactButton = (props) => {
  const content = props.content;

  console.log(props, content);

  return (
    <>
      <button className="contact-btn">
        <a href="/#" className="contact-btn-link">
          CONTACTO
        </a>
      </button>
    </>
  );
};
