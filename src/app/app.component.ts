import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { MainService } from '@services/main/main.service';
import { AuthService } from '@services/authentication/auth.service';
import { Subject } from 'rxjs';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'store-app';
  destroy: Subject<any> = new Subject<any>();

  constructor(
    private main: MainService,
    private animBuilder: AnimationBuilder,
    private auth: AuthService
  ) {
    this.auth.initLoggedUser();
  }

  ngAfterViewInit() {
    this.main.setTheme(localStorage.theme ? true : false);
    // this.hidePreLoader();
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
