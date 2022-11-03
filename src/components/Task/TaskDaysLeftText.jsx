import React from 'react'
import moment from 'moment'

const TaskDaysLeftText = ({date}) => {
  const loadDays = () => {
    var now = moment(new Date()); //todays date
    var end = moment(new Date(date)); // another date
    return Math.ceil(end.diff(now, 'days', true))
  }

  return (
    <div className='text-sm text-indicator-red'>{loadDays()} Days left</div>
  )
}

export default TaskDaysLeftText