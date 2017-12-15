import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProviderOverride} from '@angular/core/src/view';
import { WaitComponent } from './wait/wait.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ConPayComponent } from './con-pay/con-pay.component';
import { PayFinishComponent } from './pay-finish/pay-finish.component';
import {PrimengModule} from "../../module/primeng.module";

// import { FormsModule } from '@angular/forms';
const routes: Routes = [
  { path: 'wait', component: WaitComponent},
  { path: 'pay-finish', component: PayFinishComponent},
  { path: 'con-pay', component: ConPayComponent},
  { path: 'proinfo', component: ProductInfoComponent},
];

@NgModule({
  imports:      [
    CommonModule,
    PrimengModule,
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
