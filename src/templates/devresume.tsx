import React from "react";
import Educations from "../components/educations";
import Awards from "../components/awards";
import Languages from "../components/languages";
import Interests from "../components/interests";
import Links from "../components/links";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Bio from "../components/bio";
import WorkExperiences from "../components/workExperiences";
import Projects from "../components/projects";
import Skills from "../components/skills";

const DevResume = (props: { pageContext: any }) => {
  const { resume } = props.pageContext;
  return (
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
      <Bio avatar={resume.avatar} name={resume.name} summary={resume.summary} />
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
  );
};

export default DevResume;
