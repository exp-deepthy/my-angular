import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector : '[appSucess]'
})

export class SucessDirective{
    @HostBinding('class.hide') isAlertLink = false;

    @HostListener('click') toggleOpen()
    {
        this.isAlertLink = true;
    }
}