import {CurrencyModel} from './currency.model';
import {ProductImageModel} from './product.model';

export interface CartModel {
    id: string;
    code?: string;
    products: {
        id: number;
        quantity: number
        name?: string;
        price?: number;
        currency?: CurrencyModel;
        image?: ProductImageModel
    }[];
}
