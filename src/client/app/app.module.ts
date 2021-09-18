import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { MemberComponent } from './member/member.component';
import { ListComponent } from './list/list.component';
import { environment } from '../environments/environment';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, MemberComponent, ListComponent, OrderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    MaterialModule,
    environment.production ? [] : AkitaNgDevtools,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
