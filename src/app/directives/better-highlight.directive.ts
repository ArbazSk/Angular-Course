import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBettertHighlighter]'
})
export class BetterHighlighterDirective implements OnInit {
    constructor(private elementRef: ElementRef,private renderer: Renderer2){ }

    ngOnInit(): void {
        this.renderer.setStyle(this.elementRef.nativeElement,"background-color","transparent");
    }

    @HostListener("mouseleave")
    onMouseleave(event: Event){
        this.renderer.setStyle(this.elementRef.nativeElement, "background-color","transparent");
    }

    @HostListener('mouseover')
    onMouseOver(){
        this.renderer.setStyle(this.elementRef.nativeElement, "background-color","blue");
    }

}