import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { authPopupAnimation } from '../../exports/animations';
import { Store } from '@ngxs/store';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { first } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['', [Validators.required]]
  });
  triggerData = {
    value: 0,
    params: { start: 0 }
  }
  @ViewChild('mainholder') mainHolder!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private auth: AuthService,
    private dialogRef: MatDialogRef<AuthenticationPopupComponent>,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  async handleSignin(e: any): Promise<any> {
    e.preventDefault();
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }
    const result = await this.auth.signIn(this.signInForm.value);
    result ?
      this.store.select(state => state.user.darkMode).pipe(first()).subscribe(dm => !dm ? this.changeState(3) : this.dialogRef.close())
      : this.snackbar.open('Invalid credentials!', 'close', { duration: 3000 });

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
