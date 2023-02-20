import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {
  const title = props.project.title;
  const deadline = props.project.deadline;
  const priority = props.project.priority;
  const completed = props.project.completed;
  const desciption = props.project.description;
  const id = props.project.id;
  const url = `/projects/${id}`;
  //const robotsAssigned = ?

  return (
    <div className="project">
      <Link to={url}>
        <p>{title}</p>
      </Link>
      <p>{deadline}</p>
      <p>{priority}</p>
      <p>{completed}</p>
      <p>{desciption}</p>
    </div>
  );
};

export default Project;
