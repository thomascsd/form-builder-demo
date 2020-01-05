import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MemberDomain } from '../../../shared/models/member';

@Injectable({ providedIn: 'root' })
export class MemberService {
  constructor(private client: HttpClient) {}

  saveMember(member: MemberDomain) {
    const url = '/api/member/save';
    this.client.post(url, member).subscribe();
  }
}
