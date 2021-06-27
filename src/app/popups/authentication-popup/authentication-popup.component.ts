import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { authPopupAnimation } from '../../exports/animations';

@Component({
  selector: 'app-authentication-popup',
  templateUrl: './authentication-popup.component.html',
  styleUrls: ['./authentication-popup.component.scss'],
  animations: [authPopupAnimation]
})
export class AuthenticationPopupComponent implements OnInit {
  formShown = 3;
  emailPattern = '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';
  signUpForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['', [Validators.required]]
  });
  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['', [Validators.required]]
  });
  triggerData = {
    value: 0,
    params: { start: 0 }
  }
  @ViewChild('mainholder') mainHolder!: ElementRef;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  handleSignup(e: any): void {
    e.preventDefault();
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }
    console.log(this.signUpForm.value);
  }

  handleSignin(e: any): void {
    e.preventDefault();
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }
    console.log(this.signInForm.value);
  }

  getControlError(formGroup: FormGroup, controlname: string): boolean | undefined {
    const ctrl: AbstractControl | null = formGroup.get(controlname);
    return ctrl?.touched && ctrl.errors !== null;
  }

  togglePasswordVisibility(io: HTMLElement) {
    const current = this.getInputType(io);
    io.setAttribute('type', current === 'password' ? 'text' : 'password');
  }

  getInputType(io: HTMLElement): string | null {
    return io.getAttribute('type');
  }

  getTitle(): any {
    if (this.formShown === 1 || this.formShown === 3) return 'signup';
    if (this.formShown === 2) return 'signin';
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
