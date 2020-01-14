import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: any = {}
  cargada: boolean = false;
  equipo: any[] = [];









  constructor(private http: HttpClient) {
    this.cargarInfo()
    this.cargarEquipo()
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe(resp => {
        this.cargada = true
        this.info = resp
      })
  }

  private cargarEquipo() {
    this.http.get('https://angular-portfolio-dd452.firebaseio.com/equipo.json')
      .subscribe((resp:any[]) => {
        this.cargada = true
        this.equipo = resp 
      })
  }
}
