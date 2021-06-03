import { Component, OnInit } from "@angular/core";
import { Aire } from "../models/aire";
import { AireService } from "../aire.service";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.css"]
})
export class InicioComponent implements OnInit {
  aires: Aire[];
  airesApi = null;
  aireTmp: any;

  constructor(
    private aireService: AireService,
  ) {}


  getAiresApi() {
  }

  ngOnInit() {
    this.getAiresApi();
  }
}