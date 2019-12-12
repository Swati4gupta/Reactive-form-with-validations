import { Component,OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup,Validators,FormArray,FormControl,FormBuilder} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
  form:FormGroup;
constructor(private formBuilder:FormBuilder){

}
ngOnInit(){
  this.form=this.formBuilder.group({
    name:['',Validators.required],
    email:['',Validators.required],
    address:this.formBuilder.array([])
  })

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
