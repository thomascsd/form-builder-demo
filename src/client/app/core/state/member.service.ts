import { Injectable } from '@angular/core';
import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Member } from '../../../../shared/models';

@Injectable({ providedIn: 'root' })
export class MemberService {
  members: Member[] = [];

  constructor() {}

  get(): HttpResourceRef<Member[]> {
    // return this.client.get<Member[]>('/.netlify/functions/member/list').pipe(
    //   tap((entities) => {
    //     this.membersSubject.next(entities);
    //   })
    // );

    const members = httpResource<Member[]>('/.netlify/functions/member/list', { defaultValue: [] });

    return members;
  }

  add(member: Member) {
    this.members = [...this.members, member];
  }

  update(id: string | number, member: Partial<Member>) {
    this.members = this.members.map((m) => (m.id === id ? { ...m, ...member } : m));
  }

  remove(id: string | number) {
    this.members = this.members.filter((m) => m.id !== id);
  }

  saveMember(member: Member) {
    const url = '/.netlify/functions/member/save';
    //return this.client.post(url, member);

    return httpResource<Member>(() => ({
      url,
      method: 'POST',
      body: member,
    }));
  }
}
