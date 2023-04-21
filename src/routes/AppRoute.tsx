import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/Product/ProductPage';
import { ProductsPage } from '../pages/Product/ProductsPage';
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';
import { Header } from '../components/header/Header';
import { CartPage } from '../pages/cart/CartPage';
import { Footer } from '../components/footer/Footer';
import { AuthContext } from '../contexts/auth/AuthContext';

export const AppRoute = () => {

    const { isLogged } = useContext(AuthContext)

  return (
    <div>
        <Router>

            <div className="w-full h-screen flex flex-col justify-between">
              
                <Header />
                
                <main className="mt-36 max-w-screen-xl w-full mx-auto px-2">
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
                </main>

                <Footer />
            </div>
        </Router>

    </div>
  )
}
