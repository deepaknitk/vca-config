import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'documentClassificationFilter'
})
export class DocumentClassificationFilterPipe implements PipeTransform {

  transform(value: any, documentClassificationStatusFilter?: any): any {
    let ActiveDocumentClassifications: boolean;
    switch (documentClassificationStatusFilter) {
      case 'ACTIVE':
        ActiveDocumentClassifications = true;
        break;
      case 'NOT_ACTIVE':
        ActiveDocumentClassifications = false;
        break;
      default:
        return value;
    }
    return value.filter(function (documentClassification) {
      return ((documentClassification.active === ActiveDocumentClassifications)
        || (!ActiveDocumentClassifications && !documentClassification.active));
    });
  }

}
