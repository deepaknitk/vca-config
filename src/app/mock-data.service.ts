import {Injectable} from '@angular/core';

import {Role} from './models/role';

@Injectable()
export class MockDataService {

  constructor() {
  }

  ROLE_LIST = {
    'status': 'success',
    'list': [
      {
        'id': 1,
        'name': 'Administrators',
        'active': false,
        'createdByTaskId': null
      },
      {
        'id': 2,
        'name': 'admin',
        'active': false,
        'createdByTaskId': null
      },
      {
        'id': 3,
        'name': 'Onshore Technical Manager ',
        'active': false,
        'createdByTaskId': null
      },
      {
        'id': 19,
        'name': 'Motor-Manager',
        'active': false,
        'createdByTaskId': null
      }
    ]
  };

  PERMSSION_LIST = {
    'status': 'success',
    'list': [
      {
        'id': 1,
        'name': 'listen_audio',
        'active': true,
        'createdByTaskId': 0
      },
      {
        'id': 2,
        'name': 'dms_view',
        'active': false,
        'createdByTaskId': 0
      },
      {
        'id': 25,
        'name': 'listen_audio2141',
        'active': true,
        'createdByTaskId': null
      }
    ]
  };

  DOCUMENT_CLASSIFICATION_LIST = {
    'status': 'success',
    'list': [
      {
        'id': 1,
        'classification': 'Company',
        'subClassification': 'BoD Related Documents',
        'docType': 'BoD Resolutions',
        'docName': 'BOD_RESOLUTIONS',
        'active': null
      },
      {
        'id': 2,
        'classification': 'Company',
        'subClassification': 'BoD Related Documents',
        'docType': 'Meeting Minutes',
        'docName': 'MEETING_MINUTES',
        'active': null
      },
      {
        'id': 3,
        'classification': 'Company',
        'subClassification': 'BoD Related Documents',
        'docType': 'Other Documents',
        'docName': 'OTHER_DOCUMENTS',
        'active': null
      }
    ]
  };

  DID_LIST = {
    'status': 'success',
    'list': [
      {
        'id': 1,
        'directInwardNumber': '1',
        'directInwardDialingType': '1',
        'country': 'j111111',
        'state': '',
        'city': '',
        'zip': '',
        'countryCode': '',
        'countryShortCode': '',
        'premium': false,
        'targetType': '',
        'forwardToNumber': '',
        'deviceType': '',
        'destinationDevice': '',
        'active': null
      },
      {
        'id': 2,
        'directInwardNumber': '1',
        'directInwardDialingType': '1',
        'country': 'India',
        'state': 'Karnataka',
        'city': 'Bangalore',
        'zip': '560083',
        'countryCode': 'In',
        'countryShortCode': 'IN12',
        'premium': true,
        'targetType': 'w',
        'forwardToNumber': '1231313',
        'deviceType': '',
        'destinationDevice': '',
        'active': true
      },
      {
        'id': 3,
        'directInwardNumber': '2',
        'directInwardDialingType': '2',
        'country': 'India',
        'state': 'Tamil naudu',
        'city': 'Chennai',
        'zip': '560068',
        'countryCode': 'In',
        'countryShortCode': 'IN12',
        'premium': false,
        'targetType': 'x',
        'forwardToNumber': '1231',
        'deviceType': '',
        'destinationDevice': '',
        'active': true
      }
    ]
  };

  ROLE_PERMISSIONS = {
    'status': 'success',
    'object': [
      {
        'roleId': 3,
        'roleName': 'Onshore Technical Manager ',
        'permissionVoList': [
          {
            'id': 11,
            'name': 'new_vendor',
            'active': true,
            'createdByTaskId': null
          }
        ]
      },
      {
        'roleId': 4,
        'roleName': 'Business Analyst',
        'permissionVoList': [
          {
            'id': 8,
            'name': 'new_contact_point',
            'active': false,
            'createdByTaskId': null
          },
          {
            'id': 11,
            'name': 'new_vendor',
            'active': false,
            'createdByTaskId': null
          }
        ]
      },
      {
        'roleId': 8,
        'roleName': 'QA',
        'permissionVoList': [
          {
            'id': 1,
            'name': 'listen_audio',
            'active': true,
            'createdByTaskId': 0
          },
          {
            'id': 2,
            'name': 'dms_view',
            'active': false,
            'createdByTaskId': 0
          },
          {
            'id': 25,
            'name': 'listen_audio2141',
            'active': true,
            'createdByTaskId': null
          }
        ]
      }
    ]
  };

  USER_ROLES = {
    'status': 'success',
    'list': [
      {
        'userid': 3440511,
        'userName': '3440511',
        'roleVoList': [
          {
            'roleId': 5,
            'roleName': 'Developer',
            'active': null
          },
          {
            'roleId': 11,
            'roleName': 'Project Lead',
            'active': null
          }
        ]
      },
      {
        'userid': 3440495,
        'userName': '3440495',
        'roleVoList': [
          {
            'roleId': 5,
            'roleName': 'Developer',
            'active': null
          },
          {
            'roleId': 73,
            'roleName': 'Kiosk-admin',
            'active': null
          }
        ]
      },
      {
        'userid': 3440424,
        'userName': '3440424',
        'roleVoList': [
          {
            'roleId': 4,
            'roleName': 'Business Analyst',
            'active': null
          },
          {
            'roleId': 7,
            'roleName': 'Designer',
            'active': null
          }
        ]
      },
      {
        'userid': 3440524,
        'userName': '3440524',
        'roleVoList': [
          {
            'roleId': 10,
            'roleName': 'Content Writer',
            'active': null
          },
          {
            'roleId': 5,
            'roleName': 'Developer',
            'active': null
          }
        ]
      }
    ]
  };

  USER_DIDS = {
    'status': 'success',
    'list': [
      {
        'userHasDIDId': 1,
        'userId': 100165,
        'userName': 'Satyendra Singh',
        'userHasDIDVoList': [
          {
            'directInwardNumberId': 8,
            'directInwardNumber': '1',
            'directInwardDialingType': '1',
            'targetType': '',
            'forwardToNumber': '1231313',
            'active': null
          }
        ]
      },
      {
        'userHasDIDId': 3,
        'userId': 100165,
        'userName': 'Satyendra Singh',
        'userHasDIDVoList': [
          {
            'directInwardNumberId': 7,
            'directInwardNumber': '1365',
            'directInwardDialingType': '1',
            'targetType': '',
            'forwardToNumber': '',
            'active': null
          }
        ]
      }
    ]
  };

}
