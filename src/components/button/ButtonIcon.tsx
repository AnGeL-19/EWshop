import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconComponent } from '../../types/icon'
import { getIconComponent } from '../../utils/iconCmt'

interface Props {
  iconBtn: IconComponent,
  className?: string,
  onClick: () => void 
}

export const ButtonIcon = ({ iconBtn, className, onClick }: Props) => {

  return (
    <button 
    onClick={onClick}
    className={`${className} h-10 w-10 flex justify-center items-center rounded-full hover:shadow-xl hover:bg-gray-100`}>
        <FontAwesomeIcon icon={
          getIconComponent(iconBtn)
        } size='lg'/>
    </button>
  )
}
