import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../contexts/cart/CartContext';

export const LinkCart = () => {

  const { cart } = useContext(CartContext)

  return (
    <Link className="relative h-10 w-10 rounded-full flex justify-center items-center hover:shadow-xl hover:bg-gray-100" to='/cart'>
        <FontAwesomeIcon icon={faCartShopping} size='lg'/>
        {
            (cart.length !== 0)
            &&
            <div className="absolute w-4 h-4 bg-red-600 top-0 right-0 rounded-full flex justify-center items-center">
                <span className="text-xs font-semibold text-white ">
                  {cart.length > 9 ? `+9`: cart.length }
                </span>
            </div>
        }
        
    </Link>
  )
}
