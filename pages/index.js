import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Footer from '../components/footer'
import BigContent from '../components/big-content'
import BoxedText from '../components/boxed-text'
import Logo from '../public/static/mask-icon.svg'

const cx = {
  main: 'mw8 center',
  content: 'fw9 i f1 ph3 pv6 mw6 tc center lh-title hyphens-auto',
  logo: 'v-mid stroke-current'
}

const theme = {
  light: '#ff72c6',
  dark: '#3a0023'
}

const Index = () => (
  <Layout className={cx.main} {...theme}>
    <Nav />
    <BigContent className={cx.content}>
      <Logo className={`${cx.logo} trace`} />
      <BoxedText {...theme}>
        {'apps for us'}
      </BoxedText>
    </BigContent>
    <Footer />
    <style jsx global>
      {`
        .trace path {
          stroke-dasharray: 30;
          stroke-dashoffset: 30;
          animation: trace 3s ease-in forwards;
        }
        @keyframes trace {
            to {
                stroke-dashoffset: 0;
            }
        }
      `}
    </style>
  </Layout>
)

export default Index
