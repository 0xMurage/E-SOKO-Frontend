import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopNavbarComponent} from './components/top-navbar/top-navbar.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        TopNavbarComponent,
        ProductCardComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        TopNavbarComponent,
        ProductCardComponent
    ]
})
export class SharedModule {
}
