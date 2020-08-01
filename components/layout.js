import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

const cx = {
  main: 'sans-serif'
}

const Layout = ({ title, description, children, className, light, dark }) => {
  return (
    <main className={`${cx.main} ${className}`}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:title' content={title} />
        <meta charSet='utf-8' />
        <meta name='keywords' content='girlfriend, technology' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:type' content='website' />
        <meta name='twitter:image' content='/static/facebook-open-graph.png' />
        <meta name='twitter:image:alt' content='logo for girlfriend.technology' />
        <meta property='og:image' content='/static/facebook-open-graph.png' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:width' content='1200' />
        <link rel='apple-touch-icon' href='/static/apple-touch-icon.png' />
        <link rel='icon' href='/static/favicon.ico' />
        <link rel='mask-icon' sizes='any' href='/static/mask-icon.svg' color={light} />
      </Head>
      {children}
      <style jsx global>
        {`
          body {
            color: ${dark};
            background: ${light};
          }
          a {
            color: ${dark};
          }
          nav {
            background-image: linear-gradient(0deg, rgba(255,255,255,0), rgba(255,255,255,0.15));
          }
          .stroke-current path {
            stroke: currentColor;
          }
        `}
      </style>
    </main>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  light: PropTypes.string,
  dark: PropTypes.string
}

Layout.defaultProps = {
  title: 'girlfriend technology',
  description: '',
  className: '',
  light: '#ffffff',
  dark: '#000000'
}

export default Layout
