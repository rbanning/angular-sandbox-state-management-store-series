import { Handler } from '@netlify/functions';

import * as data from './products.json';


/**
 * Sample (hello world) Netlify serverless function...
 * Parameters:
 * 
 * event: HandlerEvent  {
    path: string;                                     // name of the path
    httpMethod: string;                               // request’s method name (e.g. GET, POST),
    headers: {[key: string]: string};                 // request headers,
    queryStringParameters: {[key: string]: string};   // request query parameters,
    body: string;                                     // json (string) payload,
    isBase64Encoded: boolean;                         // true if body (payload) is Base64-encoded
  }

  context: HandlerContext {

  }
  *
  *
 */

  const handler: Handler = async (event, context) => {  
    if (event.httpMethod === 'GET') {
      return {
        statusCode: 200,
        body: JSON.stringify(data.products),
      };
  
    }

    //else
    return {
      statusCode: 405,
      body: JSON.stringify({message: 'GET requests only'}),
    };

  }

  export { handler };