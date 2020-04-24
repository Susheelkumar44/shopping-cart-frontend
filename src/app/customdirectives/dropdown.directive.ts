import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  /*class- binding to class property of the element where the directives is placed on.
  Class is here simply array of classes. We need to specify which class explicitly. i.e., class open
  so we can specify as class.open*/
  // @HostBinding('class.open') isOpen =false;
  // @HostListener('click') toggleOpen(){
  //   this.isOpen = !this.isOpen;
  // }

  /* Dropdown can also be closed by a click anywhere outside 
  (which also means that a click on one dropdown closes any other one, btw.), 
  (placing the listener not on the dropdown, but on the document): */
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
   
  constructor(private elRef: ElementRef) { }

}
