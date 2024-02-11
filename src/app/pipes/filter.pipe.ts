import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, key: string) {
    if (value.length === 0 || !filterString) return value

    const filterArr = [];
    for (const item of value) {
      if (item[key].includes(filterString)) filterArr.push(item);
    }
    return filterArr;
  }
}
