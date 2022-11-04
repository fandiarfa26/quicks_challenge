import React, { useCallback, useEffect, useState } from 'react'
import MoreHorizButton from './MoreHorizButton'


const FromOtherBubble = ({item , isGroup}) => {
  const [nameColor, setNameColor] = useState('')
  const [bubbleColor, setBubbleColor] = useState('')
  
  const getColor = useCallback(() => {
    if (isGroup) {
      let sumChars = 0
      for(let i = 0; i < item.user.length; i++){
        sumChars += item.user.charCodeAt(i)
      }
  
      const colorClasses = [
        {text: 'text-amber-600', bg: 'bg-amber-100'},
        {text: 'text-stone-600', bg: 'bg-stone-100'},
        {text: 'text-red-600', bg: 'bg-red-100'},
        {text: 'text-yellow-600', bg: 'bg-yellow-100'},
        {text: 'text-lime-600', bg: 'bg-lime-100'},
        {text: 'text-green-600', bg: 'bg-green-100'},
        {text: 'text-teal-600', bg: 'bg-teal-100'},
        {text: 'text-cyan-600', bg: 'bg-cyan-100'},
        {text: 'text-emerald-600', bg: 'bg-emerald-100'},
        {text: 'text-blue-600', bg: 'bg-blue-100'},
        {text: 'text-indigo-600', bg: 'bg-indigo-100'},
        {text: 'text-pink-600', bg: 'bg-pink-100'},
        {text: 'text-rose-600', bg: 'bg-rose-100'},
      ]
  
      const choosedColor = colorClasses[sumChars % colorClasses.length]
      setNameColor(choosedColor.text)
      setBubbleColor(choosedColor.bg)
    } else {
      setNameColor('text-primary')
      setBubbleColor('bg-stone-100')
    }
  }, [isGroup, item.user, setNameColor, setBubbleColor])

  useEffect(() => {
    getColor()
  }, [getColor])



  return (
    <div className='flex flex-col items-start gap-1 py-3'>
      <div className={`text-xs font-bold ${nameColor}`}>{item.user}</div>
      <div className='flex items-start max-w-md gap-2'>
        <div className={`flex-1 p-3 text-xs rounded ${bubbleColor}`}>
          <div className='mb-2'>{item.text}</div> 
          <div>{item.time}</div>
        </div>
        <MoreHorizButton id={item.id}/>
      </div>
    </div>
  )
}

export default FromOtherBubble