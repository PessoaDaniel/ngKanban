import { Component } from '@angular/core';
import { GeneralService } from '../../services/genaral/general.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showNavigation = true

  constructor(private generalService: GeneralService) {}
  ngOnInit() {}
}
