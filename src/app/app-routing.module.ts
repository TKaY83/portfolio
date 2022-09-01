import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactSuccessComponent } from './contact-success/contact-success.component';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'contact-success', component: ContactSuccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
