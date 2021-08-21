import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngxs/store';
import { User } from 'src/app/state/models/interfaces';
import { SetUser } from 'src/app/state/actions/userActions';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private store: Store,
    private router: Router,
    private ngZone: NgZone
  ) { }

  // signIn(payload: any): boolean {
  //   const { email, password } = payload;
  //   this.setUserData({ id: 'asd', name: 'Subham Bhattacharya', email: 'subhambhattacharya700@gmail.com', photoURL: '', employee_code: '' });

  //   return true;
  // }

  signin(payload: any): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(payload.email, payload.password)
  }

  signup(payload: any): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then((result: any) => {
        delete payload.password;
        this.afs.collection("users")
          .doc(result.user.uid)
          .set({ id: result.user.uid, ...payload }, { merge: true })
          .finally(() => this.setUserData({ id: result.user.uid, ...payload }));
      }).catch(err => { throw err });
  }

  get authState(): Observable<any> {
    return this.afAuth.authState;
  }

  getUserFromFirebase(id: string): Observable<any> {
    // return this.afs.collection("users", ref => ref.where('uid', '==', uid)).valueChanges()
    return id ? this.afs.doc(`/users/${id}`).valueChanges() : of(null);
  }

  setUserData(payload: User): void {
    this.store.dispatch(new SetUser(payload));
    localStorage.setItem('user', JSON.stringify(payload));
  }

  async logOutUser(): Promise<any> {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.store.dispatch(new SetUser({ email: '', name: '', photoURL: '', id: '', employee_code: '' }));
    this.router.navigate(['/']);
  }

}
