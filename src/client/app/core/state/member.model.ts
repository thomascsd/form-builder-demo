export interface Member {
  _id: number | string;
  name: string;
  email: string;
  mobile: string;
  birthday: string;
  account: string;
  password: string;
}

export function createMember(params: Partial<Member>) {
  return {} as Member;
}
