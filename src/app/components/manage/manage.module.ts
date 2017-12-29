import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProviderOverride} from '@angular/core/src/view';
import {PrimengModule} from "../../module/primeng.module";
import {LoginComponent} from './managepage/login/login.component';
import {MenuComponent} from './managepage/menu/menu.component';
import {SettingComponent} from './managepage/setting/setting.component';
import {ProductComponent} from './order/product/product.component';
import {OrderResultComponent} from './order/order-result/order-result.component';
import {ChipInfoComponent} from './product-manage/chip-info/chip-info.component';
import {MatchComponent} from './product-manage/match/match.component';
import {ProInfoComponent} from './product-manage/pro-info/pro-info.component';
import {OrderComponent} from "./order/order/order.component";

// import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {path: 'proinfo', component: ProInfoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'setting', component: SettingComponent},
  {path: 'chipinfo', component: ChipInfoComponent},
  {path: 'product', component: ProductComponent},
  {path: 'order-result', component: OrderResultComponent},
  {path: 'match', component: MatchComponent}
  {path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [
    CommonModule,
    PrimengModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, MenuComponent, SettingComponent, OrderComponent, ProductComponent, OrderResultComponent, ChipInfoComponent, MatchComponent, ProInfoComponent],
  providers: [],
  exports: [RouterModule]
})

export class ManageModule {

}
