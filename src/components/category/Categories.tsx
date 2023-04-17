import React from 'react'
import { Category } from './Category'
import { categories } from '../../data/categoriesData';

export const Categories = () => {
  return (
    <div className="w-full py-5 flex justify-center flex-row flex-wrap gap-6">

      {
        categories.slice(1,categories.length).map(category => (
          <Category key={category.text} href={category.href} text={category.text} icon={category.icon} />
        ))

      }

    </div>
  )
}
