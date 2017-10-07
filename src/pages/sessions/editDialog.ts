import { inject } from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';
import { DataService } from '../../services/dataService';

@inject(DialogController, DataService)
export class EditDialog {
  session;
  speakers;

  constructor(private controller: DialogController, private data: DataService) {
  }
  
  async activate(session) {
    this.session = session;
    this.speakers = await this.data.getSpeakers();
  }

  speakerChange(event) {
    this.session.speaker = this.speakers[this.speakers.findIndex(s => s.id == event.srcElement.value)];
  }
}