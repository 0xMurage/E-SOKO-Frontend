import {Component, OnInit} from '@angular/core';
import {CartService} from './singleton/services/cart/cart.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    constructor(private cartService: CartService) {
    }

    ngOnInit() {
        this.cartService.initialize();
    }
}
