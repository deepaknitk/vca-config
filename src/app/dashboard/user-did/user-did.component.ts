import {Component, OnInit} from '@angular/core';
import {UserDids, UserDid} from '../../models/user-dids';
import {UserDidService} from './user-did.service';
import {DID} from '../../models/did';
import {DidService} from '../did/did.service';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-user-did',
  templateUrl: './user-did.component.html',
  styleUrls: ['./user-did.component.css', '../dashboard.component.css']
})

export class UserDidComponent implements OnInit {
  allUserDids: UserDids[];
  allDids: DID[];
  remainingDids: UserDid[];
  selectedUser: UserDids;

  constructor(private userDidsService: UserDidService
    , private didService: DidService, private appService: AppService) {
  }

  ngOnInit() {
    this.getAllUserDids();
    this.getAllDids();
  }

  getAllDids(): void {
    this.allDids = this.didService.getAllDidNumbers();
  }

  filterDids(): void {
    this.remainingDids = [];

    for (let i = 0; i < this.allDids.length; i++) {
      const did = this.allDids[i];
      this.remainingDids.push({
        directInwardNumberId: did.id,
        directInwardNumber: did.directInwardNumber,
        directInwardDialingType: did.directInwardDialingType,
        targetType: did.targetType,
        forwardToNumber: did.forwardToNumber,
        active: did.active
      });
    }

    if (this.selectedUser) {
      let remainingDids = this.remainingDids;
      this.selectedUser.userHasDIDVoList.map(function (pvl) {
        remainingDids = remainingDids.filter(function (rp) {
          return (rp.directInwardNumberId !== pvl.directInwardNumberId);
        });
      });
      this.remainingDids = remainingDids;
    }
  }

  getAllUserDids(): void {
    this.allUserDids = this.userDidsService.getAllUserDids();
  }

  editUserDids(userDid): void {
    this.selectedUser = this.appService.copyAngularObject(userDid);
    this.filterDids();
  }

  addDid(did): void {
    this.selectedUser.userHasDIDVoList.push(did);
    this.filterDids();
  }

  removeDid(did): void {
    this.selectedUser.userHasDIDVoList = this.selectedUser.userHasDIDVoList.filter(function (item) {
      return (item.directInwardNumberId !== did.directInwardNumberId);
    });
    this.filterDids();
  }

  saveUserDids(userDid): void {
    if (this.userDidsService.saveUserDids(userDid)) {
      this.getAllUserDids();
    }
  }

}
