import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBettertHighlighter]'
})
export class BetterHighlighterDirective implements OnInit {
    @Input('appBettertHighlighter') color: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor : string = 'transparent';

    constructor(private elementRef: ElementRef,private renderer: Renderer2){ }

    ngOnInit(): void {
        // this.renderer.setStyle(this.elementRef.nativeElement,"background-color","transparent");
    }

    @HostListener("mouseleave")
    onMouseleave(event: Event){
        // this.renderer.setStyle(this.elementRef.nativeElement, "background-color","transparent");
        this.backgroundColor = 'transparent';
    }

    @HostListener('mouseover')
    onMouseOver(){
        // this.renderer.setStyle(this.elementRef.nativeElement, "background-color","blue");
        this.backgroundColor = this.color;
    }

}