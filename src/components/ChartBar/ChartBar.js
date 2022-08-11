import React from 'react'

function ChartBar(props) {
  return (
    <div className='bar-block'>
        <div className="tulip">$55.36</div>
        <div className="bar" style={{height: '45px'}}></div>
        <span className="_day">mon</span>
    </div>
  )
}

export default ChartBar