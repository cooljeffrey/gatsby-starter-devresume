import React from "react";

const defaultProps = {
  avatar: "",
  name: "",
  summary: "",
};

const Bio = (props: { avatar: string; name: string; summary: string }) => {
  const { avatar, name, summary } = props;
  return (
    <div className="resume-intro py-3">
      <div className="media flex-column flex-md-row align-items-center">
        <img
          className="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto"
          src={avatar}
          alt={name}
          title={name}
        />
        <div className="media-body text-left">
          <div
            className="mb-0"
            dangerouslySetInnerHTML={{ __html: summary }}
          ></div>
        </div>
      </div>
    </div>
  );
};

Bio.defaultProps = defaultProps;

export default Bio;
