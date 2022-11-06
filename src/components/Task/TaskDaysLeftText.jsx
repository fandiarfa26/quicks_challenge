import React from 'react'
import moment from 'moment'
import { DateObject } from "react-multi-date-picker";

const TaskDaysLeftText = ({taskItem}) => {
  let date = taskItem.date !== '' ? new DateObject({date: taskItem.date, format: 'DD/MM/YYYY'}) : null

  const loadDays = () => {
    let now = moment(new Date()); //todays date
    let end = moment(new Date(date)); // another date
    let diff = Math.ceil(end.diff(now, 'days', true))
    if (diff < 0) {
      return ""
    } else {
      return `${diff} Days Left`
    }
  }

  return (
    <div className='text-sm text-indicator-red'>{loadDays()}</div>
  )
}

export default TaskDaysLeftText