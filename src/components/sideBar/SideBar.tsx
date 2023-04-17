import React, { useContext } from 'react'
import { ButtonIcon } from '../button/ButtonIcon'
import { PrincialCategories } from '../header/PrincialCategories'
import { Button } from '../button/Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth/AuthContext'

interface Props{
    showMenu: boolean,
    setShowMenu: (value: boolean) => void
}

export const SideBar = ({ showMenu, setShowMenu }: Props) => {

    const {isLogged, user, logout} = useContext(AuthContext)

  return (
    <div className={ `${showMenu ? 'w-72 p-3 flex flex-col':'w-0'} transition-all 
    duration-200 fixed top-0 right-0 min-h-screen bg-white `}>
    
        {
            showMenu
            &&
            <>
                <div className="flex justify-end mt-3">
                    <ButtonIcon icon='faClose' onClick={()=>setShowMenu(false)}/>
                </div>
                <div className='mt-5 flex justify-center'>

                    <PrincialCategories className='flex-col' showNav />

                </div>
                <div className='flex flex-col justify-center items-center'>

                    <div className="w-2/3 h-[2px] bottom-1 bg-slate-700 my-4"></div>
                    {
                        isLogged
                        ?
                        <span className='mb-4'>{user?.username}</span>
                        :
                        <Link to="/register" className='mb-4'>
                            <span>Create an account</span>
                        </Link>
                    }

                    {
                        isLogged
                        ? <Button text='Logout' border='border' rounded='rounded-3xl' onClick={()=>logout()}/>
                        :<Link onClick={()=>setShowMenu(false)}
                            to='/login' 
                            className='flex items-center justify-center w-[140px] h-[40px] border rounded-3xl hover:border-gray-300'>
                            <span className='font-semibold text-base'>Login</span>
                        </Link>
                    }
                    

                    
                    
                </div>
            </>
            
        }

    </div>
  )
}
