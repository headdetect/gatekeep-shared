import {Pipe, PipeTransform} from '@angular/core';

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
    return value.split('-').map(block => block.charAt(0).toUpperCase() + block.slice(1)).join('-');
  }

}
