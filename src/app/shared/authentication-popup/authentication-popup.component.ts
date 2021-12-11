import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { authPopupAnimation } from '@animations/animations';
import { Store } from '@ngxs/store';
import { AuthService } from '@services/authentication/auth.service';
import { first } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Subject } from 'rxjs';
import { emailPattern } from 'src/app/core/validation/email.schema';
@Component({
  selector: 'app-authentication-popup',
  templateUrl: './authentication-popup.component.html',
  styleUrls: ['./authentication-popup.component.scss'],
  animations: [authPopupAnimation]
})
export class AuthenticationPopupComponent implements OnInit {
  $loading: Subject<boolean> = new Subject<boolean>();
  shownForm: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  signInForm = this.fb.group({
    email: ['johndoe@email.com', [Validators.required, Validators.pattern(emailPattern)]],
    password: ['password', [Validators.required]]
  });
  signUpForm = this.fb.group({
    name: ['', [Validators.required]],
    employee_code: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
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

  handleSignin(e: any): void {
    e.preventDefault();
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }
    this.$loading.next(true);
    this.auth.signin(this.signInForm.value)
      .subscribe((result: boolean) => {
        this.$loading.next(false);
        if (result) {
          this.store.select(state => state.user.darkMode).pipe(first()).subscribe(dm => !dm ? this.changeState(3) : this.dialogRef.close())
        } else {
          this.snackbar.open('Invalid credentials!', 'close', { duration: 3000 });
        }
      })
  }

  handleSignup(e: any): void {
    e.preventDefault();
    this.$loading.next(true);
    setTimeout(() => {
      this.$loading.next(false);
      this.changeState(3);
    }, 2000)
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

  changeState(state: number): void {
    this.shownForm.next(state);
    const height = this.mainHolder.nativeElement.offsetHeight;
    this.triggerData = {
      value: state,
      params: { start: height }
    }
  }

}
