import {Component, OnInit} from '@angular/core';
import {DocumentClassificationService} from './document-classification.service';
import {DocumentCalssification} from '../../models/document-calssification';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-document-classification',
  templateUrl: './document-classification.component.html',
  styleUrls: ['./document-classification.component.css', '../dashboard.component.css']
})
export class DocumentClassificationComponent implements OnInit {
  allDocumentClassifications: DocumentCalssification[];
  documentClassificationEditMode: boolean;
  documentClassificationForm: FormGroup;
  documentClassificationStatusFilter: string;

  constructor(private dcs: DocumentClassificationService, private fb: FormBuilder) {
    this.createDocumentClassificationForm();
  }

  ngOnInit() {
    this.getAllDocumentClassifications();
  }

  createDocumentClassificationForm() {
    this.documentClassificationForm = this.fb.group({
      id: '',
      classification: ['', Validators.required],
      subClassification: ['', Validators.required],
      docType: ['', Validators.required],
      docName: ['', Validators.required],
      active: false
    });
  }

  getAllDocumentClassifications(): void {
    this.allDocumentClassifications = this.dcs.getAllDocumentClassifications();
  }

  saveDocumentClassification(data): void {
    if (this.documentClassificationEditMode) {
      if (this.dcs.updateDocumentClassification(data)) {
        this.getAllDocumentClassifications();
        this.createDocumentClassificationForm();
        this.documentClassificationEditMode = false;
      }
    } else {
      // TODO: Uncomment below line
      // delete data["id"];
      if (this.dcs.createDocumentClassification(data)) {
        this.getAllDocumentClassifications();
        this.createDocumentClassificationForm();
      }
    }
  }

  readDocumentClassificationData(id): void {
    (<FormGroup>this.documentClassificationForm)
      .setValue(this.dcs.readDocumentClassificationData(id), {onlySelf: true});
    this.documentClassificationEditMode = true;
  }

  filterDocumentClassificationsByStatus(StatusFilter): void {
    this.documentClassificationStatusFilter = StatusFilter;
  }

  resetDocumentClassificationForm(): void {
    this.createDocumentClassificationForm();
    this.documentClassificationEditMode = false;
  }

  addDocumentClassification(): void {
    this.resetDocumentClassificationForm();
  }

}
