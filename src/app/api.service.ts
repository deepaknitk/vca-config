import {Injectable} from '@angular/core';

@Injectable()
export class ApiService {

  constructor() {
  }

  API_ROOT_URL = 'http://192.168.1.40:8084';

  LOGIN = '/vca-security/api/v1.0/jwt-auth/login';

  ROLE_LIST = '/vca-web/api/v1.0/ui/role/list';
  READ_ROLE = '/vca-web/api/v1.0/ui/role/read';
  CREATE_ROLE = '/vca-web/api/v1.0/ui/role/create';
  UPDATE_ROLE = '/vca-web/api/v1.0/ui/role/update';

  PERMISSION_LIST = '/vca-web/api/v1.0/ui/permission/list';
  READ_PERMISSION = '/vca-web/api/v1.0/ui/permission/read';
  UPDATE_PERMISSION = '/vca-web/api/v1.0/ui/permission/update';
  CREATE_PERMISSION = '/vca-web/api/v1.0/ui/permission/create';
  COMPOSITE_CREATE_PERMISSION = '/vca-web/api/v1.0/ui/permission/create-composite';

  CREATE_DIAL = '/vca-web/api/v1.0/ui/user/dail/create';
  UPDATE_DIAL = '/vca-web/api/v1.0/ui/user/dail/update';
  READ_DIAL = '/vca-web/api/v1.0/ui/user/dail/read';
  DIAL_LIST = '/vca-web/api/v1.0/ui/user/dail/list';

  DOCUMENT_CLASSIFICATION_LIST = '/vca-web//api/v1.0/ui/cfg-document-class/list';
  CREATE_DOCUMENT_CLASSIFICATION = '/vca-web//api/v1.0/ui/cfg-document-class/create';
  UPDATE_DOCUMENT_CLASSIFICATION = '/vca-web//api/v1.0/ui/cfg-document-class/update';
  READ_DOCUMENT_CLASSIFICATION = '';

  ROLE_PERMISSIONS_COMPOSITE_LIST = '/vca-web/api/v1.0/ui/role-has-permission/composite-list';
  ROLE_PERMISSIONS_COMPOSITE_LIST_BY_USERID = '/vca-web/api/v1.0/ui/role-has-permission/composite-list-by-userId';
  ROLE_PERMISSIONS_COMPOSITE_CREATE = '/vca-web/api/v1.0/ui/role-has-permission/composite-create';
  ROLE_PERMISSIONS_COMPOSITE_UPDATE = '/vca-web/api/v1.0/ui/role-has-permission/composite-update';

  USER_ROLES_COMPOSITE_LIST = "/vca-web/api/v1.0/ui/user-has-role/composite-list";
  USER_ROLES_COMPOSITE_LIST_BY_USERID = "/vca-web/api/v1.0/ui/user-has-role/composite-list-by-userId";
  USER_ROLES_COMPOSITE_CREATE = "/vca-web/api/v1.0/ui/user-has-role/composite-create";
  USER_ROLES_COMPOSITE_UPDATE = "/vca-web/api/v1.0/ui/user-has-role/composite-update";
}
