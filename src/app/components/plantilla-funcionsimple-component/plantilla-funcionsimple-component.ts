import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core'; 
import { Plantilla } from '../models/plantilla';
import { ServicePlantillas } from '../../services/service.plantillas'; 

@Component({ 
  selector: 'app-plantilla-funcion-simple-component', 
  standalone: false, 
  styleUrl: './plantilla-funcionsimple-component.css', 
  templateUrl: './plantilla-funcionsimple-component.html', 
}) 
export class PlantillaFuncionSimpleComponent implements OnInit { 
  @ViewChild("selectfuncion") selectFuncion!: ElementRef; 
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
    let funcion = this.selectFuncion.nativeElement.value; 
    this.personas = await this._service.getPlantillaFuncionAsync(funcion); 
    this._cdr.detectChanges(); 
  } 
}