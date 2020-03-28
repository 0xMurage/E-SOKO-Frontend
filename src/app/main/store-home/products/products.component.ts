import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {ProductModel} from '../../../singleton/models/product.model';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

    products: ProductModel[];

    constructor(private service: ProductService) {
    }

    ngOnInit() {
        this.fetchAll();
    }

    fetchAll() {
        this.service.fetchAll().subscribe((res) => {
            if (res.success) {
                this.products = res.results.map((p) => ({...p, ...{cart: {code: '', quantity: 0}}}));
            }
        });
    }

}
