import React from 'react'
import { useRecoilState } from 'recoil'
import { uid } from 'uid'
import { taskListData } from '../../quick_recoil'

const NewTaskButton = ({bottomRef}) => {
  const [data, setData] = useRecoilState(taskListData)

  const handleAddTask = () => {
    let newTask = {
      id: uid(),
      title: '',
      date: null,
      description: '',
      is_checked: false,
      tags: [],
    }

    setData([...data, newTask])
    setTimeout(function() {
      bottomRef.current.scrollIntoView({bottom: 0, behavior: 'smooth'});
    }, 100);
  }

  return (
    <a href="#!" onClick={handleAddTask} className='rounded-[5px] bg-primary hover:bg-primary-dark text-white py-2 px-4'>
      New Task
    </a>
  )
}

export default NewTaskButton