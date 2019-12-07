import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'member', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'member', component: MemberComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
