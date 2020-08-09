import React from 'react'
import PropTypes from 'prop-types'

const cx = {
  span: 'f1 measure-narrow lh-title mv0 pa1 tracked-tight'
}

const BoxedText = ({ children, className, light, dark }) => (
  <span
    className={`${cx.span} ${className}`}
    style={{
      backgroundColor: dark,
      color: light
    }}
  >
    {children}
  </span>
)

BoxedText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  light: PropTypes.string,
  dark: PropTypes.string,
}

BoxedText.defaultProps = {
  className: '',
  light: '#ffffff',
  dark: '#000000'
}

export default BoxedText
