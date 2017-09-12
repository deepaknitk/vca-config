import {Component, OnInit} from '@angular/core';
import {RoleService} from './role.service';
import {Role} from '../../models/role';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css', '../dashboard.component.css']
})
export class RolesComponent implements OnInit {
  allRoles: Role[];
  roleEditMode: boolean;
  roleForm: FormGroup;
  roleStatusFilter: string;

  constructor(private roleService: RoleService, private fb: FormBuilder) {
    this.createRoleForm();
  }

  ngOnInit() {
    this.getAllRoles();
  }

  createRoleForm() {
    this.roleForm = this.fb.group({
      id: '',
      name: ['', Validators.required],
      active: false,
      createdByTaskId: null
    });
  }

  getAllRoles(): void {
    this.allRoles = this.roleService.getAllRoles();
  }




  // This function get call when user add new role from dashboard ... data variable contain role object
  saveRole(data): void {
    // console.log("data of roleform value "+ JSON.stringify(data));
    // TODO: Uncomment below line
    // delete data["createdByTaskId"];

    if (this.roleEditMode) {
      console.log("role edit moel");
      if (this.roleService.updateRole(data)) {
        this.getAllRoles();
        this.createRoleForm();
        this.roleEditMode = false;
      }
    } else {
      // TODO: Uncomment below line
      // delete data["id"];
      if (this.roleService.createRole(data)) {
        this.getAllRoles();
        this.createRoleForm();
      }
    }
  }

  readRoleData(id): void {
    (<FormGroup>this.roleForm)
      .setValue(this.roleService.readRoleData(id), {onlySelf: true});
    this.roleEditMode = true;
  }

  filterRolesByStatus(StatusFilter): void {
    this.roleStatusFilter = StatusFilter;
  }

  resetRoleForm(): void {
    this.roleForm.reset();
    this.roleEditMode = false;
  }

  addRole(): void {
    this.resetRoleForm();
  }
}
