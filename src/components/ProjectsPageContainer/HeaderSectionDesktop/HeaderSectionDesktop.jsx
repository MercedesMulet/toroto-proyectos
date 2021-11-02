import React from 'react';
import { ProjectListButton } from '../../Buttons/ProjectListButton/ProjectListButton';
import { HeaderContentDesktop } from './HeaderContentDesktop/HeaderContentDesktop';
import { HeaderMapDesktop } from './HeaderMapDesktop/HeaderMapDesktop';

export const HeaderSectionDesktop = () => {
  return (
    <div>
      <HeaderMapDesktop />
      <HeaderContentDesktop />
      <div className="project-list-btn-desktop">
        <ProjectListButton />
      </div>
    </div>
  );
};
