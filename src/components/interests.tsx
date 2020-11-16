import React from "react";

const defaultProps = {
  items: [],
};

const Interests = (props: { items: string[] }) => {
  const { items } = props;
  return (
    <section className="skills-section py-3">
      <h3 className="text-uppercase resume-section-heading mb-4">Interests</h3>
      <ul className="list-unstyled resume-interests-list mb-0">
        {items.map((item) => (
          <li className="mb-2" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

Interests.defaultProps = defaultProps;

export default Interests;
