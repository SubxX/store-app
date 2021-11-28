import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngxs/store';
import { User } from 'src/app/state/models/interfaces';
import { SetUser } from 'src/app/state/actions/userActions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private store: Store,
    private router: Router,
  ) { }

  signin(payload: any): void {
    console.log(payload)
  }

  signup(payload: any): void {
    console.log(payload);
  }

  setUserData(payload: User): void {
    this.store.dispatch(new SetUser(payload));
    localStorage.setItem('user', JSON.stringify(payload));
  }

  async logOutUser(): Promise<any> {
    localStorage.removeItem('user');
    this.store.dispatch(new SetUser({ email: '', name: '', photoURL: '', id: '', employee_code: '' }));
    this.router.navigate(['/']);
  }

}
