import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DynamicViewComponent } from './dynamic-view/dynamic-view.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'TDF INTAKE'
    }
  },
  {
    path: 'view',
    component: DynamicViewComponent,
    data: {
      title: 'TDF INTAKE'
    }
  },
  // {
  //   path: 'client-info',
  //   component: ClientInfoComponent
  // },
  // {
  //   path: 'confirmation',
  //   component: ConfirmationComponent
  // },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { title: 'Page Not Found' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
