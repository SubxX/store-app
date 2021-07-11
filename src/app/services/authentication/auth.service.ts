import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Store } from '@ngxs/store';
import { User } from 'src/app/state/models/interfaces';
import { SetUser } from 'src/app/state/actions/userActions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private store: Store,
    private router: Router
  ) { }

  authenticationChecker(): Observable<any> {
    return this.afAuth.authState;
  }

  signIn(payload: any): Promise<boolean> {
    const { email, password } = payload;
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(
        async (result: any) => {
          const user: User | null = await this.getUserDataFromId(result.user.uid);
          if (!user) return false;
          this.setUserData(user);
          return true;
        }
      ).catch(err => false);
  }

  getUserDataFromId(uid: string): Promise<User | null> {
    return this.afs.collection('users').doc(uid).get().toPromise()
      .then(res => {
        const userData: User | any = res.data();
        return userData ? { ...userData, authenticated: true, uid } : null;
      })
      .catch(err => null)
  }

  setUserData(payload: User): void {
    this.store.dispatch(new SetUser(payload));
    localStorage.setItem('user', JSON.stringify(payload));
  }

  logOutUser(): void {
    this.afAuth.signOut()
      .then(() => {
        this.store.dispatch(new SetUser({ email: '', name: '', photoURL: '', uid: '', authenticated: false }));
        localStorage.removeItem('user');
        this.router.navigate(['/']);
      })
  }

}
