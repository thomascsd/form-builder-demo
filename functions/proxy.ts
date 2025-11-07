// Netlify Function: Proxy
// 讀取環境變數: url, api_key
import { Handler } from '@netlify/functions';
import got, { Method } from 'got';

const handler: Handler = async (event) => {
  const apiUrl = process.env.URL;
  const apiKey = process.env.API_KEY;

  if (!apiUrl || !apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing url or api_key in environment variables.' }),
    };
  }

  // 轉發請求
  const method = (event.httpMethod as Method) || 'GET';
  // 複製 headers，移除 host
  const headers = { ...event.headers, 'x-api-key': apiKey };
  if ('host' in headers) delete headers['host'];

  const isBodyMethod = ['POST', 'PUT', 'PATCH'].includes(method);
  const path = event.queryStringParameters?.path || '';

  try {
    const response = await got(apiUrl + path, {
      method: method,
      headers,
      body: isBodyMethod ? event.body || '' : undefined,
      throwHttpErrors: false,
      responseType: 'json',
    });

    return {
      statusCode: response.statusCode,
      body: JSON.stringify(response.body),
    };
  } catch (err: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || 'Proxy error' }),
    };
  }
};

export { handler };
