import { Observable } from "rxjs";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

 export interface canDeactivateComponent{ 

CanDeactivate:()=> Observable<boolean>|Promise<boolean>|boolean


 }

 export class canDeactivateGuard implements CanDeactivate<canDeactivateComponent>{
canDeactivate(
    component:canDeactivateComponent,
    rutaActual:ActivatedRouteSnapshot,
    estadoActual:RouterStateSnapshot,
    nexState?:RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean
    
    {
        return component.CanDeactivate()
    }


 }