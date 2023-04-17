import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="w-full h-20 mt-4">
        <div className="h-full flex flex-row flex-wrap justify-center items-center gap-2">
            <p className="font-medium text-lg text-gray-700">Created by Angel Muñoz</p>
            <Link to='https://spsolutions.com.mx/' target="_blank" className="w-40 h-16">
                <img src="https://res.cloudinary.com/dl9e7nlbu/image/upload/v1681727355/spsLogo_iuxk1o.png" alt="SPSLogo" className='w-full h-full object-contain' />
            </Link>
        </div>
    </footer>
  )
}
