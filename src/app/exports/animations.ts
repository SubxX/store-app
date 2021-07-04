import { trigger, style, animate, transition, group, query } from '@angular/animations';

const globalEasing = 'cubic-bezier(0.79,0.14,0.15,0.86)'

const menuAnimation = trigger('openClose', [
  transition(':enter', [
    style({ transform: 'scale(0.9) translateY(20px)', opacity: 0 }),
    animate(`150ms ease`, style({ transform: 'scale(1) translateY(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    style({ transform: 'scale(1) translateY(0)', opacity: 1 }),
    animate(`150ms ease`, style({ transform: 'scale(0.9) translateY(20px)', opacity: 0 }))
  ])
])

const authPopupAnimation = trigger('slideAnim', [
  transition('* <=> *', [
    group([
      query(':enter', [
        style({ transform: 'scale(1.2)', height: '{{start}}px', opacity: 0 }),
        animate(`0.25s ${globalEasing}`, style({ transform: 'scale(1)', height: '*', opacity: 1 }))
      ], { optional: true }),

      query(':leave', [
        style({ transform: 'scale(1)', position: 'absolute', top: 0, left: 0, opacity: 1, width: '100%' }),
        animate(`0.25s ${globalEasing}`, style({ transform: 'scale(0.5)', opacity: 0 }))
      ], { optional: true })
    ])
  ])
]);

const mobNavAnimation = trigger('mobmenu', [

  transition(':enter', [
    style({ transform: 'scale(0.5) translateY(20px)', opacity: 0 }),
    animate(`150ms ease`, style({ transform: 'scale(1) translateY(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    style({ transform: 'scale(1) translateY(0)', opacity: 1 }),
    animate(`150ms ease`, style({ transform: 'scale(0.5)translateY(20px)', opacity: 0 }))
  ])
])


export { authPopupAnimation, menuAnimation, mobNavAnimation }
