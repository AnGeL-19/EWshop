import { IProduct } from "./product";

export interface ICartProduct extends IProduct{
    quantity: number;
}