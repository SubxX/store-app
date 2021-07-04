import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { authPopupAnimation } from '../../exports/animations';
import { Store } from '@ngxs/store';
import { SetDarkmode } from 'src/app/state/actions/userActions';
import { SetUser } from 'src/app/state/actions/userActions';
import { take } from 'rxjs/operators';
import { User } from 'src/app/state/models/interfaces';

@Component({
  selector: 'app-authentication-popup',
  templateUrl: './authentication-popup.component.html',
  styleUrls: ['./authentication-popup.component.scss'],
  animations: [authPopupAnimation]
})
export class AuthenticationPopupComponent implements OnInit {
  formShown = 1;
  emailPattern = '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';
  signInForm = this.fb.group({
    email: ['subhambhattacharya700@gmail.com', [Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['Tomrider1', [Validators.required]]
  });
  triggerData = {
    value: 0,
    params: { start: 0 }
  }
  @ViewChild('mainholder') mainHolder!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  handleSignin(e: any): void {
    e.preventDefault();
    this.changeState(3);
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }
    const data = {
      ...this.signInForm.value,
      uid: 'test',
      name: 'Subham Bhattacharya',
      photoURL: ''
    }
    this.setUser(data);
  }

  setUser(payload: User): void {
    this.store.dispatch(new SetUser(payload));
  }

  changeDarkMode(): void {
    this.store.dispatch(new SetDarkmode(true));
  }

  getControlError(formGroup: FormGroup, controlname: string): boolean | undefined {
    const ctrl: AbstractControl | null = formGroup.get(controlname);
    return ctrl?.touched && ctrl.errors !== null;
  }

  togglePasswordVisibility(io: HTMLElement, e: any) {
    e.preventDefault();
    e.stopPropagation();
    const current = this.getInputType(io);
    io.setAttribute('type', current === 'password' ? 'text' : 'password');
  }

  getInputType(io: HTMLElement): string | null {
    return io.getAttribute('type');
  }

  getTitle(): any {
    return this.formShown === 2 ? 'signin' : 'signup';
  }

  changeState(state: number): void {
    this.formShown = state;
    const height = this.mainHolder.nativeElement.offsetHeight;
    this.triggerData = {
      value: state,
      params: { start: height }
    }
  }

}

// this.store.select(state => state.user.darkMode)
// .pipe(take(1))
// .subscribe(data => {
//   console.log(data);
// });
