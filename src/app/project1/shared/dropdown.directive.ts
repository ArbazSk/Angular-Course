import { Directive, ElementRef, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
    selector : '[appDropDown]'
})
export class DropDownDirective {
    @HostBinding("class.show")
    dropDownToggle = false;

    @HostListener('click')
    onDropDownClick(){
        this.dropDownToggle = !this.dropDownToggle;
        console.log(this.dropDownToggle);
    }
}