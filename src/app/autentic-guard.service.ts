import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router, CanActivateChild  } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AutService } from "./aut.service";

@Injectable()

export class autGuard implements CanActivate, CanActivateChild {

constructor(private autService:AutService, private router:Router){}

canActivate(route:ActivatedRouteSnapshot,
state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{

   return this.autService.Autenticado().then(//usar el servcicio  y  llamar el metodo Autenticado para recibir el estado de la propiedad :loggedIn
       (autenticado:boolean)=>{//Validar si en el servicio autenticado esta true
           if (autenticado){
            return true
        }
        else{
            this.router.navigate(['/'])//si autenticado no esta true:regresar al inicio
        }
    }
    )

}

//Guard solom para rutas hijas
  canActivateChild (route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean
    {

        return this.canActivate(route,state)
    }
    

}