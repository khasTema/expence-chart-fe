import React from 'react'

function AppWrapper(props) {
  return (
    <main className="main__wrapper">{props.children}</main>
  )
}

export default AppWrapper