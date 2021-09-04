import { config } from 'dotenv';
import { Handler } from '@netlify/functions';
import { CountyService } from './services/countyService';
import { DataFunctionService } from '@thomascsd/stools';

config({ path: './.env' });

const handler: Handler = async (event, context) => {
  const countyCode: string = event.queryStringParameters.countyCode;
  const db = new DataFunctionService(process.env.AIRTABLE_API, 'appYytqUfVu81cjXn');
  const countyService = new CountyService(db);
  const distinct = await countyService.getDistincts(countyCode);

  return {
    statusCode: 200,
    body: JSON.stringify(distinct),
  };
};

export { handler };
