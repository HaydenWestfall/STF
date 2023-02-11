import { animate, style, transition, trigger } from "@angular/animations";

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

