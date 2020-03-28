import {CurrencyModel} from './currency.model';

export interface ProductModel {
    code: string;
    id: number;
    name: string;
    images: ProductImageModel[];
    categories: ProductCategoryModel[];
    prices: ProductPriceModel[];
    cart: ProductCartModel;
}

export interface ProductImageModel {
    id: number;
    location: string;
    name: string;
    caption: string;
}

export interface ProductCategoryModel {
    id: number;
    name: string;
}

export interface ProductPriceModel {
    id: number;
    amount: number;
    currency_id: number;
    currency: CurrencyModel;
}

export interface ProductCartModel {
    code: string;
    quantity: number;
}
