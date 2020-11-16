import PropTypes from "prop-types";
import React from "react";
import { Project } from "../model/Project";

const defaultProps = {
  items: [],
};

const Projects = (props: { items: Project[] }) => {
  const { items } = props;

  return (
    <section className="project-section py-3">
      <h3 className="text-uppercase resume-section-heading mb-4">Projects</h3>
      {items.map((project) => (
        <div className="item mb-3" key={project.title}>
          <div className="item-heading row align-items-center mb-2">
            <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
              {project.title}
            </h4>
            <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
              {project.meta}
            </div>
          </div>
          <div className="item-content">
            <p>{project.summary}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

Projects.defaultProps = defaultProps;

export default Projects;
