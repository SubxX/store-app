import { trigger, style, animate, transition } from '@angular/animations';

export const Animations = {
  // menu Animation
  menuAnimation:trigger('openClose', [
      transition(':enter', [
        style({ transform: 'scale(0.9) translateY(20px)', opacity: 0 }),
        animate('100ms ease', style({ transform: 'scale(1) translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'scale(1) translateY(0)', opacity: 1 }),
        animate('100ms ease', style({ transform: 'scale(0.9) translateY(20px)', opacity: 0 }))
      ])
    ])
}
