export class AutService{
 
loggedIn=false

Autenticado(){
    const promise= new Promise(
        (resolve,reject)=>{
        setTimeout(() => {
            resolve(this.loggedIn)
        }, 800);
        }

    )
    return promise
   
}

Login(){
this.loggedIn=true

}

LogOut(){

this.loggedIn=false

}

}