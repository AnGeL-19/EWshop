import { INavCategories } from "../interfaces/category";

export const categories: INavCategories[] = [
    {
        href: '/products',
        text: 'All Products',
    },
    {
        href: '/products?category=electronics',
        text: 'Electronics',
        icon: 'faTvAlt'
    },
    {
        href: '/products?category=jewelery',
        text: 'Jewelery',
        icon: 'faRing'
    },
    {
        href: "/products?category=men's clothing",
        text: "Men's clothing",
        icon: 'faPerson'
    },
    {
        href: "/products?category=women's clothing",
        text: "Women's clothing",
        icon: 'faPersonDress'
    }
]