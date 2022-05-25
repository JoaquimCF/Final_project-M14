import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(public http: HttpClient) { }



  login(data) {
    return this.http.post("https://private-295890-manga8.apiary-mock.com/users/logIn", data);
  }

  readMangas(){
    return this.http.get("https://private-295890-manga8.apiary-mock.com/api/mangas");
  }

  addManga(data) {
    return this.http.post("https://private-295890-manga8.apiary-mock.com/api/add-mangas", data);
  }

  deleteManga(data){
    return this.http.post('https://private-295890-manga8.apiary-mock.com/api/home', data);
  }
  
}
