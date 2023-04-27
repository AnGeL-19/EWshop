import React from 'react'

import { AppRoute } from './routes/AppRoute'
import { CartProvider } from './contexts/cart/CartProvider'
import { AuthProvider } from './contexts/auth/AuthProvider';

export const AppStore = () => {
  return (
    <div className="min-h-screen" >
      <AuthProvider >
          <CartProvider>
            <AppRoute />
          </CartProvider>
      </AuthProvider> 
    </div>
  )
}
