import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmploieService {

  constructor(private http : HttpClient) { }


    createEmploie(formData : FormData){

        return this.http.post('http://localhost:3000/api/offreemploi',formData,{observe: 'response'})

    }

}
