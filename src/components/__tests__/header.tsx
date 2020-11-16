import React from "react";
import renderer from "react-test-renderer";
import Header from "../header";
describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Header
          name="name"
          position="test"
          contacts={{
            phone: "123",
            email: "test@test.dev",
            website: "https://test.dev",
            location: "My Location",
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
