import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';


@NgModule({
  declarations: [ShippingAddressComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
