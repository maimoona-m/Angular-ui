import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserViewComponent } from './user-view/user-view.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';


const routes: Routes = [
  
  {path:'user-view' , component : UserViewComponent},
  { path:'user-add', component : UserAddComponent},
  {path:'user-edit/:id', component : UserEditComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
