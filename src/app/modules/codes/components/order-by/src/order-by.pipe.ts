import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByProperty'
})
export class OrderByPipe implements PipeTransform {

  transform<T>(array: Array<T>, propertyName: string, reverse: boolean = false, transformCallback?: (elt: T) => any): Array<T> {
    if(!array){ return array;}

    array.sort((a: any, b: any) => {
      let first: any = a[propertyName];
      let second: any = b[propertyName];

      if(typeof first == 'string'){
        first = (first as string).toLocaleLowerCase();
      }
      if(typeof first == 'string'){
        second = (second as string).toLocaleLowerCase();
      }

      if(transformCallback){
        first = transformCallback(first);
        second = transformCallback(second);
      }


      if(first < second || !first){
        return reverse? 1: -1;
      } else if (first > second || !second) {
        return reverse ? -1 : 1;
      } else{
        return 0;
      }
    });

    return array;
  }

}
