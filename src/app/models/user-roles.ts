export class UserRole {
  'roleId': number;
  'roleName': string;
  'active': boolean;
}

export class UserRoles {
  'userid': number;
  'userName': string;
  'roleVoList': UserRole[];
}
