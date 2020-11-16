import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const defaultProps = {
  description: "",
  lang: "en",
  meta: {},
  title: "",
};

function SEO(props: {
  description: string;
  lang: string;
  meta: any;
  title: string;
}) {
  const { description, lang, meta, title } = props;
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900"
        rel="stylesheet"
      />
    </Helmet>
  );
}

SEO.defaultProps = defaultProps;

export default SEO;
