import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  

  constructor(private service: LoginService) {
   this.form = new FormGroup ({
     email: new FormControl('',Validators.required),
     password: new FormControl('', Validators.required)
   });
}

  ngOnInit() {
    
  }

  
  login() {

    const val = this.form.value;
    this.service.fazerLogin(val.email, val.password).subscribe(
      () => {
          alert("Usuario:  "+ val.email+" Logado com sucesso!");
          this.form = new FormGroup ({
            email: new FormControl(''),
            password: new FormControl('')
          });
          
         
      }
  );

    
  }
  
  sair() {
    this.service.logout();
  }


}
