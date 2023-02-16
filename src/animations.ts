import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

export const fade = trigger('fade', [
    transition(":enter", [
        style({ opacity: 0 }),
        animate( "{{fadeTime}}ms ease-in-out", style({ opacity: 1 }))
    ], {params: {fadeTime: 500}}),
    transition(":leave", [
        style({ opacity: 1 }),
        animate( "{{fadeTime}}ms ease-in-out", style({ opacity: 0 }))
    ], {params: {fadeTime: 500}}),
]);

export const growHeight = trigger('growHeight', [
    transition(":enter", [
        style({ height: 0 }),
        animate( "450ms ease-in-out", style({ height: '*' }))
    ]),
    transition(":leave", [
        style({ height: '*' }),
        animate( "175ms ease-in", style({ height: 0 }))
    ]),
]);

export const listAnim = trigger('listAnim', [
    transition("* => *", [
        query(':enter', [
            style({
                opacity: 0,
                height: 0
            }),
            stagger(100, [
                animate('0.2s ease')
            ])
        ], { optional: true })
    ])
]);

export const itemAnim = trigger('itemAnim', [
    transition("void => *", [
        style({
            height: 0,
            opacity: 0,
            transform: 'scale(0.85)',
            margin: 0,
            padding: 0
        }),
        animate("50ms", style({
            height: '*',
            marginBottom: 0,
            padding: 0
        })),
        animate(68)
    ]),
    transition("* => void", [
        animate(50, style({
            transform: 'scale(1.05)'
        })),
        animate("50ms", style({
            transform: 'scale(1)',
            opacity: 0.75
        })),
        animate("120ms ease-out", style({
            transform: 'scale(0.68)',
            opacity: 0
        })),
        animate("150ms ease-out", style({
            opacity: 0,
            height: 0,
            padding: 0,
            marginBottom: 0
        })),
    ]),
]);
