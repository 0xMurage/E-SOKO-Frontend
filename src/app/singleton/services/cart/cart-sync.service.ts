import {Injectable} from '@angular/core';
import {CartModel} from '../../models/cart.model';
import {HttpService} from '../network/http.service';
import {apiEndPoints} from '../../helpers/constants';
import {Observable} from 'rxjs';
import {HttpResponseModel} from '../../models/http-response.model';
import {LocalStorageService} from '../storage/local-storage.service';

@Injectable({
    providedIn: 'root'
})
/**
 * Will keep the storage cart data and backend service in sync
 */
export class CartSyncService {

    constructor(private http: HttpService) {
    }

    createCart(cart: CartModel): Observable<HttpResponseModel> {
        const data = cart.products.map((d) => ({product_id: d.id, quantity: d.quantity}));
        return this.http.createResource(apiEndPoints.cart, data, this.http.buildHttpOptions(false, true));
    }

    fetchAllCarts(): Observable<HttpResponseModel> {
        return this.http.getResource(apiEndPoints.cart, this.http.buildHttpOptions({}, true));
    }

    updateCart(cart: CartModel): Observable<HttpResponseModel> {
        const data = cart.products.map((d) => ({product_id: d.id, quantity: d.quantity}));

        return this.http.updateResource(`${apiEndPoints.cart}/${cart.code}`, data,
            this.http.buildHttpOptions(false, true));
    }

    deleteCart(cart: CartModel): Observable<HttpResponseModel> {
        return this.http.deleteResource(`${apiEndPoints.cart}/${cart.code}`,
            this.http.buildHttpOptions(false, true));
    }
}
