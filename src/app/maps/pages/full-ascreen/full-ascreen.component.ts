import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import {Map}from 'mapbox-gl'; // or "const mapboxgl =

@Component({
  templateUrl: './full-ascreen.component.html',
  styleUrls: ['./full-ascreen.component.css']
})
export class FullAScreenComponent  implements AfterViewInit{
  //tomar referencias locales por eso en html es #map
  @ViewChild('map') divMap?: ElementRef;



  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemto Html no fue encontrado '
    const map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      });
  }

}
