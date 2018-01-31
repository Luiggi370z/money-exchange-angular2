import { Component } from '@angular/core';

import { AppStateService, IInternalStateType } from '../core/app-state.service';
import { HeaderComponent } from './header';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private appState: AppStateService) {
  }

  public get state(): IInternalStateType {
    return this.appState.state;
  }
}
