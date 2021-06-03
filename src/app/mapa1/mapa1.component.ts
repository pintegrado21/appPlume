import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../marker.service';
import { Aire2 } from "../models/aire2";

const markerOptions = {
  opacity: 1,
  color: ''
}

@Component({
  selector: 'app-map',
  templateUrl: './mapa1.component.html',
  styleUrls: ['./mapa1.component.css']
})
export class MapComponent implements AfterViewInit {
  private map: any;

  private initMap(): void {
    this.map = L.map('map')

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
   
    let markerArray = []

    let aires: Array<Aire2> = JSON.parse(localStorage.getItem('airesFilter'));
    console.log(aires)


    for (let aire of aires) { 
      if(aire.cont == "todo") {
        const num1:any = aire.dato[0]
        const num2:any = aire.dato[1]
        const num3:any = aire.dato[2]
        const max = Math.max(num1, num2, num3)
        if (max == aire.dato[0]) {
          if (aire.dato[0] < 40) {
            markerOptions.color = '#50f0e6'
          } else if (aire.dato[0] < 90) {
            markerOptions.color = '#50ccaa'
          } else if (aire.dato[0] < 120) {
            markerOptions.color = '#f0e641'
          } else if (aire.dato[0] < 230) {
            markerOptions.color = '#ff5050'
          } else if (aire.dato[0] < 340) {
            markerOptions.color = '#960032'
          } else {
            markerOptions.color = '#7d2181'
          }
        } else if (max == aire.dato[1]) {
          if (aire.dato[1] < 20) {
            markerOptions.color = '#50f0e6'
          } else if (aire.dato[1] < 40) {
            markerOptions.color = '#50ccaa'
          } else if (aire.dato[1] < 50) {
            markerOptions.color = '#f0e641'
          } else if (aire.dato[1] < 100) {
            markerOptions.color = '#ff5050'
          } else if (aire.dato[1] < 150) {
            markerOptions.color = '#960032'
          } else {
            markerOptions.color = '#7d2181'
          }
        } else if (max == aire.dato[2]) {
          if (aire.dato[2] < 10) {
            markerOptions.color = '#50f0e6'
          } else if (aire.dato[2] < 20) {
            markerOptions.color = '#50ccaa'
          } else if (aire.dato[2] < 25) {
            markerOptions.color = '#f0e641'
          } else if (aire.dato[2] < 50) {
            markerOptions.color = '#ff5050'
          } else if (aire.dato[2] < 75) {
            markerOptions.color = '#960032'
          } else {
            markerOptions.color = '#7d2181'
          }
        }
        var marker = L.circleMarker([aire.latitude, aire.longitude], markerOptions)
        .bindPopup(`<b>NO2: ${aire.dato[0]}<br>PM10: ${aire.dato[1]}<br>PM25: ${aire.dato[2]}</b><br>${aire.longitude},${aire.latitude}.`)
        .openPopup();
        markerArray.push(marker)
        
      } else {
        if (aire.cont == "no2") {
          if (aire.dato[0] < 40) {
            markerOptions.color = '#50f0e6'
          } else if (aire.dato[0] < 90) {
            markerOptions.color = '#50ccaa'
          } else if (aire.dato[0] < 120) {
            markerOptions.color = '#f0e641'
          } else if (aire.dato[0] < 230) {
            markerOptions.color = '#ff5050'
          } else if (aire.dato[0] < 340) {
            markerOptions.color = '#960032'
          } else {
            markerOptions.color = '#7d2181'
          }
        } else if (aire.cont == "pm10") {
          if (aire.dato[0] < 20) {
            markerOptions.color = '#50f0e6'
          } else if (aire.dato[0] < 40) {
            markerOptions.color = '#50ccaa'
          } else if (aire.dato[0] < 50) {
            markerOptions.color = '#f0e641'
          } else if (aire.dato[0] < 100) {
            markerOptions.color = '#ff5050'
          } else if (aire.dato[0] < 150) {
            markerOptions.color = '#960032'
          } else {
            markerOptions.color = '#7d2181'
          }
        } else if (aire.cont == "pm25") {
          if (aire.dato[0] < 10) {
            markerOptions.color = '#50f0e6'
          } else if (aire.dato[0] < 20) {
            markerOptions.color = '#50ccaa'
          } else if (aire.dato[0] < 25) {
            markerOptions.color = '#f0e641'
          } else if (aire.dato[0] < 50) {
            markerOptions.color = '#ff5050'
          } else if (aire.dato[0] < 75) {
            markerOptions.color = '#960032'
          } else {
            markerOptions.color = '#7d2181'
          }
        }
        var marker = L.circleMarker([aire.latitude, aire.longitude], markerOptions)
        .bindPopup(`<b>Contaminante: ${aire.cont}, PPM: ${aire.dato[0]}</b><br>${aire.longitude},${aire.latitude}.`)
        .openPopup();
        markerArray.push(marker)

      }
      let group = L.featureGroup(markerArray).addTo(this.map)

      this.map.fitBounds(group.getBounds(), {
        padding: [70, 70]

      })
    }
  }

  constructor() { }
  ngAfterViewInit(): void {
    this.initMap();
  }
  

}