import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren:()=>import('./module/module/module.module').then((m)=>m.ModuleModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route redirects to home
  { path: '**', redirectTo: '/home' }  // Redirect to home if any unknown path is entered
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
