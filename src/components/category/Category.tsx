import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { INavCategories } from '../../interfaces/category'
import { getIconComponent } from '../../utils/iconCmt'

export const Category = ({href,text,icon='faPerson'}:INavCategories) => {
  return (
    <div className="w-60 h-16 bg-[#FFF0F0] rounded-xl hover:bg-[#ffdfdf]">
      <Link to={href} className="w-full h-full flex flex-row justify-center items-center gap-5">
        <FontAwesomeIcon icon={getIconComponent(icon)} color='gray' size='lg'/>
        <span className="font-semibold text-lg text-gray-600">{text}</span>
      </Link>
    </div>
  )
}
