import React from "react";
import renderer from "react-test-renderer";
import Projects from "../projects";
describe("Projects", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Projects
          items={[
            {
              title: "project title",
              meta: "Opensource",
              summary: "long project summary",
            },
            {
              title: "project title 2",
              meta: "Opensource",
              summary: "long project summary",
            },
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
