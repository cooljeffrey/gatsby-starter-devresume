import React from "react";
import renderer from "react-test-renderer";
import NotFoundPage from "../404";
import * as Gatsby from "gatsby";

describe("NotFoundPage", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        author: "Simon",
        description: "Resume description",
        title: "Resume Title",
      },
    },
  }));

  it("renders correctly", () => {
    const tree = renderer.create(<NotFoundPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
