import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { GreaterThanCompleteValidatorComponent } from './complete/greater-than-complete.component';
import { GreaterThanFieldNameValidatorComponent } from './fieldName/greater-than-field-name.component';
import { GreaterThanConditionalExpressionValidatorComponent } from './conditionalExpression/greater-than-conditional-expression.component';
import { GreaterThanMessageValidatorComponent } from './message/greater-than-message.component';
import { GreaterThanValueValidatorComponent } from './value/greater-than-value.component';
import { GreaterThanMessageKeyValidatorComponent } from './messageKey/greater-than-message-key.component';
import { GreaterThanDynamicValidatorComponent } from './dynamic/greater-than-dynamic.component';
import { GreaterThanAddValidatorComponent } from './add/greater-than-add.component';

@NgModule({
  declarations: [
	GreaterThanCompleteValidatorComponent,
	GreaterThanFieldNameValidatorComponent,
	GreaterThanConditionalExpressionValidatorComponent,
	GreaterThanMessageValidatorComponent,
	GreaterThanValueValidatorComponent,
	GreaterThanMessageKeyValidatorComponent,
	GreaterThanDynamicValidatorComponent,
	GreaterThanAddValidatorComponent,
  ],
entryComponents: [
	GreaterThanCompleteValidatorComponent,
	GreaterThanFieldNameValidatorComponent,
	GreaterThanConditionalExpressionValidatorComponent,
	GreaterThanMessageValidatorComponent,
	GreaterThanValueValidatorComponent,
	GreaterThanMessageKeyValidatorComponent,
	GreaterThanDynamicValidatorComponent,
	GreaterThanAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	GreaterThanCompleteValidatorComponent,
	GreaterThanFieldNameValidatorComponent,
	GreaterThanConditionalExpressionValidatorComponent,
	GreaterThanMessageValidatorComponent,
	GreaterThanValueValidatorComponent,
	GreaterThanMessageKeyValidatorComponent,
	GreaterThanDynamicValidatorComponent,
	GreaterThanAddValidatorComponent,
  ],

})
export class  GreaterThanValidatorsExtendedModule { }
