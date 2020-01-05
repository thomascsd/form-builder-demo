import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface MemberState extends EntityState<Member> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'member' })
export class MemberStore extends EntityStore<MemberState> {

  constructor() {
    super();
  }

}

