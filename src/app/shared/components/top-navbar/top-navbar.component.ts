import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../../../singleton/services/cart/cart.service';

@Component({
    selector: 'app-top-navbar',
    templateUrl: './top-navbar.component.html',
    styleUrls: ['./top-navbar.component.sass']
})
export class TopNavbarComponent implements OnInit {

    @Input() hasSearchMenu = true;
    @Input() hasCartMenu = true;
    @Input() hasAccountMenu = true;

    constructor(private cartService: CartService) {
    }

    ngOnInit() {
    }

}
