import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProviderOverride} from '@angular/core/src/view';
import { WaitComponent } from './wait/wait.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ConPayComponent } from './con-pay/con-pay.component';
import { PayFinishComponent } from './pay-finish/pay-finish.component';

// import { FormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', component: WaitComponent},
];

@NgModule({
  imports:      [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
  WaitComponent,
  ProductInfoComponent,
  ConPayComponent,
  PayFinishComponent],
  providers: [],
  exports: [RouterModule]
})

export class CustomerModule {

}
