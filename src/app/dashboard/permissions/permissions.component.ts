import {Component, OnInit} from '@angular/core';
import {PermissionService} from './permission.service';
import {Permission} from '../../models/permission';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css', '../dashboard.component.css']
})
export class PermissionsComponent implements OnInit {
  allPermissions: Permission[];
  permissionEditMode: boolean;
  permissionForm: FormGroup;
  permissionStatusFilter: string;

  constructor(private permissionService: PermissionService, private fb: FormBuilder) {
    this.createPermissionForm();
  }

  ngOnInit() {
    this.getAllPermissions();
  }

  createPermissionForm() {
    this.permissionForm = this.fb.group({
      id: '',
      name: ['', Validators.required],
      active: false,
      createdByTaskId: null
    });
  }

  getAllPermissions(): void {
    this.allPermissions = this.permissionService.getAllPermissions();
  }

  savePermission(data): void {
    // TODO: Uncomment below line
    // delete data["createdByTaskId"];

    if (this.permissionEditMode) {
      if (this.permissionService.updatePermission(data)) {
        this.getAllPermissions();
        this.createPermissionForm();
        this.permissionEditMode = false;
      }
    } else {
      // TODO: Uncomment below line
      // delete data["id"];
      if (this.permissionService.createPermission(data)) {
        this.getAllPermissions();
        this.createPermissionForm();
      }
    }
  }

  readPermissionData(id): void {
    (<FormGroup>this.permissionForm)
      .setValue(this.permissionService.readPermissionData(id), {onlySelf: true});
    this.permissionEditMode = true;
  }

  filterPermissionsByStatus(StatusFilter): void {
    console.log("filter value is "+StatusFilter );
    this.permissionStatusFilter = StatusFilter;
  }

  resetPermissionForm(): void {
    this.permissionForm.reset();
    this.permissionEditMode = false;
  }

  addPermission(): void {
    this.resetPermissionForm();
  }
}
