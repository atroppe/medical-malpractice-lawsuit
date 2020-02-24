import { Type } from '@angular/core';
import { DynamicView } from './dynamic-view';

export class View {
  component: Type<DynamicView>;
  content: string;
  images: string[];
  controlName: string;
  validatorType?: ValidatorType;
  errorMsgs? : string[];
  values?: string[];

  constructor(
    component: Type<DynamicView>,
    content: string,
    images: string[],
    controlName: string,
    validatorType?: ValidatorType,
    errorMsgs?: string[],
    values?: string[]
  ) {
    this.component = component;
    this.content = content;
    this.images = images;
    this.controlName = controlName;
    if (validatorType) this.validatorType = validatorType;
    if (errorMsgs) this.errorMsgs = errorMsgs;
    if (values) this.values = values;
  }
}

export enum ValidatorType {
  Required = 'Required',
  No = 'No',
  Yes = 'Yes',
  None = 'None'
}
