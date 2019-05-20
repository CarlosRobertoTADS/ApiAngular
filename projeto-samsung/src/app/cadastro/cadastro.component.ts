import { Component, OnInit } from '@angular/core';
import { CadastroService } from './cadastro.service';
import { FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  frm: FormGroup;
  usuarios: Array<any>;
  usuario: any;

  constructor(private service: CadastroService) {
    
  }

  ngOnInit() {
    this.usuario = {};
   
  
  }
// pegando os valores do formulario e passando a responsabilidade para o cadastro service enviar para API os valores
  criar(frm: FormGroup) {
    
    this.service.criar(this.usuario).subscribe(
      () => {
      alert("Usuario Cadastrado com Sucesso");

      frm.reset();

              
    });

}

}