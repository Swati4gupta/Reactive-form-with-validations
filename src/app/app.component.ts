import { Component,OnInit,ViewChildren,AfterViewInit,ChangeDetectorRef } from '@angular/core';
import { AbstractControl,ValidatorFn,ReactiveFormsModule,FormGroup,Validators,FormArray,FormControl,FormBuilder} from '@angular/forms';
import { DataService } from './data.service';
import { SibilingComponent } from './sibiling/sibiling.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit,AfterViewInit{
  form:FormGroup;
  msg:string;
  childname:string;
  sibilingName:string;
  @ViewChildren(SibilingComponent) child;
constructor(private formBuilder:FormBuilder,private dataService:DataService,private cd:ChangeDetectorRef){

}
ngOnInit(){
  this.form=this.formBuilder.group({
    name:['',Validators.required],
    email:['',[Validators.email,Validators.required]],
    age:['',[Validators.required,this.ageRangeValidator(10, 20)]],
    address:this.formBuilder.array([])
  })

   this.dataService.currentMessage.subscribe(msg=>this.msg=msg);
  
}

ngAfterViewInit(){
  this.sibilingName=this.child.sibiling;
   this.cd.detectChanges();
}

receiveMessage(e){
  this.childname=e;
}

changeMsg(){
    this.dataService.changeMessage('Hello Swati : Called from Parent')
  }

ageRangeValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
            return { 'ageRange': true };
        }
        return null;
    };
}
  addAddressFields()
  {
    const addressForm=this.form.get('address') as FormArray;
    addressForm.push(this.formBuilder.group({
      addressLine1:[''],
      addressLine2:[''] 
      })
    )
  }

  removeAddressFields(){
const addressForm = this.form.get('address') as FormArray;
addressForm.removeAt(addressForm.length-1);
  }

  submitForm(){
    if(this.form.valid){
     console.log(this.form.value)
    }else{
     this.validateAllFields(this.form);
    }
  }

  validateAllFields(form:FormGroup){
     Object.keys(form.controls).forEach(field=>{
       const control=form.get(field);
        if(control instanceof FormControl){
          control.markAsDirty({onlySelf:true});
        }else if(control instanceof FormGroup){
          this.validateAllFields(control);
        }
      })
  }

  displayFieldCss(field){
    
    return {
      'has-error':this.isFieldValid(field),
      'has-feedback':this.isFieldValid(field)
    }
  }

  isFieldValid(field){
    return this.form.get(field).dirty && this.form.get(field).invalid;
  }


  
}
