import { Component, OnInit } from '@angular/core';
import { AireService } from "../aire.service";
import { Aire } from "../models/aire";
import { Router } from '@angular/router';

@Component({
  selector: 'app-bMapa',
  templateUrl: './bMapa.component.html',
  styleUrls: ['./bMapa.component.css'],
  providers: [AireService],
})
export class bMapaComponent implements OnInit {
  fechas: Aire[];
  fechasApi = null;
  fechaTmp: any;

  constructor (private aireService: AireService, private router: Router) { }

  ngOnInit() {
    this.getIni();
  }

  getIni() {}

  getAiresApi() {
    this.aireService.getAiresApi().subscribe(fechas => {
      this.fechasApi = fechas;
      this.fechas = this.fechasApi;
      localStorage.setItem("airesFilter", JSON.stringify(this.fechasApi))
      this.router.navigate(['/mapa2']);
    })
  }

  getFechaApi2(
    fecha2: string,
    cont2: string
  ) {
    const fecha = fecha2;
    const cont = cont2;
    const dia = fecha.substr(8, 2).replace(/0?/, '');
    const mes = fecha.substr(5, 2).replace(/0?/, '');
    const ano = fecha.substr(0, 4);
    this.aireService.getFechaApi2(ano, mes, dia, cont).subscribe(fechas => {
      if(fechas == "") {
        alert("No hay datos")
      } else {
        this.fechasApi = fechas;
        this.fechas = this.fechasApi;
        localStorage.setItem("airesFilter", JSON.stringify(this.fechasApi))
        this.router.navigate(['/mapa1']);
      }
      console.log(this.fechasApi)
    });
  }

}