import { Count } from "./Count";
import { Link } from "react-router-dom";
import { ButtonIcon } from "../button/ButtonIcon";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart/CartContext";
import { ICartProduct } from "../../interfaces/cart";

interface Props {
  product: ICartProduct;
}

export const ProductCart = ({ product }: Props) => {
  const { updateCartQuantity, removeCartProduct } = useContext(CartContext);

  const onNewCartQuantityValue = (
    product: ICartProduct,
    newQuantityValue: number
  ) => {
    product.quantity = newQuantityValue;
    updateCartQuantity(product);
  };

  const onRemoveCartProduct = (product: ICartProduct) => {
    removeCartProduct(product);
  };

  return (
    <article className="w-full flex justify-center items-center flex-row gap-2 sm:flex-wrap-reverse sm:max-h-max">
      <div className="w-52 h-52 sm:w-full">
        <Link to={`/product/${product.id}`} className="w-full">
          <img
            className="w-full h-full object-contain"
            src={product.image}
            alt="product"
          />
        </Link>
      </div>

      <div className="w-3/4 sm:w-full flex flex-row gap-5">
        <div className="w-full flex flex-col gap-3">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-bold text-xl text-gray-600 hover:text-gray-700">
              {product.title}
            </h3>
          </Link>

          <div className="flex flex-col">
            <h4 className="font-semibold text-lg text-gray-600">DESCRIPTION</h4>
            <p className="xs:h-auto xs:w-auto overflow-auto text-base font-normal text-gray-600">
              {product.description}
            </p>
          </div>

          <Count
            currentValue={product.quantity}
            updateQuantity={(value) => onNewCartQuantityValue(product, value)}
          />
        </div>

        <div className="flex flex-col justify-between items-end">
          <span className="text-lg text-gray-600 font-normal">
            ${product.price}
          </span>

            <ButtonIcon
              iconBtn="faTrash"
              onClick={() => onRemoveCartProduct(product)}
              className="hover:text-red-700"
            />
            
        </div>
      </div>
    </article>
  );
};
