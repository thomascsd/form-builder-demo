import { Component, OnInit, ViewChild } from '@angular/core';
import { MemberQuery } from '../core/state/member.query';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MemberService } from '../core/state/member.service';
import { Member } from '../../../shared/models/member';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'mobile', 'birthday'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: MatTableDataSource<Member>;

  constructor(private memberQuery: MemberQuery, private memberService: MemberService) {}

  ngOnInit() {
    this.memberService.get().subscribe((members: Member[]) => {
      this.dataSource = new MatTableDataSource<Member>(members);
      this.dataSource.sort = this.sort;
    });
    //    const members = this.memberQuery.getAll();
  }
}
