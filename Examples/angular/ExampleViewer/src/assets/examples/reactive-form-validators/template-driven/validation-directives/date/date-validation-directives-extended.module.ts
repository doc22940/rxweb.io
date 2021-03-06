import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { DateCompleteTemplateDrivenValidationDirectivesComponent } from './complete/date-complete.component';
import { DateConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/date-conditional-expression.component';
import { DateMessageTemplateDrivenValidationDirectivesComponent } from './message/date-message.component';
import { DateMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/date-message-key.component';
import { DateAddTemplateDrivenValidationDirectivesComponent } from './add/date-add.component';

@NgModule({
  declarations: [
	DateCompleteTemplateDrivenValidationDirectivesComponent,
	DateConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	DateMessageTemplateDrivenValidationDirectivesComponent,
	DateMessageKeyTemplateDrivenValidationDirectivesComponent,
	DateAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	DateCompleteTemplateDrivenValidationDirectivesComponent,
	DateConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	DateMessageTemplateDrivenValidationDirectivesComponent,
	DateMessageKeyTemplateDrivenValidationDirectivesComponent,
	DateAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	DateCompleteTemplateDrivenValidationDirectivesComponent,
	DateConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	DateMessageTemplateDrivenValidationDirectivesComponent,
	DateMessageKeyTemplateDrivenValidationDirectivesComponent,
	DateAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  DateTemplateDrivenValidationDirectivesExtendedModule { }
