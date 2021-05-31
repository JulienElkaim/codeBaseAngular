import {Pipe, PipeTransform} from '@angular/core';
import {KeyValue, KeyValuePipe} from "@angular/common";

@Pipe({
  name: 'groupArrayBy'
})
export class GroupArrayByPipe implements PipeTransform {

  constructor(private keyValuePipe: KeyValuePipe) {
  }

  transform<T>(array: Array<T>, key: string | ((obj: T) => string[]), noGroupLabel?: string): Array<KeyValue<string, T[]>> {
    if (!array || !key) {
      return [];
    }

    type GroupedItems = { [key: string]: Array<T> };

    let defaultKey: string = (noGroupLabel || 'No Group');
    let groupedItems: GroupedItems = array.reduce<GroupedItems>((acc: GroupedItems, elt: any) => {
      let asGroupNames: string[] = ((typeof key == 'function') ? key(elt) : [GroupArrayByPipe.stringify(elt[key]) || defaultKey]) || [defaultKey];
      asGroupNames.forEach(groupName => {
        acc[groupName] = acc[groupName] ? acc[groupName].concat([elt]) : [elt];
      });

      return acc;
    }, {});

    return this.keyValuePipe.transform(groupedItems, (a: KeyValue<string, T[]>, b: KeyValue<string, T[]>): number => {
      let alower: string = a.key.toLowerCase();
      let blower: string = b.key.toLowerCase();
      if(defaultKey.toLowerCase() == alower){return 1;}
      if(defaultKey.toLowerCase() == blower){return -1;}
      return alower > blower ? 1 : (blower > alower ? -1 : 0);
    });
  }

  private static stringify(elt: any) {
    return typeof elt === 'string' ? elt : JSON.stringify(elt);
  }
}
