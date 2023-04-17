import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart/CartContext";
import { Button } from "../button/Button";

interface Props {
  setOpenModal: (value: boolean) => void;
}

export const Resume = ({ setOpenModal }: Props) => {
  const { numberOfItems, subTotal, total } = useContext(CartContext);
  const { removeAllCartProduct } = useContext(CartContext);

  const removeProductsCart = () => {
    if (numberOfItems === 0) return;
    setOpenModal(true);
    removeAllCartProduct();
  };

  return (
    <aside className="w-1/4 flex flex-col md:w-full">
      <h2 className="font-bold text-4xl text-gray-700 mb-5">RESUME</h2>

      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <span className="font-medium text-base text-gray-800">
            {numberOfItems > 1 ? "PRODUCTS" : "PRODUCT"}
          </span>
          <span className="font-medium text-base text-gray-800">
            {numberOfItems}
          </span>
        </div>

        <div className="flex flex-row justify-between">
          <span className="font-medium text-base text-gray-800">SUBTOTAL</span>
          <span className="font-medium text-base text-gray-800">
            ${subTotal}
          </span>
        </div>

        <div className="w-full h-[2px] bottom-1 bg-slate-700 my-2"></div>

        <div className="flex flex-row justify-between">
          <span className="font-medium text-base text-gray-800">TOTAL</span>
          <span className="font-medium text-lg text-gray-800">${total}</span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-5">
        <Button
          text="PAY"
          bgColor="bg-black"
          color="text-white"
          rounded="rounded-3xl"
          border="border"
          size="lg"
          onClick={removeProductsCart}
        />
      </div>
    </aside>
  );
};
