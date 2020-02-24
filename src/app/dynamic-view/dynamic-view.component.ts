import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { ViewsService } from '../views.service';
import { View, ValidatorType } from '../types/view';
import { TdfData } from '../types/tdf-data';
import { DynamicViewDirective } from '../dynamic-view.directive';

@Component({
  selector: 'legal-dynamic-view',
  templateUrl: './dynamic-view.component.html',
  styleUrls: ['./dynamic-view.component.scss']
})
export class DynamicViewComponent implements OnInit {
  view: View;
  views: View[];
  formGroup: FormGroup;
  currentIndex: number = 0;
  @ViewChild(DynamicViewDirective, { static: true })
  private dynamicView: DynamicViewDirective;

  constructor(private viewsService: ViewsService, private formBuilder: FormBuilder, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.views = this.viewsService.getViews();
    this.formGroup = this.formBuilder.group(new TdfData());
    this.loadComponent(this.views[this.currentIndex]);
  }

  /**
   * Determines the current component to load
   *
   * @param currentView
   */
  private loadComponent(currentView: View): void {
    this.view = currentView;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.view.component);
    const viewContainerRef = this.dynamicView.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.form = this.formGroup;
    componentRef.instance.view = this.view;
    componentRef.instance.setResponses.subscribe((event) => {
      this.saveAndNext(event.form);
    });
  }

  /**
   * Validates and saves the form data to the form data service and navigates to the next page
   *
   * @param form The formGroup
   */
  private saveAndNext(form: FormGroup): void {
    if (!form) return;
    this.viewsService.tdfFormData = form.value;
    const control = form.controls[this.view.controlName];
    if (control && !control.valid) return;
    this.currentIndex++;
  }
}
