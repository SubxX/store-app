import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  { path: '', redirectTo: '/store', pathMatch: 'full' },

  { path: 'store', loadChildren: () => UserModule },
  { path: 'admin', loadChildren: () => AdminModule },

  { path: '**', redirectTo: '/', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
