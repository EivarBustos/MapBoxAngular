import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapLayoutComponent } from './layout/map-layout/map-layout.component';
import { FullAScreenComponent } from './pages/full-ascreen/full-ascreen.component';
import { ZoomRagePageComponent } from './pages/zoom-rage-page/zoom-rage-page.component';
import { MsrkersPageComponent } from './pages/msrkers-page/msrkers-page.component';
import { PropetiesPageComponent } from './pages/propeties-page/propeties-page.component';

const routes: Routes = [
  {
    path:'',
    component:MapLayoutComponent,
    children:[
      {path:'fullscreen', component:FullAScreenComponent},
      {path:'zoom-range', component:ZoomRagePageComponent},
      {path:'makers', component:MsrkersPageComponent},
      {path:'properties', component:PropetiesPageComponent},
      {path:'**', redirectTo:'fullscreen'},


    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
