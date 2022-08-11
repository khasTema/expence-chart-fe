import React from 'react'

function Total() {
  return (
    <div className="total_section">
        <div className="__current_month">
            <span className="_heading">Total this month</span>
            <h2 className="_ammount">$478.33</h2>
        </div>
        <div className="__prev_month">
            <h5 className="_percentage">+2.4%</h5>
            <span className="_subtext">from last month</span>
        </div>
    </div>
  )
}

export default Total