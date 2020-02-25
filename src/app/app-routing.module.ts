import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DynamicViewComponent } from './dynamic-view/dynamic-view.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { ViewLayoutComponent } from './layouts/view-layout/view-layout.component';
import { ClientInfoComponent } from './client-info/client-info.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'tdf-intake',
    component: ViewLayoutComponent,
    data: {
      title: 'tdf intake'
    },
    children: [
      {
        path: '',
        redirectTo: 'form',
        pathMatch: 'full'
      },
      {
        path: 'form',
        component: DynamicViewComponent,
      }
    ]
  },
  {
    path: 'client-info',
    component: ClientInfoComponent
  },
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
