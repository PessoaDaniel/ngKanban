import { Component } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/genaral/general.service';

@Component({
  selector: 'app-personal-boards',
  templateUrl: './personal-boards.component.html',
  styleUrls: ['./personal-boards.component.scss']
})
export class PersonalBoardsComponent {
  
  constructor(private generaService: GeneralService){}

  ngOnInit(){
    this.generaService.actvePageBehavior.next('Meus quadros');
    this.generaService.actvePageIconBehavior.next('bi bi-kanban');
  }
}
