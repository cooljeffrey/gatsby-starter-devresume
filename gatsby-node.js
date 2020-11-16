const Remark = require("remark");
const remarkHTML = require("remark-html");

// These are the fields mappings to define which fields are going to be parsed as markdown
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

const getExtendedSchema = (markdownFields) => {
  console.log(`generating extended schema`);
  return markdownFields && markdownFields.length > 0
    ? markdownFields
        .map(
          (mapping) => `type ${mapping.type} implements Node {
      ${mapping.fields.map((field) => `${field.target}: String`).join("\n")}
    }`
        )
        .join("\n")
    : null;
};

const getExtendedResolvers = (markdownMappings) => {
  console.log(`generating extended resolvers`);
  return markdownMappings && markdownMappings.length > 0
    ? markdownMappings.reduce(
        (a, b) => (
          (a[b.type] = b.fields.reduce(
            (prev, curr) => (
              (prev[curr.target] = {
                type: `String`,
                resolve: (source, args, context, info) => {
                  return Remark()
                    .use(remarkHTML)
                    .processSync(source[curr.source])
                    .toString();
                },
              }),
              prev
            ),
            {}
          )),
          a
        ),
        {}
      )
    : null;
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = getExtendedSchema(markdownMappings);
  if (typeDefs) {
    createTypes(typeDefs);
  }
};

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = getExtendedResolvers(markdownMappings);
  if (resolvers) {
    createResolvers(resolvers);
  }
};

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

const truncateSlug = (slug) => {
  return slug ? slug.replace(`/resumes`, ``) : slug;
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `ResumesYaml`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `./src/data/resumes`,
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allResumesYaml {
        edges {
          node {
            id
            default
            name
            position
            avatar
            contact {
              phone
              email
              website
              location
            }
            summary
            summaryHtml
            workExperiences {
              position
              employer
              dateStart
              dateEnd
              summary
              summaryHtml
            }
            skills {
              technical
              professional
            }
            educations {
              degree
              institution
              dateStart
              dateEnd
            }
            awards {
              name
              organization
            }
            languages {
              name
              level
            }
            interests
            projects {
              title
              meta
              summary
            }
            links {
              github
              linkedin
              twitter
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  await Promise.all(
    result.data.allResumesYaml.edges.map(async ({ node }) => {
      const avatarData = await graphql(
        `
          query($avatar: String) {
            file(
              relativePath: { eq: $avatar }
              sourceInstanceName: { eq: "images" }
            ) {
              publicURL
            }
          }
        `,
        { avatar: node.avatar }
      );
      node.avatar = avatarData?.data?.file?.publicURL;
      const newPage = {
        path: truncateSlug(node.fields.slug),
        component: path.resolve(`./src/templates/devresume.tsx`),
        context: {
          slug: node.fields.slug,
          resume: node,
          avatarUrl: avatarData?.data?.file?.publicURL,
        },
      };
      createPage(newPage);
      if (node && node.default) {
        createPage({
          ...newPage,
          path: `/`,
          context: {
            slug: `/`,
            resume: node,
          },
        });
      }
    })
  );
};
