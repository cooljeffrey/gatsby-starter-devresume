import React from "react";
import renderer from "react-test-renderer";
import * as Gatsby from "gatsby";
import { resume } from "../../../__mocks__/resume";
import DevResume from "../devresume";

describe("DevResume", () => {
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
      .create(<DevResume pageContext={{ resume: resume }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
