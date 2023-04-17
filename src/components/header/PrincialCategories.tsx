import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/categoriesData'

interface Props{
    className?: string,
    showNav?: boolean
}

export const PrincialCategories = ({ className,  showNav}: Props) => {


  return (
    <nav className={`${ showNav ? 'flex': 'md:hidden'}`}>
        <ul className={`flex ${className} justify-center items-center gap-5`}>
            {
                categories.map((category => (
                    <li key={category.text} className="text-lg font-bold text-slate-700 hover:underline">
                        <Link to={category.href} >{category.text}</Link>
                    </li>
                )))
            }
              
          </ul>
      </nav>
  )
}
