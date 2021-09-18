import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IsNotEmpty } from 'class-validator';
import { Member } from '../../../shared/models';
import { BithdayService } from '../core/services/bithday.service';
import { MemberService } from '../core/state/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  group: FormGroup;
  years: string[];
  months: string[];
  days: string[];

  constructor(
    private fb: FormBuilder,
    private birthdayService: BithdayService,
    private memberService: MemberService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.group = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      birthday: ['', Validators.required],
      account: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.years = this.birthdayService.getYears();
    this.months = this.birthdayService.getMonth();
  }

  onSubmit() {
    //this.group.validate();

    if (this.group.valid) {
      const viewModel = { ...this.group.value };
      viewModel.birthday = `${viewModel.birthdayYear}-${viewModel.birthdayMonth}-${viewModel.birthdayDay}`;
      delete viewModel.birthdayYear;
      delete viewModel.birthdayMonth;
      delete viewModel.birthdayDay;

      this.memberService.saveMember(viewModel).subscribe(() => {
        this.snackBar.open('儲存成功', '', {
          duration: 3000,
        });
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
    const year = this.group.value.birthdayYear;
    const d = new Date(parseInt(year, 10), parseInt(month, 10), 0);
    const list: string[] = [];

    for (let day = 1; day <= d.getDate(); day++) {
      list.push(day.toString());
    }

    this.days = list;
  }
}
