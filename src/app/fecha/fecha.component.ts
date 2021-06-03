import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Aire } from "../models/aire";
import { AireService } from "../aire.service";

@Component({
  selector: "app-fechas",
  templateUrl: "./fecha.component.html",
  styleUrls: ["./fecha.component.css"]
})
export class FechaComponent implements OnInit {
  fechas: Aire[];
  fechasApi = null;
  fechaTmp: any;

  constructor(
    private route: ActivatedRoute,
    private fechaService: AireService,
  ) {}

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

  ngOnInit() {
    this.getAiresApi();
  }
}
