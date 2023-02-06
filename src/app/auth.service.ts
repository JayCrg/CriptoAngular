import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, GithubAuthProvider} from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService{
  
  public isLogged:boolean = false;
  public userID:string = '';
  public userEmail:any = '';
  constructor(public auth:Auth, public router:Router) { }

  checkAuthState(){
    onAuthStateChanged(this.auth, (user) => {
      if(user){
        this.isLogged = true;
        this.userEmail = user.email
        this.userID = user.uid;
      }else{
        this.isLogged = false;
        this.userID = '';
      }
    })
  }

  signUp(email: string, password: string){
    createUserWithEmailAndPassword(this.auth, email, password)
    .then((userCredential) => {
      this.isLogged = true;
      this.userID = userCredential.user.uid;
      this.userEmail = userCredential.user.email
      this.router.navigate(['/']);
    })
    .catch((error) => {
      this.isLogged = false;
      this.userID = '';
    });
  }

  login(email: string, password: string){
    signInWithEmailAndPassword(this.auth, email, password)
    .then((userCredential) => {
      this.isLogged = true;
      this.userID = userCredential.user.uid;
      this.userEmail = userCredential.user.email
      this.router.navigate(['/']);
    })
    .catch((error) => {
      this.isLogged = false;
      this.userID = '';
    });
  }

  google(){
    signInWithPopup(this.auth, new GoogleAuthProvider())
    .then((userCredential) => {
      const credential:any = GoogleAuthProvider.credentialFromResult(userCredential);
      const token = credential.accessToken;
      this.isLogged = true;
      this.userID = userCredential.user.uid;
      this.userEmail = userCredential.user.email
      this.router.navigate(['/']);
    })
    .catch((error) => {
      this.isLogged = false;
      this.userID = '';
    });
  }

  github(){
    signInWithPopup(this.auth, new GithubAuthProvider())
    .then((userCredential) => {
      const credential:any = GoogleAuthProvider.credentialFromResult(userCredential);
      const token = credential.accessToken;
      this.isLogged = true;
      this.userID = userCredential.user.uid;
      this.userEmail = userCredential.user.email
      this.router.navigate(['/']);
    })
    .catch((error) => {
      this.isLogged = false;
      this.userID = '';
    });
  }

  signOut(){
    this.auth.signOut();
    this.isLogged = false;
    this.userID = '';
    this.router.navigate(['/']);
  }
  
  isLoggedIn(){
    return this.isLogged;
  }
  

}
