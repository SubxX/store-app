import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { MainService } from './services/main/main.service';
import { AuthService } from './services/authentication/auth.service';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { User } from './state/models/interfaces';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'store-app';
  destroy: Subject<any> = new Subject<any>();

  constructor(
    private main: MainService,
    private auth: AuthService,
    private animBuilder: AnimationBuilder
  ) {
    this.auth.authState
      .pipe(takeUntil(this.destroy), switchMap(data => this.auth.getUserFromFirebase(data?.uid)))
      .subscribe((user: User | null) => {
        user ? this.auth.setUserData(user) : console.log('no user');
        this.hidePreLoader();
      });
    // const user: any = localStorage.getItem('user');
    // if (user) this.auth.setUserData(JSON.parse(user));
  }

  ngAfterViewInit() {
    this.main.setTheme(localStorage.theme ? true : false);
  }

  hidePreLoader() {
    const elm: HTMLElement | null = document.getElementById('pre-loader');
    const myAnimation = this.animBuilder.build([style({ opacity: 1 }), animate(300, style({ opacity: 0, }))]);
    const player = myAnimation.create(elm);
    player.onDone(() => {
      player.destroy();
      elm?.classList.add('hidden');
    });
    player.play();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.unsubscribe();
  }
}
