import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core'; 
import { Plantilla } from '../models/plantilla';
import { ServicePlantillas } from '../../services/service.plantillas'; 

@Component({ 
  selector: 'app-plantilla-funcion-multiple-component', 
  standalone: false, 
  styleUrl: './plantilla-funcionmultiple-component.css', 
  templateUrl: './plantilla-funcionmultiple-component.html', 
}) 
export class PlantillaFuncionMultipleComponent implements OnInit { 
  @ViewChild("selectfunciones") selectFunciones!: ElementRef; 
  public personas!: Array<Plantilla>; 
  public funciones!: Array<string>; 

  constructor( 
    private _cdr: ChangeDetectorRef, 
    private _service: ServicePlantillas 
  ) {} 

  async ngOnInit(): Promise<void> { 
    this.funciones = await this._service.getFuncionesAsync(); 
    this._cdr.detectChanges(); 
  } 

  async mostrarPlantilla(): Promise<void> { 
    let aux = []; 
    // El control html select tiene una propiedad options 
    for (let opcion of this.selectFunciones.nativeElement.options){ 
      if (opcion.selected == true){ 
        aux.push(opcion.value); 
      } 
    } 
    this.personas = await this._service.getPlantillaMultiplesAsync(aux); 
    this._cdr.detectChanges(); 
  } 
}