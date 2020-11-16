import React from "react";
import renderer from "react-test-renderer";
import Seo from "../seo";
import * as Gatsby from "gatsby";

describe("Seo", () => {
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
    const tree = renderer
      .create(
        <Seo
          description="seo"
          lang="en"
          meta={{ meta1: "value1", meta2: "value2" }}
          title="site title"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
