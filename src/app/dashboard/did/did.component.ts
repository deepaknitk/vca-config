import {Component, OnInit} from '@angular/core';
import {DID} from '../../models/did';
import {DidService} from './did.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-did',
  templateUrl: './did.component.html',
  styleUrls: ['./did.component.css', '../dashboard.component.css']
})

export class DidComponent implements OnInit {
  allDidNumbers: DID[];
  didStatusFilter: string;
  didForm: FormGroup;
  didEditMode: boolean;
  selectedDidData: DID;

  constructor(private DidService: DidService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.createDidForm();
  }

  ngOnInit() {
    this.getAllDidNumbers();
  }

  getAllDidNumbers(): void {
    this.allDidNumbers = this.DidService.getAllDidNumbers();
  }

  readDialData(id): void {
    this.selectedDidData = this.DidService.readDialData(id);
    (<FormGroup>this.didForm)
      .setValue(this.selectedDidData, {onlySelf: true});
    this.didEditMode = true;
  }

  addNewDailData(): void {
    this.selectedDidData = new DID();
    (<FormGroup>this.didForm).reset();
    this.didEditMode = false;
  }

  filterDidByStatus(StatusFilter): void {
    this.didStatusFilter = StatusFilter;
  }

  createDidForm() {
    this.didForm = this.fb.group({
      id: '',
      directInwardNumber: ['', Validators.required],
      directInwardDialingType: ['', Validators.required],
      targetType: ['', Validators.required],
      forwardToNumber: ['', Validators.required],
      deviceType: ['', Validators.required],
      destinationDevice: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['', Validators.required],
      countryCode: '',
      countryShortCode: '',
      active: false,
      premium: false
    });
  }

  saveDid(data): void {
    if (this.didEditMode) {
      if (this.DidService.updateDial(data)) {
        this.createDidForm();
        this.didEditMode = false;
      }
    } else {
      // TODO: Uncomment below line
      // delete data["id"];
      if (this.DidService.createDial(data)) {
        this.createDidForm();
      }
    }
  }

  goToDidList(): void {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  resetDidForm(): void {
    this.createDidForm();
    this.didEditMode = false;
  }
}
