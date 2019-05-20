import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  // DECLARACA DA API
  usuariosUrl = 'https://inurse.alumiar.me/api/auth/register';

  constructor(private http: HttpClient) { }

  
//metodo do post para enviar dados de cadastro a API https://inurse.alumiar.me/api/auth/register 
  criar(usuario: any) {
    return this.http.post(this.usuariosUrl, usuario);
  }
}
