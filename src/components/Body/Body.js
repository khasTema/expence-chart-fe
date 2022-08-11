import React from 'react'
import Total from '../Total/Total'
import ChartBar from '../ChartBar/ChartBar'


function Body(props) {
  return (
    <div className='app__body'>
        <h2 className="_heading">Spending - Last 7 days</h2>
        <div className="dynamic_bars">
            <ChartBar/>
            <ChartBar/>
            <ChartBar/>
            <ChartBar/>
            <ChartBar/>
            <ChartBar/>
            <ChartBar/>
        </div>
        <Total />
    </div>
  )
}

export default Body