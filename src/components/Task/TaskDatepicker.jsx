import React from 'react'
import DatePicker from "react-multi-date-picker";
import {MdCalendarToday} from 'react-icons/md'


const TaskDatepicker = ({dateValue, setDateValue}) => {

  return (
    <DatePicker 
      arrow={false}
      minDate={new Date()}
      value={dateValue}
      format='DD/MM/YYYY'
      onChange={setDateValue}
      render={(value, openCalendar) => {
        return (
          <a href="#!" onClick={openCalendar} className="px-2 py-1 rounded-[5px] border border-secondary flex gap-10 items-center">
            <span className={dateValue === null ?'text-secondary' :'text-black'}>{value !== '' ? value : 'Set Date'}</span>  
            <MdCalendarToday className="w-4 h-4 text-secondary-dark"/>
          </a>
        )
      }}
    />
  )
}

export default TaskDatepicker