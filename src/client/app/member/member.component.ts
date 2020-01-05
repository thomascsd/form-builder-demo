import { Component, OnInit } from '@angular/core';
import { DynamicFormGroup, DynamicFormBuilder } from 'ngx-dynamic-form-builder';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MemberDomain } from '../../../shared/models/member';
import { BithdayService } from '../core/services/bithday.service';
import { MemberService } from '../core/state/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  group: DynamicFormGroup<MemberDomain>;
  years: string[];
  months: string[];
  days: string[];
  // fb = new DynamicFormBuilder();
  constructor(
    private fb: DynamicFormBuilder,
    private birthdayService: BithdayService,
    private memberService: MemberService,
    private snackBar: MatSnackBar
  ) {
    this.group = this.fb.group(MemberDomain);
  }

  ngOnInit() {
    this.years = this.birthdayService.getYears();
    this.months = this.birthdayService.getMonth();
  }

  onSubmit() {
    this.group.validateAllFormFields();
    if (this.group.valid) {
      this.memberService.saveMember(this.group.object).subscribe(() => {
        this.snackBar.open('儲存成功');
      });
    }
  }

  getBtnCssClass(form: NgForm) {
    let cssClass = '';

    if (form.pristine) {
      cssClass = this.group.valid ? 'btn-primary' : 'btn-default';
    } else {
      cssClass = 'btn-primary';
    }

    return cssClass;
  }

  onMonthChange(month: string) {
    const year = this.group.object.birthdayYear;
    const d = new Date(parseInt(year, 10), parseInt(month, 10), 0);
    const list: string[] = [];

    for (let day = 1; day <= d.getDate(); day++) {
      list.push(day.toString());
    }

    this.days = list;
  }
}
