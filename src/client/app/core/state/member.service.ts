import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { MemberStore } from './member.store';
import { Member } from './member.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MemberService {

  constructor(private memberStore: MemberStore,
              private http: HttpClient) {
  }

  get() {
    return this.http.get<Member[]>('https://api.com').pipe(tap(entities => {
      this.memberStore.set(entities);
    }));
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
}
