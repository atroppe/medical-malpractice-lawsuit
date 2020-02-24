import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'legal-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent {
  @Input() control: AbstractControl;

  constructor() {}

  /**
   * Gets the error message attached to the control (for example from the validator)
   */
  get messageError(): string | void {
    const errors = this.control.errors || {};
    if (errors.message) return errors.message;
  }

  /**
   * Determines if a form control has an error and should show the error
   */
  hasError(): boolean {
    if (!this.control.value && !this.control.dirty && !this.control.touched) return false;
    const errors = this.control.errors || {};
    return Object.keys(errors).length > 0 && (this.control.dirty || this.control.touched);
  }

  /**
   * Determines if the control has an error
   */
  hasErrors(key): boolean {
    if (!this.hasError()) return false;
    return this.control.errors[key] || false;
  }
}
