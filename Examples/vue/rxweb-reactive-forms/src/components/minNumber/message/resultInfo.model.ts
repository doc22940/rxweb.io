import {  minNumber, } from   "@rxweb/reactive-forms"   

export class ResultInfo {

	@minNumber({value:35  ,message:'Number should not be less than 35' }) 
	science: number;
	
	
}
