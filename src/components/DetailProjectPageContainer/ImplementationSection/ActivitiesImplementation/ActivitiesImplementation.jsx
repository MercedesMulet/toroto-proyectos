import React from 'react';
import { AccordionItem } from './AccordionItem/AccordionItem';

export const ActivitiesImplementation = ({ project }) => {
  return (
    <ul className="accordion-ul">
      {project.activities.map((project) => (
        <AccordionItem project={project} key={project.name} />
      ))}
    </ul>
  );
};
