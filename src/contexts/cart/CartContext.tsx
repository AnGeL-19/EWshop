import { createContext } from 'react';
import { ICartProduct } from '../../interfaces/cart';

interface ContextProps{
    isLoaded: boolean;
    cart: ICartProduct[];
    numberOfItems: number;
    subTotal: number;
    total: number;

    addProductToCart: (product: ICartProduct) => void;
    updateCartQuantity: (product: ICartProduct) => void;
    removeCartProduct: (product: ICartProduct) => void;
    removeAllCartProduct: () => void; 
}

export const CartContext = createContext({} as ContextProps);