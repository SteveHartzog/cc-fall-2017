import { inject } from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import { DialogService } from 'aurelia-dialog';
import { DataService } from '../../services/dataService';
import { DetailsDialog } from './detailsDialog';

@inject(DialogService, DataService)
export class Speakers {
  speakers;
  
  constructor(private dialogService: DialogService, private ds: DataService) {
  }

  async activate() {
    this.speakers = await this.ds.getSpeakers();
  }

  openSpeakerCard(speaker) {
    // Fix for Aurelia-Dialog issues with Anchors, https://github.com/aurelia/dialog/issues/283
    PLATFORM.moduleName('./detailsDialog');
    this.dialogService
      .open({ viewModel: DetailsDialog, model: speaker, overlayDismiss: true })
      .whenClosed(response => {
        if (!response.wasCancelled) {
          console.log('Dialog opened >>');
          console.log(response.output);
        } else {
          console.log('<< Dialog closed');
        }
      });
  }
}