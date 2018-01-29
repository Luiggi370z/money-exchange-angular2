import { Injectable } from '@angular/core';

// IMPORTANT: Because of the future expansion,
// we can make the currency (from - to) and the refresh interval configurable.
export interface IInternalStateType {
  currencyFrom: string;
  currencyTo: string;
  refreshInterval: number;
};

// IMPORTANT: This can be done using Redux for Angular
@Injectable()
export class AppStateService {

  // Initial/default state.
  public _state: IInternalStateType = {
    currencyFrom: 'USD',
    currencyTo: 'EUR',
    refreshInterval: 10000,
  };

  public get state(): IInternalStateType {
    return this._state = this._clone(this._state);
  }

  public set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  public get(prop?: any) {
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  public set(prop: string, value: any) {
    return this._state[prop] = value;
  }

  private _clone(object: IInternalStateType) {
    return JSON.parse(JSON.stringify( object ));
  }
}
