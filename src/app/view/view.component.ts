import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DynamicView } from 'src/app/types/dynamic-view';
import { FormGroup } from '@angular/forms';
import { View } from '../types/view';

@Component({
  selector: 'legal-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements DynamicView, OnInit {
  controlName = '';
  @Input() view: View;
  @Input() form: FormGroup;
  @Output() setResponses: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.controlName = this.view.controlName;
  }

  /**
   * Emits the form when answer is submitted
   *
   * @param form The form group
   */
  onSetResponses(form: FormGroup): void {
    setTimeout(() => {
      this.setResponses.emit({ form });
    }, 10);
  }
}
