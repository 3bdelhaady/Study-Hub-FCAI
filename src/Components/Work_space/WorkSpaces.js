import React from 'react';
import WorkspaceCard from './WorkspaceCard';

const workspaces = [
  { year: '1st Year', link: '/workspace/year1' },
  { year: '2nd Year', link: '/workspace/year2' },
  { year: '3rd Year', link: '/workspace/year3' },
  { year: '4th Year', link: '/workspace/year4' },
];

const WorkSpaces = () => {
  return (
    <section className="work-spaces">
      <h1>Work Spaces</h1>
      <p>
        “Join your year's dedicated workspace and connect with fellow students
        on the same journey”
      </p>
      <div className="workspace-container">
        {workspaces.map((item, index) => (
          <WorkspaceCard key={index} year={item.year} link={item.link} />
        ))}
      </div>
    </section>
  );
};

export default WorkSpaces;
