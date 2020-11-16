import React from "react";
import renderer from "react-test-renderer";
import Bio from "../bio";
describe("Bio", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Bio
          avatar="/static/randomstring/simon.png"
          name="test"
          summary="long summary ...."
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
