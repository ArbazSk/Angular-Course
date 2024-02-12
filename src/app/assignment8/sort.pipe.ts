import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "sort"
})
export class SortPipe implements PipeTransform {
    transform(value: any, key: string) {
        if (Array.isArray(value) && value.length > 0) {
            return value.sort((a, b) => a[key].localeCompare(b[key]));
        }
    }
}