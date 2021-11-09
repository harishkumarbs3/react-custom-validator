import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-reactexample',
  templateUrl: './reactexample.component.html',
  styleUrls: ['./reactexample.component.scss']
})
export class ReactexampleComponent implements OnInit {
  isSubmitted:boolean=false;
  
   loginform = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required,Validators.email])
  })






  constructor() { }

  ngOnInit(): void {
    
  }
   submit(){
this.isSubmitted=true;

   }

}
