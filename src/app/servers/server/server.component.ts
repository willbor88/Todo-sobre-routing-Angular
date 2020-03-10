import { Component, OnInit, Directive } from '@angular/core';
import { ServersService } from '../servers.service';
import {ActivatedRoute,Params, Route, Router, Data  } from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data:Data)=>{
        this.server= data['servidor']
      }
    )
    // const id= +this.route.snapshot.params['id']
    // this.server = this.serversService.getServer(1);
    // this.route.params.subscribe((params:Params)=>{
    // this.server= this.serversService.getServer(+params['id'])//El mas para convertir a numero
    // })

  }

  onEdit(){

    this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'})

  }

}

