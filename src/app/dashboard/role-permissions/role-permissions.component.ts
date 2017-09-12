import {Component, OnInit} from '@angular/core';
import {RolePermissions} from '../../models/role-permissions';
import {RolePermissionsService} from './role-permissions.service';
import {Permission} from '../../models/permission';
import {PermissionService} from '../permissions/permission.service';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-role-permissions',
  templateUrl: './role-permissions.component.html',
  styleUrls: ['./role-permissions.component.css', '../dashboard.component.css']
})
export class RolePermissionsComponent implements OnInit {
  allRolePermissions: RolePermissions[];
  allPermissions: Permission[];
  remainingPermissions: Permission[];
  rolePermissionEditMode: boolean;
  selectedRole: RolePermissions;

  constructor(private rolePermissionsService: RolePermissionsService
    , private pemissionService: PermissionService, private appService: AppService) {
  }

  ngOnInit() {
    this.getAllRolePermissions();
    this.getAllPermissions();
  }

  getAllPermissions(): void {
    this.allPermissions = this.pemissionService.getAllPermissions();
  }

  filterPermissions(): void {
    this.remainingPermissions = this.allPermissions;
    if (this.selectedRole) {
      let remainingPermissions = this.remainingPermissions;
      this.selectedRole.permissionVoList.map(function (pvl) {
        remainingPermissions = remainingPermissions.filter(function (rp) {
          return (rp.id !== pvl.id);
        });
      });
      this.remainingPermissions = remainingPermissions;
    }
  }

  getAllRolePermissions(): void {
    this.allRolePermissions = this.rolePermissionsService.getAllRolePermissions();
  }

  editRolePermissions(rolePermission): void {
    this.selectedRole = this.appService.copyAngularObject(rolePermission);
    this.rolePermissionEditMode = true;
    this.filterPermissions();
  }

  addPermission(permission): void {
    this.selectedRole.permissionVoList.push(permission);
    this.filterPermissions();
  }

  removePermission(permission): void {
    this.selectedRole.permissionVoList = this.selectedRole.permissionVoList.filter(function (item) {
      return (item.id !== permission.id);
    });
    this.filterPermissions();
  }

  resetRolePermissionForm(): void {
    this.rolePermissionEditMode = false;
    this.selectedRole = new RolePermissions();
  }

  saveRolePermissions(rolePermission): void {
    if (this.rolePermissionsService.saveRolePermissions(rolePermission)) {
      this.getAllRolePermissions();
      this.resetRolePermissionForm();
    }
  }

}
