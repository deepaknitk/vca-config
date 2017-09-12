import {Component, OnInit} from '@angular/core';
import {UserRoles, UserRole} from '../../models/user-roles';
import {UserRolesService} from './user-roles.service';
import {Role} from '../../models/role';
import {RoleService} from '../roles/role.service';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css', '../dashboard.component.css']
})
export class UserRolesComponent implements OnInit {
  allUserRoles: UserRoles[];
  allRoles: Role[];
  remainingRoles: UserRole[];
  userRoleEditMode: boolean;
  selectedUser: UserRoles;

  constructor(private userRolesService: UserRolesService
    , private roleService: RoleService, private appService: AppService) {
  }

  ngOnInit() {
    this.getAllUserRoles();
    this.getAllRoles();
  }

  getAllRoles(): void {
    this.allRoles = this.roleService.getAllRoles();
  }

  filterRoles(): void {
    this.remainingRoles = [];

    for (let i = 0; i < this.allRoles.length; i++) {
      const role = this.allRoles[i];
      this.remainingRoles.push({
        roleId: role.id,
        roleName: role.name,
        active: role.active
      });
    }

    if (this.selectedUser) {
      let remainingRoles = this.remainingRoles;
      this.selectedUser.roleVoList.map(function (pvl) {
        remainingRoles = remainingRoles.filter(function (rp) {
          return (rp.roleId !== pvl.roleId);
        });
      });
      this.remainingRoles = remainingRoles;
    }
  }

  getAllUserRoles(): void {
    this.allUserRoles = this.userRolesService.getAllUserRoles();
  }

  editUserRoles(userRole): void {
    this.selectedUser = this.appService.copyAngularObject(userRole);
    this.userRoleEditMode = true;
    this.filterRoles();
  }

  addRole(role): void {
    this.selectedUser.roleVoList.push(role);
    this.filterRoles();
  }

  removeRole(role): void {
    this.selectedUser.roleVoList = this.selectedUser.roleVoList.filter(function (item) {
      return (item.roleId !== role.roleId);
    });
    this.filterRoles();
  }

  resetUserRoleForm(): void {
    this.userRoleEditMode = false;
    this.selectedUser = new UserRoles();
  }

  saveUserRoles(userRole): void {
    if (this.userRolesService.saveUserRoles(userRole)) {
      this.getAllUserRoles();
      this.resetUserRoleForm();
    }
  }


}
