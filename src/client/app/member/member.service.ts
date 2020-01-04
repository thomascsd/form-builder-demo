import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../../../shared/models/member';

@Injectable({ providedIn: 'root' })
export class MemberService {
  constructor(private client: HttpClient) {}

  saveMember(member: Member) {
    const url = '/api/member/save';
    this.client.post(url, member).subscribe();
  }
}
