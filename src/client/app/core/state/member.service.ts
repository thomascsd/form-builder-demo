
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Member } from '../../../../shared/models';

@Injectable({ providedIn: 'root' })
export class MemberService {
  private membersSubject = new BehaviorSubject<Member[]>([]);
  members$ = this.membersSubject.asObservable();

  constructor(private client: HttpClient) {}

  get(): Observable<Member[]> {
    return this.client.get<Member[]>('/.netlify/functions/member/list').pipe(
      tap((entities) => {
        this.membersSubject.next(entities);
      })
    );
  }

  add(member: Member) {
    const current = this.membersSubject.getValue();
    this.membersSubject.next([...current, member]);
  }

  update(id: string | number, member: Partial<Member>) {
    const current = this.membersSubject.getValue();
    this.membersSubject.next(
      current.map(m => m.id === id ? { ...m, ...member } : m)
    );
  }

  remove(id: string | number) {
    const current = this.membersSubject.getValue();
    this.membersSubject.next(current.filter(m => m.id !== id));
  }

  saveMember(member: Member) {
    const url = '/.netlify/functions/member/save';
    return this.client.post(url, member);
  }
}
