import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    return value.sort((n1, n2) => {
      if (n1[propName] > n2[propName]) {
        return 1;
      } else if (n1[propName] < n2[propName]) {
        return -1;
      }
      return 0;
    });
  }
}
