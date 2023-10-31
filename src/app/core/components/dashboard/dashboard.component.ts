import { Component } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/genaral/general.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    
  constructor (private generalService: GeneralService) {}

  ngOnInit() {
      this.generalService.actvePageBehavior.next('Dashboard');
      this.generalService.actvePageIconBehavior.next('bi bi-speedometer2');
  }
}
