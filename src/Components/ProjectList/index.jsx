import React from "react";
import PropTypes from "prop-types";
import ProjectItem from "../ProjectItem";
import "./style.scss";

function ProjectList(props) {
  const { projects } = props;
  return (
    <div className="project__list">
      {projects.map((project, index) => {
        return <ProjectItem key={index} project={project} />;
      })}
    </div>
  );
}

ProjectList.propTypes = {};

export default ProjectList;
