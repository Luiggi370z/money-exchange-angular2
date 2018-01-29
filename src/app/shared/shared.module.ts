import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { KeysPipe } from './keys.pipe';
import { CurrencySymbolPipe } from './currencySymbol.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        KeysPipe,
        CurrencySymbolPipe,
    ],
    declarations: [ KeysPipe, CurrencySymbolPipe ],
    providers: [],
})
export class SharedModule { }
