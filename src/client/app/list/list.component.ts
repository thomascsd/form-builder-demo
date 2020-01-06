import { Component, OnInit } from '@angular/core';
import { MemberQuery } from '../core/state/member.query';
import { Member } from '../core/state/member.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  members$: Observable<Member[]>;

  constructor(private memberQuery: MemberQuery) {}

  ngOnInit() {
    this.members$ = this.memberQuery.selectAll();
  }
}
