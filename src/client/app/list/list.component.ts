import { Component, OnInit, ViewChild } from '@angular/core';
import { MemberQuery } from '../core/state/member.query';
import { MemberService } from '../core/state/member.service';
import { Member } from '../../../shared/models/member';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'mobile', 'birthday'];
  members: Member[] = [];

  constructor(private memberQuery: MemberQuery, private memberService: MemberService) {}

  ngOnInit() {
    this.memberService.get().subscribe((members: Member[]) => {
      this.members = members;
    });
  }
}
