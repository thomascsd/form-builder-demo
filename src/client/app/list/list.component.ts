import { Component, inject, OnInit } from '@angular/core';
import { MemberService } from '../core/state/member.service';
import { Member } from '../../../shared/models/member';
import { HttpResourceRef } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: false,
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'mobile', 'birthday'];
  memberService = inject(MemberService);
  members: HttpResourceRef<Member[]> = this.memberService.get();

  constructor() {}

  ngOnInit() {}
}
