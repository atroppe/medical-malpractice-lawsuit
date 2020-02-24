import { EventEmitter } from '@angular/core';
import { View } from './view';
import { FormGroup } from '@angular/forms';

/**
 * Each dynamic view must implement this type
 */
export interface DynamicView {
  view: View;
  form: FormGroup;
  setResponses: EventEmitter<any>;
}
