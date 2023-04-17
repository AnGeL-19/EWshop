import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface Props{
    className?: string,
    fullWidth?: boolean
}

export const Search = ({ className, fullWidth }:Props) => {
  return (
    <div className={`${className} flex-row justify-center items-center `}>

        <div className={`${fullWidth ? 'w-full' : 'w-[450px]'} 
        flex flex-row items-center gap-2 h-10 border-2 rounded-3xl
        bg-white pl-3
        `}>
            <input 
                type="text" 
                className="w-full outline-none text-gray-600 font-medium"
                placeholder='Search'
            />
            <button className="h-full w-[36px] flex items-center justify-center hover:bg-slate-200 rounded-full p-2">
                <FontAwesomeIcon icon={faSearch} color='gray' />
            </button>
            
        </div>
        

    </div>

  )
}
