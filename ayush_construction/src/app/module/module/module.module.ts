import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceComponent } from './service/service.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes=[
  {
    path:'',
    component:HomeComponent,
  },{
    path:'about',
    component:AboutComponent,
  },
  {
    path:'portfolio',
    component:PortfolioComponent,
  },
  {
    path:'services',
    component:ServiceComponent,
  },
  {
    path:'contact',
    component:ContactComponent,
  }

]

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ServiceComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ServiceComponent,
    ContactComponent,
  ]
})
export class ModuleModule { }
