import {
  Component,
  OnInit
} from '@angular/core';

import { AppStateService, IInternalStateType } from '../core/app-state.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';
import { HeaderComponent } from './header';

@Component({
  selector: 'home',
  providers: [
    Title,
  ],
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private appState: AppStateService) {
  }

  public get state(): IInternalStateType {
    return this.appState.state;
  }

  ngOnInit() {
  }
}
