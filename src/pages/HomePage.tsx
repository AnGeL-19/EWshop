import { Products } from "../components/product/Products";
import { Categories } from "../components/category/Categories";

import {
  getLastFourProducts,
  getMostQualifiedProduct,
} from "../utils/changeData";
import { useData } from "../hooks/useData";
import { IProduct } from "../interfaces/product";
import { Loading } from "../components/Loading";
import { NotData } from "../components/NotData";

export const HomePage = () => {
  const { data, loading, error } = useData<IProduct[]>("products", "GET");

  if (error) {
    return <NotData text={`No products ${error}`} />;
  }

  return (
    <div className="h-full flex flex-col gap-10">
      <section className="flex flex-col items-center">
        <h2 className="font-bold text-xl text-slate-700 mb-5">NEW PRODUCTS</h2>

        {data?.length == 0 ? (
          <NotData text={`No products`} />
        ) : loading ? (
          <Loading />
        ) : (
          <Products products={getLastFourProducts(data || [])} />
        )}
      </section>

      <section className="flex flex-col items-center">
        <h2 className="font-bold text-xl text-slate-700 mb-5">CATEGORIES</h2>

        <Categories />
      </section>

      <section className="flex flex-col items-center">
        <h2 className="font-bold text-xl text-slate-700 mb-5">
          MOST QUALIFIED PRODUCTS
        </h2>

        {data?.length == 0 ? (
          <NotData text={`No products`} />
        ) : loading ? (
          <Loading />
        ) : (
          <Products products={getMostQualifiedProduct(data || [])} />
        )}
      </section>
    </div>
  );
};
