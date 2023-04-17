import React, { useContext } from "react";
import { Stars } from "../../components/product/Stars";
import { Button } from "../../components/button/Button";
import { useData } from "../../hooks/useData";
import { useParams } from "react-router-dom";
import { IProduct } from "../../interfaces/product";
import { CartContext } from "../../contexts/cart/CartContext";
import { Loading } from "../../components/Loading";
import { NotData } from "../../components/NotData";

export const ProductPage = () => {
  const path = useParams();
  const { cart, addProductToCart } = useContext(CartContext);

  const { data, loading, error } = useData<IProduct>(
    `products/${path.id}`,
    "GET"
  );

  const AddProductCart = (product: IProduct) => {
    addProductToCart({ ...product, quantity: 1 });
  };

  if (error) {
    return (
      <div className="w-full flex justify-center">
        <span className="font-bold text-4xl text-gray-700">
          Product not found
        </span>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      {!loading ? (
        data ? (
          <div className="flex flex-row justify-center items-center flex-wrap-reverse gap-10">
            <div className="w-1/2 h-[475px] md:w-full">
              <img
                className="w-full h-full object-contain"
                src={data?.image}
                alt="productImg"
              />
            </div>

            <div className="w-2/5 md:w-full flex flex-col gap-2">
              <h2 className="font-bold text-4xl text-gray-600">
                {data?.title}
              </h2>

              <p className="font-semibold text-xl text-gray-600">
                {data?.category}
              </p>

              <Stars value={data?.rating.rate || 1} />

              <span className="text-xl text-gray-600 font-normal">
                ${data?.price}
              </span>

              <div>
                <h3 className="font-semibold text-2xl text-gray-600">
                  DESCRIPTION
                </h3>
                <p className="text-base font-normal text-gray-600">
                  {data?.description}
                </p>
              </div>

              <div className="w-full flex justify-center">
                {cart.some((p) => p.id === data.id) ? (
                  <div className="flex justify-center items-center w-full  p-3 rounded-xl border bg-slate-100">
                    <span className="text-xl font-medium text-slate-800">
                      Product added
                    </span>
                  </div>
                ) : (
                  <Button
                    onClick={() => AddProductCart(data)}
                    text="ADD CART"
                    bgColor="bg-black"
                    color="text-white"
                    rounded="rounded-lg"
                    size="lg"
                  />
                )}
              </div>
            </div>
          </div>
        ) : (
          <NotData text={`No products`} />
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};
