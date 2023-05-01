import React from 'react'
import { Link } from 'react-router-dom'
import { Stars } from './Stars'
import { IProduct } from '../../interfaces/product'



export const Product = ({id, title, image, price,rating}:IProduct) => {
  return (
    <article className="w-60 md:w-52 sm:w-60 xs:w-full h-auto">

        <div className="w-full h-40">
            <Link to={`/product/${id}`} className="w-full h-full">
            <img className='w-full h-full object-contain' src={image} alt='product'/>
            </Link>
        </div>

        <div className='flex flex-col items-center gap-1'>

            <Link to={`/product/${id}`} >
                <h4 className="line-clamp-2 text-sm font-semibold w-36 h-10 hover:text-slate-500 ">
                    {title}
                </h4>
            </Link>
            
            <span className="font-normal text-sm">${price}</span>

            <Stars value={rating.rate} />

            <span className="font-semibold text-sm">{`${rating.count} ${rating.count > 1 ? 'reviews':'review'}`}</span>

        </div>

    </article>
  )
}
