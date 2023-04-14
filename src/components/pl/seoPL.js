import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ descriptionPL, titlePL, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            titlePL
            descriptionPL
            authorPL
          }
        }
      }
    `
  )

  const metaDescription = descriptionPL || site.siteMetadata.descriptionPL
  const defaultTitle = site.siteMetadata?.titlePL

  return (
    <>
      <title>{defaultTitle ? `${titlePL} | ${defaultTitle}` : titlePL}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={titlePL} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.authorPL || ``} />
      <meta name="twitter:title" content={titlePL} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo
