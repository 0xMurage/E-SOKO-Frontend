import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../../singleton/models/product.model';
import {uuid} from '../../../singleton/helpers/utils';
import {CartService} from '../../../singleton/services/cart/cart.service';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

    @Input() product: ProductModel;

    constructor(private cartService: CartService) {
    }

    ngOnInit() {
    }

    /**
     * Check if the product has discount.
     * the latest price is at index 0
     */
    get hasDiscount() {
        if (!this.product || this.product.prices.length < 2) {
            return false;
        }

        return this.product.prices[0].amount < this.product.prices[1].amount;
    }

    /**
     * Get the % discount
     *  the difference between original and current price x 100 divide by original price
     */
    get discount() {
        return (((this.product.prices[1].amount - this.product.prices[0].amount) * 100) / this.product.prices[0].amount).toFixed(0);
    }

    updateCart(increment = true) {
        if (!this.product.cart) {
            this.product.cart = {
                quantity: 0,
                code: uuid()
            };
        }
        if (increment) {
            this.cartService.addItem(this.product);
        } else {
            this.cartService.removeItem(this.product);
        }
    }


}
