import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../button/Button'
import { AuthContext } from '../../contexts/auth/AuthContext'

export const MenuAuth = () => {

  const {isLogged, user, logout} = useContext(AuthContext)

  return (
    <div className='absolute -bottom-32 -left-44 w-52 h-28 bg-white border rounded-xl p-5 flex flex-col justify-center items-center'>

        {
          isLogged
          ?
          <span>{user?.username}</span>
          :
          <Link to="/register">
            <span className='font-medium'>Create an account</span>
          </Link>
        }
        

        <div className="w-2/4 h-[2px] bottom-1 bg-slate-700 my-2"></div>
        {
          isLogged
          ? <Button text='Logout' border='border' rounded='rounded-3xl' onClick={logout}/>
          :
          <Link
              to='/login' 
              className='flex items-center justify-center w-[140px] h-[40px] border rounded-3xl hover:border-gray-300'>
              <span className='font-semibold text-base'>Login</span>
          </Link>
        }
       

    </div>
  )
}
