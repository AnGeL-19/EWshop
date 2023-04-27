import { ProductCart } from "../../components/product/ProductCart";
import { Resume } from "../../components/cart/Resume";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart/CartContext";
import { NotData } from "../../components/NotData";
import { Modal } from "../../components/modal/Modal";
import { Button } from "../../components/button/Button";

const CartPage = () => {
  const { cart } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center ">
        <h2 className="font-bold text-4xl text-gray-700 mb-5">PRODUCTS CART</h2>
        <div className="flex flex-row flex-wrap gap-10">
          <section className="w-8/12 md:w-full flex flex-col gap-5">
            {cart.length === 0 ? (
              <NotData text={`No products in cart`} />
            ) : (
              cart.map((product) => (
                <ProductCart key={product.id} product={product} />
              ))
            )}
          </section>

          <Resume setOpenModal={setOpenModal} />
        </div>
      </div>
      <div className="flex justify-center items-center">
        {openModal && (
          <Modal setOpenModal={setOpenModal}>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="font-semibold text-2xl text-gray-800">Paid $</p>
              <Button
                text="Accept"
                bgColor="bg-white"
                color="text-black"
                size="md"
                rounded="rounded-lg"
                border="border"
                onClick={() => setOpenModal(false)}
              />
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default CartPage