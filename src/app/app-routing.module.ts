import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { 
    path: 'home',
    component: HomeComponent
  },
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  { 
    path: 'series',
    loadChildren: () => import('./pages/series/series.module').then(m => m.SeriesModule)
  },

  { 
    path: 'aside',
    loadChildren: () => import('./pages/aside/aside.module').then(m => m.AsideModule)
  },

  
  // 404
  { 
    path: '**', 
    pathMatch: 'full', 
    component: NotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
