import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Aire } from "../models/aire";
import { AireService } from "../aire.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-fechas",
  templateUrl: "./fecha.component.html",
  styleUrls: ["./fecha.component.css"],
  providers: [AireService],
})
export class FechaComponent implements OnInit {
  fechas: Aire[];
  fechasApi = null;
  fechaTmp: any;

  constructor(
    private route: ActivatedRoute,
    private fechaService: AireService,
    private router: Router
    ) { }

  getAiresApi() {
  }

  getFechaApi(
    fecha2: string,
  ) {
    const fecha = fecha2;
    const dia = fecha.substr(8, 2).replace(/0?/, '');
    const mes = fecha.substr(5, 2).replace(/0?/, '');
    const ano = fecha.substr(0, 4);
    console.log(fecha, dia, mes, ano)
    this.fechaService.getFechaApi( ano, mes, dia ).subscribe(fechas => {
      if(fechas == "") {
        alert("No hay datos")
      } else {
        this.fechasApi = fechas;
        this.fechas = this.fechasApi;
      }
      console.log(this.fechasApi)
    });
  }

  getFechaApi3(
    time: string,
  ) {
    console.log(time)
    this.fechaService.getFechaApi3( time ).subscribe(fechas => {
      if(fechas == "") {
        alert("No hay datos")
      } else {
        this.fechasApi = fechas;
        this.fechas = this.fechasApi;
        localStorage.setItem("airesFilter", JSON.stringify(this.fechasApi))
        this.router.navigate(['/mapa2']);
      }
      console.log(this.fechasApi)
    });
  }

  ngOnInit() {
    this.getAiresApi();
  }
}
