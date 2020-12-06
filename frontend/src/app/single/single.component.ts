import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../shared/data';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'ae-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})


export class SingleComponent implements OnInit {
  singleFormGroup: FormGroup;
  id: string;
  data: Data;

  constructor(private fb: FormBuilder, private route:ActivatedRoute, private ds: DataService) { 

  }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.data=this.ds.getSingleId(this.id);
    this.singleFormGroup = this.createFormGroup();
    this.singleFormGroup.setValue({
      forenameControl: this.data.forename,
      surnameControl: this.data.surname,
      emailControl: this.data.email
  });
}
createFormGroup(): FormGroup {
  return this.fb.group({
    forenameControl: ['', Validators.required],
    surnameControl: ['', Validators.required],
    emailControl: ['', Validators.required]
    });
}

onSubmit(formData): void {
  this.singleFormGroup.reset();
  console.warn('Submitted: ', formData);
}

}
