import React from "react";
import { WorkExperience } from "../model/WorkExperience";

const defaultProps = {
  items: [],
};

const WorkExperiences = (props: { items: WorkExperience[] }) => {
  const { items } = props;
  return (
    <section className="work-section py-3">
      <h3 className="text-uppercase resume-section-heading mb-4">
        Work Experiences
      </h3>
      {items.map((exp) => (
        <div className="item mb-3" key={`${exp.position}-${exp.employer}`}>
          <div className="item-heading row align-items-center mb-2">
            <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
              {exp.position}
            </h4>
            <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
              {exp.employer} | {exp.dateStart} - {exp.dateEnd}
            </div>
          </div>
          <div
            className="item-content"
            dangerouslySetInnerHTML={{ __html: exp.summaryHtml }}
          ></div>
        </div>
      ))}
    </section>
  );
};

WorkExperiences.defaultProps = defaultProps;

export default WorkExperiences;
