import React from "react";
import renderer from "react-test-renderer";
import Languages from "../languages";
describe("Languages", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Languages items={[{ name: "English", level: "Native" }]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
