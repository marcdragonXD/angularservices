import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceCoches } from '../../services/service.coches';
import { Coche } from '../models/coche';

@Component({
  selector: 'app-coches-api-component',
  standalone: false,
  styleUrl: './coches-api-component.css',
  templateUrl: './coches-api-component.html',
})
export class CochesApiComponent implements OnInit {
    public arrayCoches!: Array<Coche>;

    constructor(
        private _cdr: ChangeDetectorRef,
        private _service: ServiceCoches
    ){}

    ngOnInit(): void {
        this.loadCoches();
    }

    async loadCoches(): Promise<void> {
        this.arrayCoches = await this._service.getCochesAsync();
        this._cdr.detectChanges();
    }
}