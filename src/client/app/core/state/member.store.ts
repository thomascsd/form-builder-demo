import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Member } from '../../../../shared/models/member';

export interface MemberState extends EntityState<Member> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'member' })
export class MemberStore extends EntityStore<MemberState> {
  constructor() {
    super();
  }
}
