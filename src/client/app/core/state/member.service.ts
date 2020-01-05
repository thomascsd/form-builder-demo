import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { MemberStore } from './member.store';
import { Member } from './member.model';
import { tap } from 'rxjs/operators';
import { MemberDomain } from '../../../../shared/models/member';

@Injectable({ providedIn: 'root' })
export class MemberService {
  constructor(private memberStore: MemberStore, private client: HttpClient) {}

  get() {
    return this.client.get<Member[]>('/api/member/list').pipe(
      tap(entities => {
        this.memberStore.set(entities);
      })
    );
  }

  add(member: Member) {
    this.memberStore.add(member);
  }

  update(id, member: Partial<Member>) {
    this.memberStore.update(id, member);
  }

  remove(id: ID) {
    this.memberStore.remove(id);
  }

  saveMember(member: MemberDomain) {
    const url = '/api/member/save';
    return this.client.post(url, member);
  }
}
