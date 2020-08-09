import React from 'react'
import PropTypes from 'prop-types'

const cx = {
  article: 'vh-75 dt w-100 cover',
  articleInner: 'dtc v-mid'
}

const BigContent = ({ children, className, style }) => (
  <article 
    className={`${cx.article} ${className}`}
    style={style}
  >
    <div className={cx.articleInner}>
      {children}
    </div>
  </article>
)

BigContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
}

BigContent.defaultProps = {
  className: '',
  style: {}
}

export default BigContent
