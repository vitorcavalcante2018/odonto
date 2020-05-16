import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'foldervideo/:id',
    loadChildren: () => import('./foldervideo/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'foldersobre/:id',
    loadChildren: () => import('./foldersobre/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'pdf1',
    loadChildren: () => import('./pdf1/pdf1.module').then( m => m.Pdf1PageModule)
  },
  {
    path: 'pdf2',
    loadChildren: () => import('./pdf2/pdf2.module').then( m => m.Pdf2PageModule)
  },
  {
    path: 'pdf3',
    loadChildren: () => import('./pdf3/pdf3.module').then( m => m.Pdf3PageModule)
  },
  {
    path: 'pdf4',
    loadChildren: () => import('./pdf4/pdf4.module').then( m => m.Pdf4PageModule)
  },
  {
    path: 'dashboard/:id',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'movie1',
    loadChildren: () => import('./movie1/movie1.module').then( m => m.Movie1PageModule)
  },
  {
    path: 'movie2',
    loadChildren: () => import('./movie2/movie2.module').then( m => m.Movie2PageModule)
  },
  {
    path: 'movie3',
    loadChildren: () => import('./movie3/movie3.module').then( m => m.Movie3PageModule)
  },
  {
    path: 'movie4',
    loadChildren: () => import('./movie4/movie4.module').then( m => m.Movie4PageModule)
  },
  {
    path: 'tecn-mandibula',
    loadChildren: () => import('./tecn-mandibula/tecn-mandibula.module').then( m => m.TecnMandibulaPageModule)
  },
  {
    path: 'tecn-maxila',
    loadChildren: () => import('./tecn-maxila/tecn-maxila.module').then( m => m.TecnMaxilaPageModule)
  },
  {
    path: 'perguntas',
    loadChildren: () => import('./perguntas/perguntas.module').then( m => m.PerguntasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
