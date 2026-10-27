import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Plantilla } from "../components/models/plantilla";
@Injectable({
    providedIn: 'root'
})
export class ServicePlantillas {
    constructor(private _http: HttpClient) {}

    // MÉTODO PARA OBTENER LAS FUNCIONES (para rellenar el select)
    async getFuncionesAsync(): Promise<any[]> {
        let url = environment.UrlApiPlantillas;
        let request = "api/Plantilla/Funciones";
        return firstValueFrom(this._http.get<any[]>(url + request));
    }

    // MÉTODO PARA OBTENER LOS DATOS DE LA PLANTILLA SEGÚN UNA FUNCIÓN SELECCIONADA
    async getPlantillaFuncionAsync(funcion: string): Promise<any[]> {
        let url = environment.UrlApiPlantillas;
        let request = "api/Plantilla/PlantillaFuncion/" + funcion;
        return firstValueFrom(this._http.get<any[]>(url + request));
    }

    // MÉTODO PARA OBTENER LA PLANTILLA CON MÚLTIPLES FUNCIONES
    async getPlantillaMultiplesAsync(funciones: string[]): Promise<Plantilla[]> {
        let content = "";
        for (let funcion of funciones) {
            content += "funcion=" + funcion + "&";
        }
        if (content.length > 0) {
            content = content.substring(0, content.length - 1);
        }
        let url = environment.UrlApiPlantillas;
        let request = "api/Plantilla/PlantillaFunciones?" + content;
        return firstValueFrom(this._http.get<Plantilla[]>(url + request));
    }
}