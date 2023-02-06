import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
import { Auth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, GithubAuthProvider} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private authS: AuthService, private router: Router,public auth:Auth) {}
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
 
 
    onAuthStateChanged(this.auth, (user) => {
      if(user){
        return false;
      }else{
        return true;
      }
    })

    this.router.navigate(['/home']);
    return false;
  }
  }