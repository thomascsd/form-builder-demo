import { Handler } from '@netlify/functions';
import { loadEnv } from '@thomascsd/stools';
import { CountyService, getCountyService } from './services/countyService';

loadEnv();

const handler: Handler = async (event, context) => {
  const countyService: CountyService = getCountyService();
  const county = await countyService.getCounties();

  return {
    statusCode: 200,
    body: JSON.stringify(county),
  };
};

export { handler };
