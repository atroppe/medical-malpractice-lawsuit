import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[legalDynamicView]'
})
export class DynamicViewDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
