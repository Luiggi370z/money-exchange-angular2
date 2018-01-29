import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ApiService, AppStateService } from '../../core';
import { Subscription } from 'rxjs/Subscription';


@Component({
    selector: 'me-historic',
    templateUrl: 'historic.component.html'
})

export class HistoricComponent implements OnInit {
    public rates: {};
    protected localState = {
        refresher: null,
    };

    constructor(
        private appState: AppStateService,
        private apiService: ApiService) {
     }

    ngOnInit() {
        this.localState.refresher = Observable
            .timer(0, this.appState.get('refreshInterval'))
            .flatMap((t) => this.apiService.getAllRates(this.appState.get('currencyFrom')))
            .subscribe((result) => this.rates = result.rates);
    }

    OnDestroy() {
        this.localState.refresher.unsubscribe();
    }
}