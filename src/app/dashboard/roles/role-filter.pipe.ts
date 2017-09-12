import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleFilter'
})
export class RoleFilterPipe implements PipeTransform {

  transform(value: any, roleStatusFilter?: any): any {
    let ActiveRoles: boolean;
    switch (roleStatusFilter) {
      case "ACTIVE":
        ActiveRoles = true;
        break;
      case "NOT_ACTIVE":
        ActiveRoles = false;
        break;
      default:
        return value;
    }
    return value.filter(function (role) {
      return ((role.active === ActiveRoles) || (!ActiveRoles && !role.active));
    });
  }

}
