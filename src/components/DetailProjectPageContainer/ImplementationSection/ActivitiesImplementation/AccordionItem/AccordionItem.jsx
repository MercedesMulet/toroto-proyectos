import React, { useState, useRef } from 'react';

export const AccordionItem = ({ project }) => {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('accordion-icon');

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === 'active' ? 'accordion-icon' : 'accordion-icon rotate'
    );
  }

  return (
    <li className="activities-implementation">
      <button
        className={`accordion-btn ${setActive}`}
        onClick={toggleAccordion}
      >
        <h3 className="accordion-title">{project.name}</h3>
        <img
          src="assets/icons/chevron-down.svg"
          alt="x"
          className={`${setRotate}`}
        />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion-content"
      >
        <p className="txt-content">{project.description}</p>
      </div>
    </li>
  );
};
