import React from "react";
import { Social } from "../model/Social";

const defaultProps = {
  links: {},
};

const Links = (props: { links: Social }) => {
  const { links } = props;
  return (
    <div className="resume-footer text-center">
      <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
        {links?.github && (
          <li className="list-inline-item mb-lg-0 mr-3">
            <a
              className="resume-link"
              href={`https://github.com/${links.github}`}
            >
              <i
                className="fab fa-github-square fa-2x mr-2"
                data-fa-transform="down-4"
              ></i>
              <span className="d-none d-lg-inline-block text-muted">
                github.com/{links.github}
              </span>
            </a>
          </li>
        )}
        {links?.linkedin && (
          <li className="list-inline-item mb-lg-0 mr-3">
            <a
              className="resume-link"
              href={`https://linkedin.com/in/${links.linkedin}`}
            >
              <i
                className="fab fa-linkedin fa-2x mr-2"
                data-fa-transform="down-4"
              ></i>
              <span className="d-none d-lg-inline-block text-muted">
                linkedin.com/in/{links.linkedin}
              </span>
            </a>
          </li>
        )}
        {links?.twitter && (
          <li className="list-inline-item mb-lg-0 mr-lg-3">
            <a
              className="resume-link"
              href={`https://twitter.com/${links.twitter}`}
            >
              <i
                className="fab fa-twitter-square fa-2x mr-2"
                data-fa-transform="down-4"
              ></i>
              <span className="d-none d-lg-inline-block text-muted">
                @{links.twitter}
              </span>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

Links.defaultProps = defaultProps;

export default Links;
