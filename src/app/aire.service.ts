import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Aire } from "./models/aire";
import { Aire2 } from "./models/aire2";

@Injectable({
  providedIn: "root"
})
export class AireService {
  private urlAPI = "https://apiapp-plume.herokuapp.com/";
  //private urlAPI = "http://localhost:3000/"
  constructor(
    private http: HttpClient
  ) {}

  getAiresApi() {
    return this.http.get(this.urlAPI);
  }

  getFechaApi(ano: string, mes: string, dia: string) {
    const url = `https://apiapp-plume.herokuapp.com/getFecha/${ano}&${mes}&${dia}`;
    return this.http.get(url);
  }

  getFechaApi2(ano: string, mes: string, dia: string, cont: string) {
    const url = `https://apiapp-plume.herokuapp.com/${ano}&${mes}&${dia}&${cont}`;
    return this.http.get(url);
  }

  getFechaApi3(time: string) {
    const url = `https://apiapp-plume.herokuapp.com/getFecha3/${time}`;
    return this.http.get(url);
  }

}
