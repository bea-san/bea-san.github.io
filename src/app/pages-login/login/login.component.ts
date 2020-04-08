import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  vizivel = true;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarRecuperarSenha() {
    this.vizivel = !this.vizivel;
}

}
