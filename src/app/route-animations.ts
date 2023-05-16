import {
    trigger,
    transition,
    style,
    query,
    group, 
    animateChild, 
    animate, 
    keyframes
} from '@angular/animations';




export const slide = 
trigger('routeAnimations', [
    transition ( '* <=> session', slideTo('right') ),
    transition ( 'session <=> *', slideTo('left') ),
]);

function slideTo(direction: any){
    const optional = { optional: true };
    return [
        query(':enter :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '80%'
            })
        ], optional),
        query(':enter', [ 
            style({[direction]: '-80%'})
        ]),
        group([
            query(':leave', [
                animate('600ms ease', style({ [direction]: '80%'}))
            ], optional),
        ]),
    ];
}