import React from 'react'
import {Link} from 'react-router-dom'
function Button({btnText}) {
  return (
    <>
    <Link type="button" to="/pricing" className="btn btn-success">{btnText}</Link>
    </>
  )
}

export default Button
