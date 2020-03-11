import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { IposComponent } from './ipos/ipos.component';
import { ComparecompanyComponent } from './comparecompany/comparecompany.component';
import { ManagecompanyComponent } from './managecompany/managecompany.component';

import { ImportdataComponent } from './importdata/importdata.component';
import { ManageexchangeComponent } from './manageexchange/manageexchange.component';
import { IposlistComponent } from './iposlist/iposlist.component';


const routes: Routes = [
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'logout',component:LogoutComponent},
{path:'ipos',component:IposComponent},
{path:'comparecompany',component:ComparecompanyComponent},
{path:'managecompany',component:ManagecompanyComponent},
{path:'manageexchange',component:ManageexchangeComponent},
{path:'importdata',component:ImportdataComponent},
{path:'iposlist',component:IposlistComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
