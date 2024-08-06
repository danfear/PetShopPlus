import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  public listarProductos(){
    return this.http.get(`${baserUrl}/producto/`);
  }

  public agregarProducto(producto:any){
    return this.http.post(`${baserUrl}/producto/`,producto);
  }

}
