
import { Component, Input } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { ApiService } from '../../core';

@Component({
    selector: 'me-converter',
    templateUrl: 'converter.component.html',
    styleUrls: [ './converter.component.css' ],
})

export class ConverterComponent {
    public calculatedValue;
    public inputValue;
    public mask: Array<string | RegExp>;

    @Input() public currencyFrom;
    @Input() public currencyTo;

    constructor(private apiService: ApiService) {
        this.mask = createNumberMask({
            prefix: '',
            allowDecimal: true,
            decimalLimit: 4,
        });
    }

     public calculate() {
        this.apiService.getRate(this.currencyFrom, this.currencyTo)
            .subscribe((result) => {
                const rate = result.rates[this.currencyTo];
                this.calculatedValue = parseFloat(this.inputValue) * rate;
            });
    }
}
