import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductsComponent} from './products/products.component';


const routes: Routes = [
    {path: '', component: ProductsComponent},
    {path: 'products', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreHomeRoutingModule {
}
