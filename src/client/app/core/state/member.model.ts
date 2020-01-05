export interface Member {
  id: number | string;
  name: string;
  email: string;
  mobile: string;
  birthdayYear: string;
  birthdayMonth: string;
  birthdayDay: string;
  account: string;
  password: string;
}

export function createMember(params: Partial<Member>) {
  return {} as Member;
}
