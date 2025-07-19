import React from 'react';

const WorkspaceCard = ({ year, link }) => {
  return (
    <div className="year-div">
      <div className="icon-circle">
        <i className="fa-solid fa-book-open"></i>
      </div>
      <div className="year-title">{year}</div>
      <div className="year-desc">
        Access your year-specific resources and workspace
      </div>
      <a className="workspace-btn" href={link}>
        Enter Workspace
      </a>
    </div>
  );
};

export default WorkspaceCard;
