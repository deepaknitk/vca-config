export class UserDid {
  "directInwardNumberId": number;
  "directInwardNumber": string;
  "directInwardDialingType": string;
  "targetType": string;
  "forwardToNumber": string;
  "active": boolean;
}

export class UserDids {
  "userHasDIDId": number;
  "userId": number;
  "userName": string;
  "userHasDIDVoList": UserDid[];
}
