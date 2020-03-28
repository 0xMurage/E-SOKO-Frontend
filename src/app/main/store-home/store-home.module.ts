import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoreHomeRoutingModule} from './store-home-routing.module';
import {ProductsComponent} from './products/products.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CartDetailsComponent} from './cart-details/cart-details.component';
import {SharedModule} from '../../shared/shared.module';
import {CategoriesNavComponent} from './categories-nav/categories-nav.component';


@NgModule({
    declarations: [
        ProductsComponent,
        ProductDetailsComponent,
        CartDetailsComponent,
        CategoriesNavComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        StoreHomeRoutingModule
    ]
})
export class StoreHomeModule {
}
