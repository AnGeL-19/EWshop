import React from 'react'
import { ButtonIcon } from '../button/ButtonIcon';
import { Filters } from './Filters';

interface Props{
    setValue: (value: number) => void;
    openFilter: boolean;
    setOpenFilter: (value: boolean) => void;
}

export const MenuFilter = ({openFilter,setOpenFilter,setValue}:Props) => {
  return (
    <div className={ `${openFilter ? 'h-1/2 p-3 flex flex-col':'h-0'} transition-all 
        duration-200 fixed bottom-0 left-0 w-screen bg-white `}>
        <div className="flex justify-end mt-3">
            <ButtonIcon icon='faClose' onClick={()=> setOpenFilter(false)}/>
        </div>

        <div>
            <Filters setValue={setValue} />
        </div>
    </div>
    
  )
}
