import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FechaComponent } from "./fecha/fecha.component";
import { InicioComponent } from "./inicio/inicio.component";
import { MapComponent } from "./mapa1/mapa1.component";
import { bMapaComponent } from "./bMapa/bMapa.component";

const routes: Routes = [
  { path: "inicio", component: InicioComponent },
  { path: "fecha", component: FechaComponent },
  { path: "mapa1", component: MapComponent },
  { path: "bmapa", component: bMapaComponent },
  { path: "", redirectTo: "inicio", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}