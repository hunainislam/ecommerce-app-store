import { StaticImageData } from "next/image";  

export type Product = {
    id: number;
    title: string;
    image?: string[] | StaticImageData | undefined | any;
    products: string;
    price: number;
    category: string;
    description: string;
    size: string[];
    color: string[];
    quantity: number;
    discount?: number | any;
}

export type Cart = {
    id: number;
    title: string;
    image?: string | StaticImageData | undefined | any;
    products: string;
    price: number;
    discount?: number | any;
    category: string;
    size: string;
    quantity: number;
    uuid: number | string | undefined;
    color: string
}