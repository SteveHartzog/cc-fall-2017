import { inject } from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import { DialogService } from 'aurelia-dialog';
import { DataService } from '../../services/dataService';
import { EditDialog } from './editDialog';

@inject(DialogService, DataService)
export class Sessions {    
  filter;
  public sessions;
  
  constructor(private dialogService: DialogService, private ds: DataService) {
  }
  
  async activate() {
    this.sessions = await this.ds.getSessions();
  }

  //#region Slots
  get slot1() {
    return this.sessions.filter(s => s.timeSlot === "1").sort(this.sortByWebOrder);
  }

  get slot2() {
    return this.sessions.filter(s => s.timeSlot === "2").sort(this.sortByWebOrder);
  }

  get slot3() {
    return this.sessions.filter(s => s.timeSlot === "3").sort(this.sortByWebOrder);
  }

  get slot4() {
    return this.sessions.filter(s => s.timeSlot === "4").sort(this.sortByWebOrder);
  }

  get slot5() {
    return this.sessions.filter(s => s.timeSlot === "5").sort(this.sortByWebOrder);
  }

  sortByWebOrder(a,b) {
    let webOrder = ['3054', '3058', '3062', '3026', '3028'];
    var compA = webOrder.indexOf(a.room);
    var compB = webOrder.indexOf(b.room);
    return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
  }
  //#endregion

  edit(session) {
    // Fix for Aurelia-Dialog issues with Anchors, https://github.com/aurelia/dialog/issues/283
    PLATFORM.moduleName('./editDialog');

    // // copy data for modification
    let model = { ...session };

    this.dialogService
      .open({ viewModel: EditDialog, model, overlayDismiss: true })
      .whenClosed(response => {
        if (!response.wasCancelled) {
          session.topic = model.topic;
          session.description = model.description;
          session.speaker = model.speaker;
          session.room = model.room;
        }
      });
  }
}