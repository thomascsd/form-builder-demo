import { Component, inject } from '@angular/core';
import { MemberService } from '../core/services/member.service';
import { Member } from '../../../shared/models/member';
import { HttpResourceRef } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: false,
})
export class ListComponent {
  displayedColumns: string[] = ['name', 'email', 'mobile', 'birthday'];
  memberService = inject(MemberService);
  members: HttpResourceRef<Member[]> = this.memberService.get();
}
