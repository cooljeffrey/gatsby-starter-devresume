import PropTypes from "prop-types";
import React from "react";
import { Award } from "../model/Award";

const defaultProps = {
  items: [],
};

const Awards = (props: { items: Award[] }) => {
  const { items } = props;
  return (
    <section className="education-section py-3">
      <h3 className="text-uppercase resume-section-heading mb-4">Awards</h3>
      <ul className="list-unstyled resume-awards-list">
        {items.map((award) => (
          <li className="mb-3" key={`${award.name}-${award.organization}`}>
            <div className="font-weight-bold">{award.name}</div>
            <div className="text-muted">{award.organization}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

Awards.defaultProps = defaultProps;

export default Awards;
