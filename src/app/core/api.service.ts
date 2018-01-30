import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { Rates } from '../shared';

// Using Public backend:
const endpointUrl = 'http://api.fixer.io/latest';

// Using Local Backend:
// const endpointUrl = 'http://localhost:52479/api/rates/latest';

@Injectable()
export class ApiService {

    private static getAllRatesRequestUrl(currency: string): string {
        return `${endpointUrl}?base=${currency}`;
    }

    private static getRateRequestUrl(currencyFrom: string, currencyTo: string): string {
        return `${endpointUrl}?base=${currencyFrom}&symbols=${currencyTo}`;
    }

    constructor(private httpClient: HttpClient) { }

    public getAllRates(currency: string): Observable<Rates> {
        return this.httpClient
            .get(ApiService.getAllRatesRequestUrl(currency))
            .catch(this.catchBadResponse);
    }

    public getRate(currencyFrom: string, currencyTo: string): Observable<Rates> {
        return this.httpClient
            .get(ApiService.getRateRequestUrl(currencyFrom, currencyTo))
            .catch(this.catchBadResponse);
    }

    private catchBadResponse(err: any, source: Observable<any>) {
        // log and handle the exception
        console.error('There was an error fetching data from provider.', err)
        return new Observable<Rates>();
    }
}
