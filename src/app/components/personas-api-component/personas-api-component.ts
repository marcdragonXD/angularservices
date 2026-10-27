import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { ServiceComics } from '../../services/service.comics';

@Component({
  selector: 'app-personas-api-component',
  standalone: false,
  styleUrl: './personas-api-component.css',
  templateUrl: './personas-api-component.html',
})
export class PersonasApiComponent implements OnInit {
    public personas: any; 
    public arrayComics: any;

    constructor(
        private _cdr: ChangeDetectorRef,
        private _servicePersonas: ServicePersonas,
        private _serviceComics: ServiceComics
    ) {}

    ngOnInit(): void {
        this._servicePersonas.getPersonas().subscribe((response) => {
            console.log("Leyendo personas");
            this.personas = response;
            this._cdr.detectChanges();
        });

        this._serviceComics.getComics().then((response) => {
            this.arrayComics = response;
            this._cdr.detectChanges();
        }).catch((error: any) => {
            console.error("Error en el Api", error);
        });
    }
}