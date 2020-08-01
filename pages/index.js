import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Footer from '../components/footer'

const cx = {
  main: 'mw8 center',
  content: 'fw9 i f-subheadline ph3 pt6 mw6 center lh-title'
}

const theme = {
  light: '#ff72c6',
  dark: '#3a0023'
}

const Index = () => (
  <Layout className={cx.main} {...theme}>
    <Nav />
    <div className={cx.content}>
      {'👭 apps for us 👩‍❤️‍💋‍👩'}
    </div>
    <Footer />
  </Layout>
)

export default Index
