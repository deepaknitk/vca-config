import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'didFilter'
})
export class DidFilterPipe implements PipeTransform {

  transform(value: any, didStatusFilter?: any): any {
    let ActiveDidNumbers: boolean;
    switch (didStatusFilter) {
      case "ACTIVE":
        ActiveDidNumbers = true;
        break;
      case "NOT_ACTIVE":
        ActiveDidNumbers = false;
        break;
      default:
        return value;
    }
    return value.filter(function (did) {
      return ((did.active === ActiveDidNumbers) || (!ActiveDidNumbers && !did.active));
    });
  }

}
