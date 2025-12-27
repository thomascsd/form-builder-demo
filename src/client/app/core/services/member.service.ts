import { Injectable } from '@angular/core';
import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Member } from '../../../../shared/models';

// const API_BASE_URL = 'https://sparkling-flower-9496.fly.dev';
const API_BASE_URL = '/.netlify/functions/proxy';

@Injectable({ providedIn: 'root' })
export class MemberService {
  members: Member[] = [];

  get(): HttpResourceRef<Member[]> {
    // return this.client.get<Member[]>('/.netlify/functions/member/list').pipe(
    //   tap((entities) => {
    //     this.membersSubject.next(entities);
    //   })
    // );

    const params = {
      path: '/contact/list',
    };

    const members = httpResource<Member[]>(
      () => ({
        url: API_BASE_URL,
        params,
      }),
      {
        defaultValue: [],
      },
    );

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
    const params = {
      path: '/contact/save',
    };
    //return this.client.post(url, member);

    return httpResource<Member>(() => ({
      url: API_BASE_URL,
      params,
      method: 'POST',
      body: member,
    }));
  }
}
