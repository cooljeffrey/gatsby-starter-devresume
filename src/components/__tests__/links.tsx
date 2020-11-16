import React from "react";
import renderer from "react-test-renderer";
import Links from "../links";
describe("Links", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Links
          links={{
            github: "test",
            linkedin: "testlinkedin",
            twitter: "twittertest",
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
