import React from 'react'
import { ReactComponent as Logo } from '../../images/logo.svg'

function Head() {
  return (
    <div className="app_header">
        <div className="__balance">
            <span className="_headding">My balance</span>
            <h2 className="_balance_ammount">$921.98</h2>
        </div>
        <div className="logo">
            <Logo />
        </div>
    </div>
  )
}

export default Head