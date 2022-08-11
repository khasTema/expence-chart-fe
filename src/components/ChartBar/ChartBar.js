import React from 'react'

function ChartBar({weekDay, amount, color}) {
  return (
    <div className='bar-block'>
        <div className="tulip">${amount}</div>
        <div className="bar" style={{height: `${amount + 60}px`, backgroundColor: `${color}`}}></div>
        <span className="_day">{weekDay}</span>
    </div>
  )
}

export default ChartBar