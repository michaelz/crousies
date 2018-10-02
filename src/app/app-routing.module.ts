import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  }, {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule'
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    

  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
