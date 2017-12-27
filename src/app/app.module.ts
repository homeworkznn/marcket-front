import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {GalleriaModule} from 'primeng/primeng';

const appRoutes: Routes = [
  {path: '', redirectTo: '/customer', pathMatch: 'full'},
  {path: 'customer', loadChildren: 'app/components/customer/customer.module#CustomerModule'},
  {path: 'manage', loadChildren: 'app/components/manage/manage.module#ManageModule'},
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    GalleriaModule
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
