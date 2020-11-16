import React from "react";

import "../../static/assets/css/devresume.css";
import "../../static/assets/fontawesome/css/all.min.css";
import { Resume } from "../model/Resume";

const defaultProps = {
  children: null,
};

const Layout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return (
    <div className="main-wrapper">
      <div className="container px-3 px-lg-5">
        <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
          {children}
        </article>
      </div>
      <footer className="footer text-center py-4">
        {/* <!--/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */}
        <small className="copyright text-muted">
          Designed with <i className="fas fa-heart"></i> by{" "}
          <a
            className="theme-link"
            href="http://themes.3rdwavemedia.com"
            target="_blank"
            rel="noreferrer"
          >
            Xiaoying Riley
          </a>{" "}
          for developers
        </small>
      </footer>
    </div>
  );
};

Layout.defaultProps = defaultProps;

export default Layout;
