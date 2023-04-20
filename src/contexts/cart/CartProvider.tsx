import React, { FC, ReactNode, useEffect, useReducer } from "react";
import Cookie from "js-cookie";
import { cartReducer } from "./cartReducer";
import { CartContext } from "./CartContext";
import { ICartProduct } from "../../interfaces/cart";

export interface CartState {
  isLoaded: boolean;
  cart: ICartProduct[];
  numberOfItems: number;
  subTotal: number;
  total: number;
}

const CART_INITIAL_STATE: CartState = {
  isLoaded: false,
  cart: [],
  numberOfItems: 0,
  subTotal: 0,
  total: 0,
};

interface Props {
  children: ReactNode;
}

export const CartProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    try {
      const cookieProducts: ICartProduct[] = Cookie.get("cart")
        ? JSON.parse(Cookie.get("cart")!)
        : [];
      dispatch({
        type: "[Cart] - LoadCart from cookies | storage",
        payload: cookieProducts,
      });
    } catch (error) {
      dispatch({
        type: "[Cart] - LoadCart from cookies | storage",
        payload: [],
      });
    }
  }, []);

  useEffect(() => {
    if (state.cart.length === 0 && Cookie.get("cart")) {
      Cookie.set("cart", JSON.stringify(JSON.parse(Cookie.get("cart")!)));
    } else {
      Cookie.set("cart", JSON.stringify(state.cart));
    }
  }, [state.cart]);

  useEffect(() => {
    const numberOfItems = state.cart.reduce(
      (prev, current) => current.quantity + prev,
      0
    );
    const subTotal = state.cart.reduce(
      (prev, current) => current.price * current.quantity + prev,
      0
    );

    const orderSummary = {
      numberOfItems,
      subTotal,
      total: subTotal,
    };

    dispatch({ type: "[Cart] - Update order summary", payload: orderSummary });
  }, [state.cart]);

  const addProductToCart = (product: ICartProduct) => {
    const productInCard = state.cart.some((p) => p.id === product.id);
    if (!productInCard)
      return dispatch({
        type: "[Cart] - Update products in cart",
        payload: [...state.cart, product],
      });

    const updateProdcuts = state.cart.map((c) => {
      if (c.id !== product.id) return c;
      c.quantity += product.quantity;
      return c;
    });

    dispatch({
      type: "[Cart] - Update products in cart",
      payload: updateProdcuts,
    });
  };

  const updateCartQuantity = (product: ICartProduct) => {
    dispatch({ type: "[Cart] - Change cart quantity", payload: product });
  };

  const removeCartProduct = (product: ICartProduct) => {
    
    const cookieProducts: ICartProduct[] = Cookie.get("cart")
        ? JSON.parse(Cookie.get("cart")!)
        : [];

    const removeProduct = cookieProducts.filter( pro => pro.id !== product.id)
    Cookie.set("cart", JSON.stringify(removeProduct))

    dispatch({ type: "[Cart] - Remove product in cart", payload: product });
  };

  const removeAllCartProduct = () => {
    Cookie.remove("cart");
    dispatch({ type: "[Cart] - Remove all product in cart" });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addProductToCart,
        updateCartQuantity,
        removeCartProduct,
        removeAllCartProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
