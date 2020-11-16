import React from "react";
import renderer from "react-test-renderer";
import Educations from "../educations";
describe("Educations", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Educations
          items={[
            {
              degree: "Degree",
              institution: "Institution",
              dateStart: "2020",
              dateEnd: "2030",
            },
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
