import { IProduct } from "../interfaces/product";

export const getLastFourProducts = (products: IProduct[]): IProduct[] => {
    return [...products].sort().slice(0,4)
}

export const getMostQualifiedProduct = (products: IProduct[]): IProduct[] => {
    return [...products].sort((a,b) =>b.rating.rate - a.rating.rate ).slice(0,8)
}

export const getFilterRateProduct = (products: IProduct[], rate: number | null): IProduct[] => {
    if (rate === null || rate === undefined || rate === 0) return [...products]
    return [...products].filter(product => Math.round(product.rating.rate) === rate)
}