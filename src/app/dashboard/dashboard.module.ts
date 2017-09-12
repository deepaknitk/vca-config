import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthGaurd} from '../auth-gaurd.service';

import {NavBarComponent} from './nav-bar/nav-bar.component';
import {RolesComponent} from './roles/roles.component';
import {DidComponent} from './did/did.component';
import {PermissionsComponent} from './permissions/permissions.component';
import {DashboardComponent} from './dashboard.component';
import {RolePermissionsComponent} from './role-permissions/role-permissions.component';
import {DocumentClassificationComponent} from './document-classification/document-classification.component';

import {PermissionFilterPipe} from './permissions/permission-filter.pipe';
import {RoleFilterPipe} from './roles/role-filter.pipe';

import {RoleService} from './roles/role.service';
import {PermissionService} from './permissions/permission.service';
import {DidService} from './did/did.service';
import {DocumentClassificationService} from './document-classification/document-classification.service';
import {DidFilterPipe} from './did/did-filter.pipe';
import {DocumentClassificationFilterPipe} from './document-classification/document-classification-filter.pipe';
import {RolePermissionsService} from './role-permissions/role-permissions.service';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { UserDidComponent } from './user-did/user-did.component';
import {UserRolesService} from './user-roles/user-roles.service';
import {UserDidService} from './user-did/user-did.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGaurd],
        children: [
          {
            path: '',
            redirectTo: 'roles',
            pathMatch: 'full'
          },
          {
            path: 'roles',
            component: RolesComponent,
          },
          {
            path: 'user-roles',
            component: UserRolesComponent
          },
          {
            path: 'permissions',
            component: PermissionsComponent
          },
          {
            path: 'role-permissions',
            component: RolePermissionsComponent
          },
          {
            path: 'did',
            component: DidComponent
          },
          {
            path: 'user-dids',
            component: UserDidComponent
          },
          {
            path: 'document-classification',
            component: DocumentClassificationComponent
          }
        ]
      }
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavBarComponent,
    RolesComponent,
    DidComponent,
    DidFilterPipe,
    PermissionsComponent,
    DashboardComponent,
    PermissionFilterPipe,
    RoleFilterPipe,
    RolePermissionsComponent,
    DocumentClassificationComponent,
    DocumentClassificationFilterPipe,
    UserRolesComponent,
    UserDidComponent
  ],
  providers: [RoleService, PermissionService, DidService, DocumentClassificationService
    , RolePermissionsService, UserRolesService, UserDidService],
  exports: [RouterModule]
})
export class DashboardModule {
}
