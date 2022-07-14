import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
   domicilios:any;
   headers= new HttpHeaders()
  .set('content-type', 'application/json')

  .set('Access-Control-Allow-Origin', '*');
  constructor(private http: HttpClient) {

   }

  ngOnInit(): void {
    this.http.get("http://127.0.0.1:8000/user_domicilio").subscribe(data =>{
      this.domicilios = data;


    })
  }

}
