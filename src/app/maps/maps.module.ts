import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any) .accessToken = 'pk.eyJ1IjoiZWl2YXJidXN0b3MyMSIsImEiOiJjbGY4cTZzanowZWtrNDVtd2w3OHI1enB1In0.97AzFclhYtl_brdbYG5iYg';


import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapLayoutComponent } from './layout/map-layout/map-layout.component';
import { FullAScreenComponent } from './pages/full-ascreen/full-ascreen.component';
import { MsrkersPageComponent } from './pages/msrkers-page/msrkers-page.component';
import { PropetiesPageComponent } from './pages/propeties-page/propeties-page.component';
import { ZoomRagePageComponent } from './pages/zoom-rage-page/zoom-rage-page.component';
import { MenuModule } from 'primeng/menu';
import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';
@NgModule({
  declarations: [
    FullAScreenComponent,
    MapLayoutComponent,
    MiniMapComponent,
    MsrkersPageComponent,
    PropetiesPageComponent,
    ZoomRagePageComponent
  ],
  imports: [
    CommonModule,
    CounterAloneComponent,
    MapsRoutingModule,
    MenuModule,
    SideMenuComponent

  ]
})
export class MapsModule { }
