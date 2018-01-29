import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'myKeys'})
export class KeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    let keys = [];
    for (let key in value) {
        if (value.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
  }
}
