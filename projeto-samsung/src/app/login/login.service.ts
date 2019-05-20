import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';






@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public token: string;
  //declação da API
  usuariosUrl = 'https://inurse.alumiar.me/api/auth/login';
  
  

  constructor(private http: HttpClient) { 
   
  }

 
 
// metodo para acessar api
  fazerLogin(email: string, password: string): Observable<any> {
    // post enviando os dados para API
    return this.http.post<any>( this.usuariosUrl, {email: email,password: password} )
    .pipe(
      map(user => {
        // login bem-sucedido se houver um token jwt na resposta
        if (user && user.token) {
          // armazenar detalhes do usuário e token jwt no localStorage para manter o usuário logado entre as atualizações da página
          localStorage.setItem('currentUser', JSON.stringify(user));
          
          
        }

        return user;
      })
    );

    
}


   

logout(): void {
  // Limpa o token removendo o usuário do local store para efetuar o logout
  this.token = null;
  localStorage.removeItem('currentUser');
}





}


