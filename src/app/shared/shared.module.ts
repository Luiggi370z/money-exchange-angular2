import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { KeysPipe } from './keys.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        KeysPipe
    ],
    declarations: [ KeysPipe ],
    providers: [],
})
export class SharedModule { }
