import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutService } from '../aut.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private autService:AutService) { }

  ngOnInit() {
  }

  CargarServicios() {
this.router.navigate(['servers','1','edit'],{queryParams:{permitir:'1'},fragment:'cargando'})//Recive un array con la ruta de destino

  }

  onLogin(){
 this.autService.Login()
  }

  onLogout(){
    this.autService.LogOut()

  }

}
