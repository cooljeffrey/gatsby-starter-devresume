import React from "react";

const defaultProps = {
  technicalSkills: [],
  professionalSkills: [],
};

const Skills = (props: {
  technicalSkills: string[];
  professionalSkills: string[];
}) => {
  const { technicalSkills, professionalSkills } = props;
  return (
    <section className="skills-section py-3">
      <h3 className="text-uppercase resume-section-heading mb-4">Skills</h3>
      <div className="item">
        <h4 className="item-title">Technical</h4>
        <ul className="list-unstyled resume-skills-list">
          {technicalSkills.map((skill) => (
            <li className="mb-2" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="item">
        <h4 className="item-title">Professional</h4>
        <ul className="list-unstyled resume-skills-list">
          {professionalSkills.map((skill) => (
            <li className="mb-2" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Skills.defaultProps = defaultProps;

export default Skills;
