import { Injectable } from "@angular/core"; 
import { Persona } from "../components/models/persona";
import { firstValueFrom, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicePersonas {
    // debemos recibir el objeto HttpClient en el constructor
    constructor(private _http: HttpClient) {}

    // TENEMOS DOS OPCIONES PARA TRABAJAR.
    // DEVOLVER LA PETICION O DEVOLVER UNA PROMESA
    // DEVOLVEMOS LA PETICION A LA LLAMADA UTILIZando Observable
    getPersonas(): Observable<any> {
        let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        return this._http.get(urlApi);
    }

    getPersonasPromise(): Promise<any> {
        let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        let promise = new Promise((resolve) => {
            this._http.get(urlApi).subscribe((response) => {
                resolve(response);
            })
        })
        return promise;
    }

    async getPersonasAsync(): Promise<Persona[]> {
        let urlApi = "https://servicioapipersonasmvpgs.azurewebsites.net/api/personas";
        return firstValueFrom(this._http.get<Persona[]>(urlApi));
    }
}