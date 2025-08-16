import React from 'react';
import WorkspaceCard from './WorkspaceCard';

const workspaces = [
  { year: '1st Year', link: 'https://foul-efraasia-c26.notion.site/Student-Hub-Freshman-23207cea42588032a424f12b12457b05' },
  { year: '2nd Year', link: 'https://foul-efraasia-c26.notion.site/Student-Hub-Sophomore-23207cea425880aaade5f335ca495e1a' },
  { year: '3rd Year', link: 'https://foul-efraasia-c26.notion.site/Student-Hub-Senior-CS-23207cea42588049a1f9f1d3bc909f49' },
  { year: '4th Year', link: 'https://foul-efraasia-c26.notion.site/Student-Hub-Senior-AI-23207cea425880bea633ceb1107823e3' },
];

const WorkSpaces = () => {
  return (
    <section className="work-spaces" id={"#workspaces"}>
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
