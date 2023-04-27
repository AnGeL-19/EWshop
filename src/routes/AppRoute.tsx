import React, { Suspense, useContext } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { AuthContext } from '../contexts/auth/AuthContext';

const HomePage = React.lazy(() => import('../pages/HomePage'))
const ProductPage = React.lazy(() => import('../pages/Product/ProductPage'))
const ProductsPage = React.lazy(() => import('../pages/Product/ProductsPage'))
const LoginPage = React.lazy(() => import('../pages/auth/LoginPage'))
const RegisterPage = React.lazy(() => import('../pages/auth/RegisterPage'))
const CartPage = React.lazy(() => import('../pages/cart/CartPage'))

export const AppRoute = () => {

    const { isLogged } = useContext(AuthContext)

  return (
    <div>
        <Router>

            <div className="w-full h-screen flex flex-col justify-between">
              
                <Header />
                
                <main className="mt-36 max-w-screen-xl w-full mx-auto px-2">
                    
                    <Suspense fallback={null}>
                        <Routes>
                            <Route path="/" Component={HomePage} />
                            <Route path="/products" Component={ProductsPage} />
                            <Route path="/product/:id" Component={ProductPage}/>
                            <Route path="/cart" Component={CartPage}/>
                            {
                                !isLogged
                                ?
                                <>
                                    <Route path="/login" Component={LoginPage}/>
                                    <Route path="/register" Component={RegisterPage}/>
                                </>
                                :
                                <Route path="/" Component={HomePage} />
                            }
                            <Route
                                path="*"
                                element={<Navigate to="/" replace />}
                            /> 
                            
                        </Routes>
                    </Suspense>
                    
                </main>

                <Footer />
            </div>
        </Router>

    </div>
  )
}
