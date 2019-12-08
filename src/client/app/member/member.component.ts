import { Component, OnInit } from '@angular/core';
import { DynamicFormGroup, DynamicFormBuilder } from 'ngx-dynamic-form-builder';
import { Member } from '../../../shared/models/member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  group: DynamicFormGroup<Member>;
  btnClassName = 'btn-default';
  // fb = new DynamicFormBuilder();
  constructor(private fb: DynamicFormBuilder) {
    this.group = this.fb.group(Member);
    this.btnClassName = this.group.valid ? 'btn-primary' : 'btn-default';
  }

  ngOnInit() {}

  onSubmit() {
    this.group.validateAllFormFields();
    if (this.group.valid) {
    }
  }
}
