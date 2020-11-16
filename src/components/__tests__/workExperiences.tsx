import React from "react";
import renderer from "react-test-renderer";
import WorkExperiences from "../workExperiences";
describe("WorkExperiences", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <WorkExperiences
          items={[
            {
              employer: "Employer 1",
              position: "Tester",
              dateStart: "Jan 2019",
              dateEnd: "Aug 2020",
              summary: "Testing the stuff",
              summaryHtml: "<p>all the summary</p>",
            },
            {
              employer: "Employer 2",
              position: "Developer",
              dateStart: "Jan 2000",
              dateEnd: "Dec 2018",
              summary: "Develop the stuff",
              summaryHtml: "<p>all the summary</p>",
            },
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
