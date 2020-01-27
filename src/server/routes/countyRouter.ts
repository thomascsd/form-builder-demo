import * as express from 'express';
import { Route } from '../interfaces/Route';
import { Router } from '../interfaces/Router';
import { CountyService } from '../services/countyService';

const getCountyRoute: Route = {
  path: '/county',
  async handler(req: express.Request, res: express.Response) {
    const countyService = new CountyService();

    try {
      const counties = await countyService.getCounties();

      return res.json(counties);
    } catch (error) {
      return res.status(500).json({
        message: `errors:${error}`
      });
    }
  }
};

const getDistinctRoute: Route = {
  path: '/distinct',
  async handler(req: express.Request, res: express.Response) {
    const countyService = new CountyService();
    const countyCode = req.query.countyCode;

    try {
      const distincts = await countyService.getDistincts(countyCode);

      return res.json(distincts);
    } catch (error) {
      return res.status(500).json({
        message: `errors:${error}`
      });
    }
  }
};

export default class CountyRouter implements Router {
  setRouter(router: express.Router) {
    router.get(getCountyRoute.path, getCountyRoute.handler);
    router.get(getDistinctRoute.path, getDistinctRoute.handler);
  }
}
