import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseAuthentication } from 'src/app/models/ResponseAuthentication';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent  implements OnInit{

  loginForm! : FormGroup

  constructor(private serviceApi : ApiService , private router : Router ){}
  
  error : string ="";
  credentialCorrect : boolean = false;
  
  ngOnInit(): void {

    this.loginForm = new FormGroup({

      email : new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,Validators.required)
    })
   }

   onSubmit() {
    if (this.loginForm.valid) {
      this.serviceApi.loginCredential(this.loginForm.value)
        .subscribe((data  :ResponseAuthentication) => {
         
          localStorage.setItem('token',data.token);
          this.credentialCorrect=true;
          if(this.credentialCorrect){
            this.reindirizza()
          }
        }, error =>{
          if (error.status === 401) {
             this.error = "Autenticazione fallita. Controlla le tue credenziali.";
             console.log(this.error)
          }
        });
    }
    

  }


  logout(){
    localStorage.removeItem('token')
  }
  reindirizza(){
    this.router.navigate(['/'])
  }  
}
  