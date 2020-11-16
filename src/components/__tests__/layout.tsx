import React from "react";
import renderer from "react-test-renderer";
import Layout from "../layout";
import * as Gatsby from "gatsby";
import { resume } from "../../../__mocks__/resume";
import SEO from "../seo";
import Header from "../header";
import Awards from "../awards";
import Bio from "../bio";
import Educations from "../educations";
import Interests from "../interests";
import Languages from "../languages";
import Links from "../links";
import Projects from "../projects";
import Skills from "../skills";
import WorkExperiences from "../workExperiences";

describe("Layout", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        author: "Simon",
        description: "Resume description",
        title: "Resume Title",
      },
    },
  }));

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Layout>
          <SEO
            title={`${resume.name} -  ${resume.position}`}
            description={`${resume.name} ${resume.position} resume`}
            lang="en"
            meta={[{ name: `author`, content: resume.name }]}
          />
          <Header
            name={resume.name}
            position={resume.position}
            contacts={resume.contact}
          />
          <hr />
          <Bio
            avatar={resume.avatar}
            name={resume.name}
            summary={resume.summary}
          />
          <hr />
          <div className="resume-body">
            <div className="row">
              <div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
                <WorkExperiences items={resume.workExperiences || []} />
                <Projects items={resume.projects || []} />
              </div>
              <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
                <Skills
                  technicalSkills={resume.skills?.technical || []}
                  professionalSkills={resume.skills?.professional || []}
                />
                <Educations items={resume.educations || []} />
                <Awards items={resume.awards || []} />
                <Languages items={resume.languages || []} />
                <Interests items={resume.interests || []} />
              </aside>
            </div>
          </div>
          <hr />
          <Links links={resume.links || []} />
        </Layout>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
