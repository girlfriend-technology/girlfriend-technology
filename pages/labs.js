import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Footer from '../components/footer'

const cx = {
  main: 'mw8 center',
  content: 'fw9 i f-subheadline ph3 pt6 mw6 center lh-title'
}

const theme = {
  light: '#bf8bff',
  dark: '#23004e'
}

const Labs = () => (
  <Layout
    title='girlfriend technology ~ labs'
    className={cx.main}
    {...theme}
  >
    <Nav />
    <div className={cx.content}>
      {'coming soon 👩‍🔬'}
    </div>
    <Footer />
  </Layout>
)

export default Labs
