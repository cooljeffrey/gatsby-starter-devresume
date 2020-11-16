import React from "react";
import { Education } from "../model/Education";

const defaultProps = {
  items: [],
};

const Educations = (props: { items: Education[] }) => {
  const { items } = props;

  return (
    <section className="education-section py-3">
      <h3 className="text-uppercase resume-section-heading mb-4">Education</h3>
      <ul className="list-unstyled resume-education-list">
        {items.map((edu) => (
          <li className="mb-3" key={`${edu.degree}-${edu.institution}`}>
            <div className="resume-degree font-weight-bold">{edu.degree}</div>
            <div className="resume-degree-org text-muted">
              {edu.institution}
            </div>
            <div className="resume-degree-time text-muted">
              {edu.dateStart} - {edu.dateEnd}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

Educations.defaultProps = defaultProps;

export default Educations;
