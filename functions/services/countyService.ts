import { County } from '@shared/models/county';
import { Distinct } from '@shared/models/distinct';
import { DataFunctionService } from '@thomascsd/stools';

export class CountyService {
  constructor(private db: DataFunctionService) {}

  async getCounties(): Promise<County[]> {
    const counties = this.db.getDatas<County>('county');
    return counties;
  }

  async getDistincts(countyCode: string): Promise<Distinct[]> {
    const distincts = await this.db.getDatas<Distinct>('distinct', {
      filterByFormula: `{countyCode}=${countyCode}`,
    });
    return distincts;
  }
}

export function getCountyService(): CountyService {
  const db = new DataFunctionService(process.env.AIRTABLE_API, 'appYytqUfVu81cjXn');
  const countyService = new CountyService(db);
  return countyService;
}
