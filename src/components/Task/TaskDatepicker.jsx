import React from 'react'
import { Calendar, DateObject } from "react-multi-date-picker";
import {MdCalendarToday, MdOutlineSchedule} from 'react-icons/md'
import { useRecoilState } from 'recoil';
import { taskDateOpenId, taskListData } from '../../quick_recoil';


const TaskDatepicker = ({taskItem}) => {
  const [data, setData] = useRecoilState(taskListData)
  const [showId, setShowId] = useRecoilState(taskDateOpenId)

  const handleChange = (dateObj) => {
    let newData = data.map(obj => {
      if (obj.id === taskItem.id) {
        return {...obj, date: dateObj.format('DD/MM/YYYY')}
      }
      return obj
    })
    setData(newData)
    setShowId('')
  }

  const handleShow = () => {
    if (showId === taskItem.id) {
      setShowId('')
    } else {
      setShowId(taskItem.id)
    }
  }

  const handleChangeInput = (e) => {
    let newData = data.map(obj => {
      if (obj.id === taskItem.id) {
        let dt = e.target.value.split('-')
        let newDt = [dt[2], dt[1], dt[0]].join('/')
        return {...obj, date: newDt === '//' ? '' : newDt}
      }
      return obj
    })
    setData(newData)
  }

  const dateFormat = (value) => {
    if (value !== '' || value !== '--') {
      let dt = value.split('/')
      return [dt[2], dt[1], dt[0]].join('-')
    } else {
      return ''
    }
  }

  return (
    <div className='flex items-center gap-4 px-2 mt-3 '>
      <a href="#!" onClick={handleShow}>
        <MdOutlineSchedule className={`w-5 h-5 ${taskItem.date !== '' ? 'text-primary':'text-secondary-dark'}`}/>
      </a>
      <div className="px-2 py-1 rounded-[5px] border border-secondary flex gap-10 items-center">
        
        {
          taskItem.date !== '' 
            ? <input 
                type="date" 
                className="flex-1 p-0 border-transparent focus:border-transparent focus:ring-0" 
                value={dateFormat(taskItem.date)} 
                onChange={handleChangeInput}
                />
            : <span className='text-secondary'>Set Date</span>
        }
        
        <div className='relative'>
          <a href="#!" onClick={handleShow}>
            <MdCalendarToday className="w-4 h-4 text-secondary-dark"/>
          </a>
          <div className={`absolute z-10 p-1 overflow-hidden ${showId === taskItem.id ? 'w-auto h-auto' : 'w-0 h-0'}`}>
            
            <Calendar 
              className={`transition-all ease-in-out duration-500 z-0 mt-4 ${showId === taskItem.id ? 'translate-x-0' : '-translate-x-full -ml-10'}`}
              minDate={new Date()}
              value={new DateObject({date: taskItem.date, format: 'DD/MM/YYYY'})}
              format='DD/MM/YYYY'
              onChange={handleChange}
              />
              
          </div>
          
          
          
          
        </div>
        
        {/* <DatePicker 
          arrow={false}
          minDate={new Date()}
          value={dateValue}
          format='DD/MM/YYYY'
          onChange={handleChange}
          render={(value, openCalendar) => {
            return (
              <a href="#!" onClick={openCalendar} >
                <MdCalendarToday className="w-4 h-4 text-secondary-dark"/>
              </a>
            )
          }}
        /> */}
      </div>
    </div>
    
    
  )
}

export default TaskDatepicker