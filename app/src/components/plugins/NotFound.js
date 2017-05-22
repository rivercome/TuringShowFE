import React from 'react'

const NotFound = (props) => {
  return (
    <div>
      <h1 className="not-found-left">404</h1>
      <div className="not-found-right">
        <h2 className="not-found-right-content">
          This page could not be found</h2>
      </div>
    </div>
  )
}

NotFound.propTypes = {}
NotFound.defaultProps = {}

export default NotFound
