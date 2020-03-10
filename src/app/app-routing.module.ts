import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';//app.routes.ts y el modulo de rutas
import { autGuard } from "./autentic-guard.service";
import { canDeactivateGuard } from "./servers/edit-server/canDeactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";


const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'users',component:UsersComponent,children:[
      {path:':id/:name',component:UserComponent},
    ]},
      {path:'servers',
       //canActivate:[autGuard],
       canActivateChild:[autGuard],
        component:ServersComponent, 
        children:[
      {path:':id',component:ServerComponent,resolve:{servidor:ServerResolver}},//servidor:Guarda el objeto que devulve el  servicio ServerResolver
    {path:':id/edit',component:EditServerComponent,canDeactivate:[canDeactivateGuard]},
    ]},
   // {path:'not-found',component:PageNotFoundComponent},
    {path:'not-found',component:ErrorPageComponent,data:{message:'Pagina no encontrada'}},//pasar data estatica por la ruta
    {path:'**',redirectTo:'not-found'}//Debe ser la ultimo ruta en cargarse
      
  ]
@NgModule({
    imports: [
    RouterModule.forRoot(appRoutes),//Modulo de rutas y el metodo forRoot que recibe el array con las rutas  
    ],
    exports:[
        [RouterModule]
    ]
})
export class appRoutingModule{


}