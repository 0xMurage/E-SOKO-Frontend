import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../services/category.service';

@Component({
    selector: 'app-categories-nav',
    templateUrl: './categories-nav.component.html',
    styleUrls: ['./categories-nav.component.sass']
})
export class CategoriesNavComponent implements OnInit {

    categories: { id: number, name: string }[];

    constructor(private service: CategoryService) {
    }

    ngOnInit() {
this.fetchCategories();
    }

    fetchCategories() {
        this.service.fetchAll().subscribe((res) => {
            if (res.success) {
                this.categories = res.results;
            } else {
                console.log('hell here');
            }
        });
    }
}
