import React from 'react'

interface Props{
    text: string
}

export const NotData = ({text}:Props) => {
  return (
    <div className='flex justify-center items-center'>
        <span className='font-bold text-2xl text-slate-800'>{text}</span>
    </div>
  )
}
