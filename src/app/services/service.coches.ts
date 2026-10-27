import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Coche } from "../components/models/coche";

@Injectable({
  providedIn: 'root'
})
export class ServiceCoches {
    constructor(private _http: HttpClient){}

    async getCochesAsync(): Promise<Coche[]> {
        let url = environment.UrlApiCoches;
        let request = "webresources/coches";
        return firstValueFrom(this._http.get<Coche[]>(url + request));
    }
}