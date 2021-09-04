import { config } from 'dotenv';
import { Handler } from '@netlify/functions';
import { CountyService } from './services/countyService';
import { DataFunctionService } from '@thomascsd/stools';

config({ path: './.env' });

const handler: Handler = async (event, context) => {
  const db = new DataFunctionService(process.env.AIRTABLE_API, 'appYytqUfVu81cjXn');
  const countyService = new CountyService(db);
  const county = await countyService.getCounties();

  return {
    statusCode: 200,
    body: JSON.stringify(county),
  };
};

export { handler };
