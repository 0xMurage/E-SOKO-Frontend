import {UserModel} from './user.model';
import {CartModel} from './cart.model';

export interface StorageModel {
    user?: UserModel;
    cart?: CartModel;
    version: number;
}
