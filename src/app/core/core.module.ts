import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './api.service';
import { AppStateService } from './app-state.service';

@NgModule({
    imports: [ HttpClientModule ],
    exports: [ ],
    declarations: [ ],
    providers: [
        ApiService,
        AppStateService
    ],
})
export class CoreModule { }
