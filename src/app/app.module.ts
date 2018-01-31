import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'environments/environment';
import { ROUTES } from './app.routes';

import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { IInternalStateType } from './core/app-state.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { HeaderComponent } from './home/header';
import { ConverterComponent } from './home/converter';
import { HistoricComponent } from './home/historic';
import { FooterComponent } from './home/footer';

import { CoreModule } from './core';
import { SharedModule } from './shared';

import { TextMaskModule } from 'angular2-text-mask';

import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS
];

type StoreType = {
  state: IInternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ConverterComponent,
    HistoricComponent,
    FooterComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
    CoreModule,
    SharedModule,
    TextMaskModule,
  ],

  providers: [
    environment.ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {}
