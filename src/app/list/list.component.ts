import { Component, inject } from '@angular/core';
import { HttpResourceRef } from '@angular/common/http';
import { MemberService } from '@core/services/member.service';
import { Member } from '@shared/models/member';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent {
  displayedColumns: string[] = ['name', 'email', 'mobile', 'birthday'];
  memberService = inject(MemberService);
  members: HttpResourceRef<Member[]> = this.memberService.get();
}
