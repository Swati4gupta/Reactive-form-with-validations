import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  form:FormGroup;
  constructor(private formbuilder:FormBuilder){

  }
  ngOnInit(){
   this.form= this.formbuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]]
    })
  }

  isFieldValid(field){
    return this.form.get(field).dirty && this.form.get(field).invalid;
  }
  displayFieldCss(field){
    
    return {
      'has-error':this.isFieldValid(field),
      'has-feedback':this.isFieldValid(field)
    }
  }

onSubmit(){
 if(this.form.valid){
      alert('form valid')
    }else{
      this.validateAllFields(this.form);
    }
}
  validateAllFields(formgroup:FormGroup){
      Object.keys(formgroup.controls).forEach(field=>{
        const control=this.form.get(field); 
        if(control instanceof FormControl){ 
          control.markAsDirty({onlySelf:true});
        }else if(control instanceof FormGroup){
          this.validateAllFields(control);
        }
      })
    }
  
}
