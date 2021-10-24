import { Handler } from '@netlify/functions';
import { loadEnv } from '@thomascsd/stools';
import { MemberService, getMemberService } from './services/memberService';

loadEnv();

const handler: Handler = async (event, context) => {
  const memberService: MemberService = getMemberService();
  const members = await memberService.getMembers();

  return {
    statusCode: 200,
    body: JSON.stringify(members),
  };
};

export { handler };
