import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

/* https://api.github.com/search/users?q=baxone*/
baseUrl = 'https://api.github.com/';


// vamos a hacer una petición asíncrona

  constructor(private httpClient: HttpClient) { }

  getUsersByName(pName: string): Promise<any> {
    return lastValueFrom (this.httpClient.get<any>(`${this.baseUrl}search/users?q=${pName}`)) ;
  }

// ahora hacemos el metodo para obtener la info de un usuario por su login

getUserByLogin(pLogin: string): Promise<any> {
  return lastValueFrom (this.httpClient.get<any>(`${this.baseUrl}users/${pLogin}`)) 
}

}
