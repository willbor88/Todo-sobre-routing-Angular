import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
//servicio

import { ServersService } from './servers/servers.service';
//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';//app.routes.ts y el modulo de rutas
import { appRoutingModule } from './app-routing.module';
import { autGuard } from './autentic-guard.service';
import { AutService } from './aut.service';
import { canDeactivateGuard } from './servers/edit-server/canDeactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutingModule,
  ],
  providers: [ServersService,autGuard,AutService,canDeactivateGuard,ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
