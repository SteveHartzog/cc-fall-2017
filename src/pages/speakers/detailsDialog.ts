import { inject } from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@inject(DialogController)
export class DetailsDialog {
  speaker;

  constructor(private controller: DialogController) {
  }
  
  activate(speaker) {
    this.speaker = speaker;
  }
}