import {Pipe, PipeTransform} from '@angular/core';
import * as _ from '@types/lodash';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {

  /**
   * Capitalize the specified text. For example:
   * - "fred"     => "Fred"
   * - "FRED"     => "Fred"
   * - "fred-joe" => "Fred-Joe"
   * @param {string} value
   * @returns {string}
   */
  transform(value: string) : string {
    return value.split('-').map(_.capitalize).join('-');
  }

}
