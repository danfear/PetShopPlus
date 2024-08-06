import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  //llamado al servidor para generar token
  public generateToken(loginData:any){
    return this.http.post(`${baserUrl}/generate-token`,loginData);
  }

  public getCurrentUser(){
    return this.http.get(`${baserUrl}/actual-usuario`);
  }

  //inicio sesión y almacenanamiento del token en el localStorage del navegador
  public loginUser(token:any){
    localStorage.setItem('token',token);
    //return true;//
  }

  public isLoggedIn(){ //comprueba si esta conectado(token esta almacernado)//
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  //cierre sesion y eliminacion del token en localStorage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //obtener el token
  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user:any){//conviete string usuario a JSON//
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(){//obtiene usuario del localStorage//
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }



}
