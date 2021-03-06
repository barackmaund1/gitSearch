import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepoComponent } from './repo/repo.component';
import { NgModule, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

const routes: Routes = [
  {path:'user',component:UserComponent},
 {path:'repo',component:RepoComponent},
 { path:'****', component:NotFoundComponent},
  
{ path: '', redirectTo:"/user", pathMatch:"full"},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientInMemoryWebApiModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
