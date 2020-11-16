import React from "react";
import { Language } from "../model/Language";

const defaultProps = {
  items: [],
};

const Languages = (props: { items: Language[] }) => {
  const { items } = props;
  return (
    <section className="skills-section py-3">
      <h3 className="text-uppercase resume-section-heading mb-4">Languages</h3>
      <ul className="list-unstyled resume-lang-list">
        {items.map((lang) => (
          <li className="mb-2" key={lang.name}>
            {lang.name} <span className="text-muted">({lang.level})</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Languages.defaultProps = defaultProps;

export default Languages;
