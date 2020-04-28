import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

/**
 *
 * @param {string} description - The description.
 * @param {string} lang - The Language.
 * @param {object} meta - The Meta.
 * @param {string} title - The Title.
 * @param {string} image - Images the current view.
 * @returns {*} - The SE Component.
 */

const SeoMetaTags = ({ description, meta, title, lang, image, pathname }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            titleTemplate
          }
        }
      }
    `,
  );

  const siteTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image && image.src ? `${site.siteMetadata.siteUrl}${image.src}` : null;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;

  // basic defailt metas
  const defaultMetas = [
    {
      name: `description`,
      content: metaDescription,
    },
    /*{
      name: "keywords",
      content: site.siteMetadata.keywords.join(","),
    },*/
    {
      property: `og:title`,
      content: siteTitle,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: siteTitle,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];

  // metas tags this check is a images is pass for props
  const metas = metaImage
    ? defaultMetas
      .concat([
        {
          property: 'og:image',
          content: image,
        },
        {
          property: 'og:image:width',
          content: metaImage.width,
        },
        {
          property: 'og:image:height',
          content: metaImage.height,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ])
      .concat(meta)
    : defaultMetas
      .concat([
        {
          name: 'twitter:card',
          content: 'summary',
        },
      ])
      .concat(meta);

  const canonicalLink = canonical
    ? [
      {
        rel: 'canonical',
        href: canonical,
      },
    ]
    : [];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={siteTitle}
      titleTemplate={`%s | ${site.siteMetadata.titleTemplate}`}
      meta={metas}
      link={canonicalLink}
    />
  );
};

SeoMetaTags.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: null,
  pathname: null,
  title: null,
};

SeoMetaTags.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.oneOfType([null, PropTypes.string]),
  image: PropTypes.oneOfType([
    null,
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
    }),
  ]),
  pathname: PropTypes.oneOfType([null, PropTypes.string]),
};

export default SeoMetaTags;
