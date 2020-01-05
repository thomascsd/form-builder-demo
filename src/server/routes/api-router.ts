import * as express from 'express';
import { validateOrReject } from 'class-validator';
import { Route } from '../interfaces/Route';
import { Router } from '../interfaces/Router';
import { MemberService } from '../services/memberService';
import { MemberDomain } from '../../shared/models/member';

const getMemberRoute: Route = {
  path: '/member/list',
  handler(req: express.Request, res: express.Response): any {
    return res.json({
      message: 'hello'
    });
  }
};

const saveMemberRoute: Route = {
  path: '/member/save',
  async handler(req: express.Request, res: express.Response) {
    const memberService = new MemberService();
    const member = req.body as MemberDomain;

    try {
      await validateOrReject(member);

      const ret = await memberService.saveMember(member);

      return res.json(res);
    } catch (error) {
      return res.json({
        message: `errors:${error}`
      });
    }
  }
};

export default class ApiRouter implements Router {
  setRouter(router: express.Router) {
    router.get(getMemberRoute.path, getMemberRoute.handler);
    router.post(saveMemberRoute.path, saveMemberRoute.handler);
  }
}
