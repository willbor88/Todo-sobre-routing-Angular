import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot  } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import { inject } from "@angular/core/testing";
import { Injectable } from "@angular/core";


interface Server{
    id:number,
    name:string,
    status:string
}
@Injectable()
export class ServerResolver implements Resolve<Server>{
constructor(private serversService:ServersService){}

resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Server>|Promise<Server>|Server{
    return this.serversService.getServer(+route.params['id'])//llamar el metodo ger server, pasar el parametro id  y luego el metodo  devulve el objeto servidor

}
    

}