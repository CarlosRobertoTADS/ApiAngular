import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

import * as jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

 tokencodificado:string;

  constructor(private http: HttpClient ) { }

  ngOnInit() {
    
    // obtendo valor do token no localstorage e decodificado para JSON
      var token =  localStorage.getItem('currentUser') ;
      var decoded = jwt_decode(token);

      
       //passar de JSON para string
       var currentUser = JSON.stringify({decoded});
      console.log(currentUser);
      this.tokencodificado = currentUser;
  
  }


    
   

  }
 
  
   


