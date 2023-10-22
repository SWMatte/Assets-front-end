import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AssetComponent } from './components/asset/asset.component';
import { authGuard } from './auth.guard';
import { TableAssetComponent } from './components/table-asset/table-asset.component';
import { InfoAssetComponent } from './components/info-asset/info-asset.component';
 
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'asset',
    component: AssetComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'tableAsset',
        component: TableAssetComponent,
        children: [
          { path: 'infoAsset', component: InfoAssetComponent },
         ],
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
