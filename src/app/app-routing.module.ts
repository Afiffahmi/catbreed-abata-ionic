import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/cats/cats.module').then( m => m.CatsPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cats',
    loadChildren: () => import('./pages/cats/cats.module').then( m => m.CatsPageModule)
  },
  {
    path: 'cat-details',
    loadChildren: () => import('./pages/cat-details/cat-details.module').then( m => m.CatDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}