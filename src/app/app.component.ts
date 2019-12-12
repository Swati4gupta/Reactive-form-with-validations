import { Component,OnInit } from '@angular/core';
import { AbstractControl,ValidatorFn,ReactiveFormsModule,FormGroup,Validators,FormArray,FormControl,FormBuilder} from '@angular/forms';
import { DataService } from './data.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
  form:FormGroup;
  msg:string;
  
constructor(private formBuilder:FormBuilder,private dataService:DataService){

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
      alert("form valid")
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
