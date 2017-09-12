import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path:'',
    redirectTo:'/roles',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'/roles'
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {}
