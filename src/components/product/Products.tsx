import React from 'react'
import { Product } from './Product'
import { IProduct } from '../../interfaces/product'
import { NotData } from '../NotData'

interface Props{
  products: IProduct[]
}

export const Products = ({products}:Props) => {

  return (
    <div className="w-full py-5 flex justify-center flex-row flex-wrap gap-10">

        {
          products.length === 0
          ? <NotData text='No products' />
          :
          products.map(product => (
            <Product 
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                rating={product.rating}
            />
          ))
        }
        
  </div>
  )
}
