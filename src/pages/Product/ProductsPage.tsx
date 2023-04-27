import React, {
  useEffect,
  useMemo,
  useState,
} from "react";
import { Products } from "../../components/product/Products";
import { Button } from "../../components/button/Button";
import { Filters } from "../../components/filter/Filters";
import { MenuFilter } from "../../components/filter/MenuFilter";
import { useData } from "../../hooks/useData";
import { IProduct } from "../../interfaces/product";
import { useSearchParams } from "react-router-dom";
import { getFilterRateProduct } from "../../utils/changeData";
import { Loading } from "../../components/Loading";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();

  const [openFilter, setOpenFilter] = useState(false);

  const [value, setValue] = useState(0);

  const { data, loading, error } = useData<IProduct[]>(
    `products/${
      searchParams.get("category")
        ? `category/${searchParams.get("category")}`
        : ""
    }`,
    "GET"
  );

  useEffect(() => {
    setValue(0);
  }, [searchParams.get("category")]);

  const filterQuanlified = useMemo(
    () => getFilterRateProduct(data || [], value),
    [value, data]
  );

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
    <div className="container mx-auto flex flex-row justify-between gap-10">
      <div className="min-w-[180px] w-[15%] h-72 p-5 md:hidden">
        <h3 className="text-xl font-bold text-slate-700">FILTER</h3>

        <Filters setValue={setValue} />
      </div>

      <section className="w-[85%] md:w-full flex flex-col gap-5">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-slate-700">PRODUCTS</h2>
        </div>

        <div className="justify-end hidden md:flex">
          <Button
            text="Filter"
            bgColor="bg-black"
            color="text-white"
            rounded="rounded-3xl"
            size="sm"
            onClick={() => setOpenFilter(true)}
          />
        </div>

        <div className="flex flex-col justify-center gap-7 items-center">
          {error ? (
            <div className="w-full flex justify-center">
              <span className="font-bold text-4xl text-gray-700">
                Product not found
              </span>
            </div>
          ) : loading ? (
            <Loading />
          ) : (
            <Products products={filterQuanlified || []} />
          )}
        </div>
      </section>

      {openFilter && (
        <>
          <div
            className="transition-opacity fixed top-0 left-0 w-full min-h-screen bg-black/20 backdrop-blur-sm opacity-80"
            onClick={() => setOpenFilter(false)}
          ></div>
        </>
      )}
      <MenuFilter
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
        setValue={setValue}
      />
    </div>
  );
};

export default ProductsPage