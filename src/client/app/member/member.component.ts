import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Member } from '../../../shared/models';
import { BithdayService } from '../core/services/bithday.service';
import { MemberService } from '../core/state/member.service';

interface MemberForm {
  [x: string]: FormControl<unknown>;
  id?: FormControl<string>;
  name: FormControl<string>;
  email: FormControl<string>;
  mobile: FormControl<string>;
  birthday: FormControl<string>;
  account: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  group: FormGroup<MemberForm>;
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
    this.group = this.fb.nonNullable.group<Member>(
      {
        name: '',
        email: '',
        mobile: '',
        birthday: '',
        account: '',
        password: '',
      },
      {
        validators: Validators.required,
      }
    );

    //lgroup.value.id;
    this.years = this.birthdayService.getYears();
    this.months = this.birthdayService.getMonth();
  }

  onSubmit() {
    //this.group.validate();

    if (this.group.valid) {
      this.memberService.saveMember(this.group.value as Member).subscribe(() => {
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
}
