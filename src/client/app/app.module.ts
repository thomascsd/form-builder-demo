import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { MemberComponent } from './member/member.component';
import { ListComponent } from './list/list.component';
import { environment } from '../environments/environment';
import { OrderComponent } from './order/order.component';

@NgModule({ declarations: [AppComponent, LayoutComponent, MemberComponent, ListComponent, OrderComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        SharedModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
    ], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
