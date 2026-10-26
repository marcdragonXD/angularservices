import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';

@Component({
  selector: 'app-personas-api-component',
  standalone: false,
  styleUrl: './personas-api-component.css',
  templateUrl: './personas-api-component.html',
})
export class PersonasApiComponent implements OnInit {
    public personas: any; // Declaramos la propiedad para evitar el error de TypeScript

    constructor(
        private _cdr: ChangeDetectorRef,
        private _service: ServicePersonas
    ) {}

    ngOnInit(): void {
        this._service.getPersonas().subscribe((response) => {
            console.log("Leyendo personas");
            this.personas = response;
            this._cdr.detectChanges();
        });
    }
}