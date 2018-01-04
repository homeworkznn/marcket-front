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
import { ProMenuComponent } from './product-manage/pro-menu/pro-menu.component';
import { OrderInquiryComponent } from './order/order-inquiry/order-inquiry.component';

// import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {path: 'proinfo', component: ProInfoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'setting', component: SettingComponent},
  {path: 'chipinfo', component: ChipInfoComponent},
  {path: 'product', component: ProductComponent},
  {path: 'order-inquiry', component: OrderInquiryComponent},
  {path: 'order-result', component: OrderResultComponent},
  {path: 'match', component: MatchComponent},
  {path: 'order', component: OrderComponent},
  {path: 'promenu', component: ProMenuComponent}

];

@NgModule({
  imports: [
    CommonModule,
    PrimengModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, MenuComponent, SettingComponent, OrderComponent, ProductComponent, OrderResultComponent, ChipInfoComponent, MatchComponent, ProInfoComponent, ProMenuComponent, OrderInquiryComponent],
  providers: [],
  exports: [RouterModule]
})

export class ManageModule {

}
