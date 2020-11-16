import React from "react";
import renderer from "react-test-renderer";
import Skills from "../skills";
describe("Skills", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Skills
          technicalSkills={["skill 1", "skill 2"]}
          professionalSkills={["pro 1", "pro 2"]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
