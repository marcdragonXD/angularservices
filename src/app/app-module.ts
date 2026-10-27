import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceComics } from './services/service.comics';
import { ComicsComponent } from './components/comics-component/comics-component';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { ServiceCoches } from './services/service.coches';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcionsimple-component/plantilla-funcionsimple-component';
import { PlantillaFuncionMultipleComponent } from './components/plantilla-funcionmultiple-component/plantilla-funcionmultiple-component';

@NgModule({
  declarations: [
    App,
    ComicsComponent,
    PersonasApiComponent,
    CochesApiComponent,
    PlantillaFuncionSimpleComponent,
    PlantillaFuncionMultipleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    ServiceComics,
    ServicePersonas,
    ServiceCoches,
  ],
  bootstrap: [App],
})
export class AppModule {}
