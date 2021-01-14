import {Component, Input} from '@angular/core';
import {CartService} from '../../../singleton/services/cart/cart.service';

@Component({
    selector: 'app-top-navbar',
    templateUrl: './top-navbar.component.html',
    styleUrls: ['./top-navbar.component.sass']
})
export class TopNavbarComponent {

    @Input() hasSearchMenu = true;
    @Input() hasCartMenu = true;
    @Input() hasAccountMenu = true;
    @Input() totalCartItems = 0;

    constructor(private cartService: CartService) {
    }


}
