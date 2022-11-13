import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: "[appBasicHighlighter]"
})
export class BasicDirective implements OnInit{

    constructor(private element: ElementRef) { }

    ngOnInit(): void {
        this.element.nativeElement.style.backgroundColor = 'red';
        
    }
}