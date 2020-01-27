import { County } from '../../shared/models/county';
import { Distinct } from '../../shared/models/distinct';
import { RestDbService } from './restDbService';

export class CountyService {
  private db = new RestDbService();

  async getCounties(): Promise<County[]> {
    const counties = this.db.getData<County>('county');
    return counties;
  }

  async getDistincts(countyCode: string): Promise<Distinct[]> {
    const distincts = await this.db.getData<Distinct>('distinct', [
      {
        countyCode: countyCode
      }
    ]);
    return distincts;
  }
}
