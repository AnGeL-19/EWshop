
import { ICartProduct } from '../../interfaces/cart';
import { CartState } from './CartProvider';

type CartActionType =
| { type: '[Cart] - LoadCart from cookies | storage', payload: ICartProduct[] }
| { type: '[Cart] - Update products in cart', payload: ICartProduct[] }
| { type: '[Cart] - Change cart quantity', payload: ICartProduct}
| { type: '[Cart] - Remove product in cart', payload: ICartProduct}
| { type: '[Cart] - Remove all product in cart'}
| { type: '[Cart] - Update order summary', 
    payload: {
        numberOfItems: number;
        subTotal: number;
        total: number;
    }}

export const cartReducer = (state: CartState, action: CartActionType): CartState => {
    switch (action.type) {
        case '[Cart] - LoadCart from cookies | storage':
            return{
                ...state,
                isLoaded: true,
                cart: [...action.payload]
            }
        case '[Cart] - Update products in cart':
            return {
                ...state,
                cart: [...action.payload]
            }
        case '[Cart] - Change cart quantity':
            return {
                ...state,
                cart: state.cart.map( product => {
                    if(product.id !== action.payload.id) return product;

                    return action.payload;
                })
            }
        case '[Cart] - Remove product in cart':
            return {
                ...state,
                cart: state.cart.filter( p => !(p.id === action.payload.id))
            }
        case '[Cart] - Remove all product in cart':
            return {
                isLoaded: false,
                cart: [],
                numberOfItems: 0,
                subTotal: 0,
                total: 0
            }
        case '[Cart] - Update order summary':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;

    }
}