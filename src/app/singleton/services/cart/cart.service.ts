import {Injectable} from '@angular/core';
import {CartModel} from '../../models/cart.model';
import {ProductModel} from '../../models/product.model';
import {UserService} from '../auth/user.service';
import {uuid} from '../../helpers/utils';
import {CartSyncService} from './cart-sync.service';
import {LocalStorageService} from '../storage/local-storage.service';
import {StorageModel} from '../../models/storage.model';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private productShoppingPipeline: Subject<{ product: ProductModel, increment: boolean }>;

    private cartData: CartModel;

    constructor(private user: UserService, private sync: CartSyncService, private storage: LocalStorageService) {
    }

    initialize() {
        if (!this.user.isAuthenticated) { // we have to keep in sync with backend
            if (this.storage.get().cart) {
                return true;
            }
            this.cartData = {products: [], id: uuid()};
            return this.saveCartLocally(this.cartData);
        }
        this.cartData = {products: [], id: uuid()};
        this.sync.fetchAllCarts().subscribe((resp) => {
            if (resp.success) {
                this.cartData = {
                    code: resp.results[0].code,
                    id: uuid(),
                    products: resp.results[0].products
                };

                this.saveCartLocally(this.cartData); // keep local man happy

            } else {
                // TODO :notify user of the error
            }
        });


    }

    addItem(product: ProductModel) {
        product.cart.quantity++;

        if (!this.user.isAuthenticated) {
            return this.storage.set(this.updateCartProductQty(product, true));
        }
        // if the customer is logged in
    }

    removeItem(product: ProductModel) {
        product.cart.quantity--;
        if (!this.user.isAuthenticated) {

            return this.storage.set(this.updateCartProductQty(product, false));
        }

        // if the customer is logged in

    }


    private updateCartProductQty(product: ProductModel, increment: boolean): StorageModel {
        const data = this.storage.get();

        const existingIndex = data.cart.products.findIndex((d) => d.id === product.id);
        if (existingIndex > -1) {
            increment ? data.cart.products[existingIndex].quantity++ : data.cart.products[existingIndex].quantity--;
        } else {
            increment ? data.cart.products.push({...product, ...{quantity: 1}}) : data.cart.products.push({...product, ...{quantity: 0}});
        }
        return data;
    }


    private saveCartLocally(cart: CartModel): boolean {
        const allData = this.storage.get();
        allData.cart = cart;
        return this.storage.set(allData);
    }
}
