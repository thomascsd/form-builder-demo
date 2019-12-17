import { Component, OnInit } from '@angular/core';
import { DynamicFormGroup, DynamicFormBuilder } from 'ngx-dynamic-form-builder';
import { Member } from '../../../shared/models/member';
import { NgForm } from '@angular/forms';
import { BithdayService } from '../core/services/bithday.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  group: DynamicFormGroup<Member>;
  years: number[];
  months: number[];
  days: number[] = [];
  // fb = new DynamicFormBuilder();
  constructor(private fb: DynamicFormBuilder, private birthdayService: BithdayService) {
    this.group = this.fb.group(Member);
  }

  ngOnInit() {
    this.years = this.birthdayService.getYears();
    this.months = this.birthdayService.getMonth();
  }

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

  onMonthChange(year: string, month: string) {
    const d = new Date(parseInt(year, 10), parseInt(month, 10) - 1, 0);

    for (let day = 1; day <= d.getDate(); day++) {
      this.days.push(day);
    }
  }
}
