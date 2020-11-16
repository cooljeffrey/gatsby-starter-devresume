import React from "react";
import renderer from "react-test-renderer";
import Awards from "../awards";
describe("Awards", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Awards items={[{ name: "Award", organization: "Org" }]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
