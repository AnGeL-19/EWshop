import React from 'react'
import { Button } from '../button/Button'
import { Link } from 'react-router-dom'
import { Input } from './Input'

interface Props{
    children: React.ReactNode,
    onSubmit: (event: any) => void
}

export const Form = ({children,onSubmit}:Props) => {
  return (
    <form onSubmit={onSubmit}
    className="flex flex-col justify-center items-center gap-3">
        {
            children
        }
       
    </form>
  )
}
