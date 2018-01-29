import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({name: 'myCurrencySymbol'})
export class CurrencySymbolPipe extends CurrencyPipe implements
PipeTransform {
    transform(value: string): any {
    let currencyValue = super.transform(0, value, 'symbol-narrow', '1.0-2');
    return currencyValue.replace(/[0-9]/g, '');
    }
}