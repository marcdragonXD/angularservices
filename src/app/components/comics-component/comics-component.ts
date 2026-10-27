import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Comic } from '../models/Comic';
import { ServiceComics } from '../../services/service.comics';

@Component({
  selector: 'app-comics-component',
  standalone: false,
  styleUrl: './comics-component.css',
  templateUrl: './comics-component.html',
})
export class ComicsComponent implements OnInit {
    public arrayComics!: Array<Comic>;

    constructor(
        private _cdr: ChangeDetectorRef,
        private _service: ServiceComics
    ) {}

    ngOnInit(): void {
        this._service.getComics().then(data => {
            this.arrayComics = data;
            this._cdr.detectChanges();
        });
    }
}