import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';
import { GeneralService } from '../shared/services/genaral/general.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {
  
  activiePageName:string = '';
  activePageIcon: string =  '';

  constructor(
    private authService: AuthService,
    private genaralService: GeneralService
    ) {}

  ngOnInit() {
    this.genaralService.actvePageBehavior.next('');
    this.genaralService.actvePageIconBehavior.next('');
    this.genaralService.actvePageBehavior.subscribe( (pageName:string) => {
      this.activiePageName = pageName;
    });
    this.genaralService.actvePageIconBehavior.subscribe((iconName:string) => {
      this.activePageIcon = iconName
    });
    this.authService.showLoginSubject.next(true);
  }
}
