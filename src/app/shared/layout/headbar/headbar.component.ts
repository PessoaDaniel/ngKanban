import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../../services/genaral/general.service';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.scss']
})
export class HeadbarComponent {

  activePageName = '';

  constructor(private generalService: GeneralService) {

  }
  ngOnInit() {
      this.generalService.actvePageBehavior.subscribe(activeModuleName => {
        this.activePageName = activeModuleName;
      });
  } 

}
