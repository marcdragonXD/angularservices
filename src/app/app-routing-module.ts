import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './components/comics-component/comics-component';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcionsimple-component/plantilla-funcionsimple-component';
import { PlantillaFuncionMultipleComponent } from './components/plantilla-funcionmultiple-component/plantilla-funcionmultiple-component';

const routes: Routes = [
  { path: "", component: MenuComponent },
  { path: "comics", component: ComicsComponent },
  { path: "personas", component: PersonasApiComponent},
  { path: "coches", component: CochesApiComponent},
  { path: "plantillas", component: PlantillaFuncionSimpleComponent },
  { path: "plantillas2", component: PlantillaFuncionMultipleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }