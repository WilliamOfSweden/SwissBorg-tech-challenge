import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

interface Props {
  description?: string
  title?: string
}

const SEO = ({ description, title }: Props) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          ogDescription
          ogImageUrl
          ogTitle
          ogType
          siteDescription
          siteTitle
          siteUrl
          twitterCard
          twitterCreator
          twitterTitle
          twitterDescription
        }
      }
    }
  `)

  const {
    ogDescription,
    ogImageUrl,
    ogTitle,
    ogType,
    siteDescription,
    siteTitle,
    siteUrl,
    twitterCard,
    twitterCreator,
    twitterTitle,
    twitterDescription,
  } = data.site.siteMetadata

  return (
    <Helmet>
      <html lang='en-GB' />
      <meta charSet='UTF-8' />
      <meta
        name='description'
        content={description ? description : siteDescription}
      />
      <title>{title ? `${title} | SwissBorg` : siteTitle}</title>

      <meta property='og:description' content={ogDescription} />
      <meta property='og:image' content={ogImageUrl} />
      <meta property='og:type' content={ogType} />
      <meta property='og:title' content={ogTitle} />
      <meta property='og:url' content={siteUrl} />
      <meta property='og:see_also' content='https://twitter.com/swissborg' />

      <meta name='twitter:card' content={twitterCard} />
      <meta name='twitter:creator' content={twitterCreator} />
      <meta name='twitter:title' content={twitterTitle} />
      <meta name='twitter:description' content={twitterDescription} />
      <meta name='twitter:url' content={siteUrl} />
      <meta name='twitter:image' content={'banner.jpg'} />
    </Helmet>
  )
}

export default SEO
