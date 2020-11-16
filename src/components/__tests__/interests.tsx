import React from "react";
import renderer from "react-test-renderer";
import Interests from "../interests";
describe("Educations", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Interests items={["Hobby", "Another Hobby"]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
