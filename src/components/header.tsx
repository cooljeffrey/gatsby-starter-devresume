import React from "react";
import { Contacts } from "../model/Contacts";

const defaultProps = {
  name: "",
  position: "",
  contacts: {},
};

const Header = ({
  name,
  position,
  contacts,
}: {
  name: string;
  position: string;
  contacts: Contacts;
}) => {
  return (
    <div className="resume-header">
      <div className="row align-items-center">
        <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
          <h2 className="resume-name mb-0 text-uppercase">{name}</h2>
          <div className="resume-tagline mb-3 mb-md-0">{position}</div>
        </div>
        <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
          <ul className="list-unstyled mb-0">
            <li className="mb-2">
              <i className="fas fa-phone-square fa-fw fa-lg mr-2 "></i>
              <a className="resume-link" href={`tel:${contacts.phone}`}>
                {contacts.phone}
              </a>
            </li>
            <li className="mb-2">
              <i className="fas fa-envelope-square fa-fw fa-lg mr-2"></i>
              <a className="resume-link" href={`mailto:${contacts.email}`}>
                {contacts.email}
              </a>
            </li>
            <li className="mb-2">
              <i className="fas fa-globe fa-fw fa-lg mr-2"></i>
              <a
                className="resume-link"
                href={`http://${contacts.website}`}
                target="_blank"
                rel="noreferrer"
              >
                {contacts.website}
              </a>
            </li>
            <li className="mb-0">
              <i className="fas fa-map-marker-alt fa-fw fa-lg mr-2"></i>
              {contacts.location}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = defaultProps;

export default Header;
