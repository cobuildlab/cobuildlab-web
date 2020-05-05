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

const SeoMetaTags = ({ description, meta, title, lang, image, canonical, titleTemplate }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            seoTitle
            description
            author
            siteUrl
          }
        }
      }
    `,
  );

  const siteTitle = title || site.siteMetadata.seoTitle;
  const metaDescription = description || site.siteMetadata.description;
  const metaImageUrl = image && image.src ? `${site.siteMetadata.siteUrl}${image.src}` : null;
  const canonicalRef = canonical ? `${site.siteMetadata.siteUrl}${canonical}` : null;
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
      property: `og:url`,
      content: typeof window !== 'undefined' ? window.location.href : '',
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
  const metas =
    metaImageUrl && metaImageUrl.length
      ? defaultMetas
        .concat([
          {
            property: 'og:image',
            content: metaImageUrl,
          },
          {
            property: 'og:image:width',
            content: image.width,
          },
          {
            property: 'og:image:height',
            content: image.height,
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

  const canonicalLink = canonicalRef
    ? [
      {
        rel: 'canonical',
        href: canonicalRef,
      },
    ]
    : [];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={siteTitle}
      titleTemplate={`${titleTemplate} | %s `}
      meta={metas}
      link={canonicalLink}
    />
  );
};

SeoMetaTags.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: false,
  canonical: false,
  title: false,
  titleTemplate: 'Cobuild Lab',
};

SeoMetaTags.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  image: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
    }),
  ]),
  canonical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  titleTemplate: PropTypes.string,
};

export default SeoMetaTags;
