import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { MemberStore } from './member.store';
import { Member } from '../../../../shared/models';

@Injectable({ providedIn: 'root' })
export class MemberService {
  constructor(private memberStore: MemberStore, private client: HttpClient) {}

  get() {
    return this.client.get<Member[]>('/.netlify/functions/member/list').pipe(
      tap((entities) => {
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

  saveMember(member: Member) {
    const url = '/.netlify/functions/member/save';
    return this.client.post(url, member);
  }
}
