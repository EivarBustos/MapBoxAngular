import { Component, ElementRef, ViewChild } from '@angular/core';

import {Map, LngLat, Marker} from 'mapbox-gl';

interface MarkerAndColor{
  color:string;
  marker:Marker;
}
//interface para el local storage que muestre solo lo necesario
interface PlainMarker{
  color:string;
  lngLat:number[]
}



@Component({
  templateUrl: './msrkers-page.component.html',
  styleUrls: ['./msrkers-page.component.css']
})
export class MsrkersPageComponent {


  @ViewChild('map') divMap?: ElementRef;
  public markers: MarkerAndColor[]=[]
  public zoom: number = 13;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-74.10380784179445, 4.651165392795477);


  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat,
      zoom: this.zoom, // starting zoom
    });
    this.readFromLocalStorage();

    // const marketHtml= document.createElement('div');
    // marketHtml.innerHTML='Eivar Bustos'

    // const marker = new Marker({
    //   element: marketHtml
    // })
    // .setLngLat(this.currentLngLat)
    // .addTo(this.map);
  }



  //crear marcadores

  createMarker(){

    if (!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat= this.map.getCenter();
    this.addMarker(lngLat, color);
  }


  addMarker(lngLat: LngLat, color:string){
    if (!this.map) return;

    const marker = new Marker({
      color:color,
      //que se va a poder mover el marcador
      draggable:true
    }).setLngLat(lngLat)
    .addTo(this.map)

    this.markers.push({
      color: color,
      marker:marker,
    });
    //llamar el localstorage
    this.saveToLocalStorage();

    //dragend al mover un marcador automaticamente quede grabado su ubicacion
    marker.on('dragend', ()=> this.saveToLocalStorage())




  }

  deleteMarker(index:number){
    this.markers[index].marker.remove();
    this.markers.splice(index, 1)
  }

  //volar hacia el marcador que se seleccione
  flyTo(marker:Marker){
   this.map?.flyTo({
   zoom:14,
   center:marker.getLngLat()
   })
  }



  //guardar en el localStorage

  saveToLocalStorage(){

    const plainMarkers: PlainMarker[]=this.markers.map(({color, marker})=>{
      return {
        color,
        lngLat:marker.getLngLat(). toArray()
      }
    })
    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
  }

  readFromLocalStorage(){
    const plainMarkersString=localStorage.getItem('plainMarkers') ?? '[]'
    const plainMarkers:PlainMarker[] =JSON.parse(plainMarkersString);

    plainMarkers.forEach(({color, lngLat})=>{
      const [lng, lat]= lngLat;
      const coords = new LngLat(lng, lat);

      this.addMarker(coords, color);
    })

  }
}
