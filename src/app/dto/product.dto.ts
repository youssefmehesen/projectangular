export interface Product {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    rating: number;
    availabilityStatus: string;
    images: string[];
    price: number;
    discountPercentage: number;
    stock: number;
    tags: string[];
}