import { Component, OnInit } from '@angular/core';
import { DynamicFormGroup, DynamicFormBuilder } from 'ngx-dynamic-form-builder';
import { Member } from '../../../shared/models/member';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  group: DynamicFormGroup<Member>;
  // fb = new DynamicFormBuilder();
  constructor(private fb: DynamicFormBuilder) {
    this.group = this.fb.group(Member);
  }

  ngOnInit() {}

  onSubmit() {
    this.group.validateAllFormFields();
    if (this.group.valid) {
    }
  }

  getBtnCssClass(form: NgForm) {
    let cssClass = '';

    if (form.pristine) {
      cssClass = this.group.valid ? 'btn-primary' : 'btn-default';
    } else {
      cssClass = 'btn-primary';
    }
  }
}
