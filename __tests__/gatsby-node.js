const rewire = require("rewire");
const gatsbyNode = rewire("../gatsby-node.js");
const getExtendedSchema = gatsbyNode.__get__("getExtendedSchema");
const getExtendedResolvers = gatsbyNode.__get__("getExtendedResolvers");

describe("testing gatsby-node", () => {
  const markdownMappings = [
    {
      type: `ResumesYaml`,
      fields: [{ source: `summary`, target: `summaryHtml` }],
    },
    {
      type: `ResumesYamlWorkExperiences`,
      fields: [{ source: `summary`, target: `summaryHtml` }],
    },
  ];

  describe("testing getExtendedSchema", () => {
    it("returns correct schema for mapping fields", () => {
      expect(
        getExtendedSchema(markdownMappings)
          .replace(/(\r\n|\n|\r)/gm, " ")
          .split(" ")
          .map((item) => (item.trim() ? item.trim() : ""))
          .filter((item) => {
            return !!item;
          })
          .join(" ")
      ).toEqual(
        `type ResumesYaml implements Node { summaryHtml: String } type ResumesYamlWorkExperiences implements Node { summaryHtml: String }`
      );
    });
  });

  describe("testing getExtendedResolvers", () => {
    it("returns correct resolvers for mapping fields", () => {
      const resolvers = getExtendedResolvers(markdownMappings);
      expect(resolvers.ResumesYaml).toBeDefined();
      expect(resolvers.ResumesYaml.summaryHtml).toBeDefined();
      expect(resolvers.ResumesYaml.summaryHtml.type).toBe(`String`);
      expect(typeof resolvers.ResumesYaml.summaryHtml.resolve).toBe(`function`);
      expect(
        resolvers.ResumesYaml.summaryHtml.resolve({ summary: "test" }).trim()
      ).toBe(`<p>test</p>`);
      expect(
        resolvers.ResumesYaml.summaryHtml
          .resolve({ summary: "  * test" })
          .trim()
      ).toBe(`<ul>
<li>test</li>
</ul>`);
    });
  });
});
