import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngxs/store';
import { User } from '@store/models/interfaces';
import { SetUser } from '@store/actions/userActions';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private store: Store,
    private router: Router,
  ) { }

  signin(payload: any): Observable<any> {
    return of(payload.email === 'johndoe@email.com' && payload.password === 'password')
      .pipe(
        delay(2500),
        tap(state => {
          if (state) this.setUserData({ email: 'johndoe@email.com', name: 'John Doe', photoURL: '', id: '1', employee_code: 'EPID-01' })
        }),
      )
  }

  signup(payload: any): void {
    console.log(payload);
  }

  setUserData(payload: User): void {
    this.store.dispatch(new SetUser(payload));
    localStorage.setItem('user', JSON.stringify(payload));
  }

  initLoggedUser(): void {
    try {
      const parsedUser = JSON.parse(localStorage.getItem('user') || '');
      if (parsedUser) this.setUserData(parsedUser);
    } catch (error) {
      this.logOutUser();
    }
  }

  async logOutUser(): Promise<any> {
    localStorage.removeItem('user');
    this.store.dispatch(new SetUser({ email: '', name: '', photoURL: '', id: '', employee_code: '' }));
    this.router.navigate(['/']);
  }

}
