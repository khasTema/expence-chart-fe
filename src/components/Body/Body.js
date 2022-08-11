import React, { useState, useEffect } from 'react'
import Total from '../Total/Total'
import ChartBar from '../ChartBar/ChartBar'
// import data from '../../data/data.json'

function Body(props) {

    const [ weekExpence, setWeekExpence ] = useState([])

    useEffect(() => {
        let url = '/data/data.json'
        fetch(url)
        .then(res => res.json())
        .then(data => setWeekExpence(data))
    }, [])

    const date = new Date()
    let today = date.getDay()
    console.log(today)

  return (
    <div className='app__body'>
        <h2 className="_heading">Spending - Last 7 days</h2>
        <div className="dynamic_bars">
            {
               weekExpence.map(item => {
                return (
                    <ChartBar 
                        key={weekExpence.indexOf(item)}
                        weekDay={item.day}
                        amount={item.amount}
                        color={(weekExpence.indexOf(item) + 1 )=== today ? 'hsl(186, 34%, 60%)' : ''}
                    />
                )
               })
            } 
        </div>
        <Total />
    </div>
  )
}

export default Body