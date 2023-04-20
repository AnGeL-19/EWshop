import React from 'react'
import { ButtonIcon } from '../button/ButtonIcon';

interface Props{
    setOpenModal: (value: boolean) => void;
    children: React.ReactNode
}

export const Modal = ({children, setOpenModal}:Props) => {
  return (
    <>
        <div className='transition-opacity fixed top-0 left-0 w-full min-h-screen bg-black/20 backdrop-blur-sm opacity-80'
            onClick={()=>setOpenModal(false)}
        >
            
        </div>
        <div className='fixed flex flex-col p-2 w-56 bg-white rounded-lg'>
                <div className="flex justify-end items-end">
                    <ButtonIcon iconBtn='faClose' onClick={()=>setOpenModal(false)}/>
                </div>
                <div className=''>
                    { children }
                </div>
        </div>
    </>
   
  )
}
