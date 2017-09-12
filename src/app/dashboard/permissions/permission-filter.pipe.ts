import { Pipe, PipeTransform } from '@angular/core';
import {Permission} from '../../models/permission';

@Pipe({
  name: 'permissionFilter'
})
export class PermissionFilterPipe implements PipeTransform {

   transform(value: any, permissionStatusFilter?: any): any {
    let ActivePermissions: boolean;
    switch (permissionStatusFilter) {
      case "ACTIVE":
        ActivePermissions = true;
        break;
      case "NOT_ACTIVE":
        ActivePermissions = false;
        break;
      default:
        return value;
    }
    return value.filter(function (permission) {
      return ((permission.active === ActivePermissions) || (!ActivePermissions && !permission.active));
    });
  }

}

