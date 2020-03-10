import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(
    private serversService: ServersService,
    private miRuta:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  Recargar(){

this.router.navigate(['/servers'],{relativeTo:this.miRuta})//Añadimos la ruta /servers sueguido de nuestra actual en la cual estamos posicionados

  }

}
