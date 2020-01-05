import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MemberStore, MemberState } from './member.store';

@Injectable({ providedIn: 'root' })
export class MemberQuery extends QueryEntity<MemberState> {

  constructor(protected store: MemberStore) {
    super(store);
  }

}
