import { Handler } from '@netlify/functions';

import * as data from './products-without-images.json';
import { parseFunctionEvent } from 'function_helpers/request';
import { arrayHelp, strHelp } from 'src/app/common';


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
      const req = parseFunctionEvent(event);

      if (req.path.length > 1) {
        switch (req.path[1]) {
          case 'category':
          case 'categories':
            if (req.path.length > 2) {
              //return only those products of the requested category
              const category = decodeURI(req.path[2]);
              const payload = data.products.filter(p => strHelp.stringEquals(p.category, category, true));
              return {
                statusCode: 200,
                body: JSON.stringify(payload),
              };
            }
            //else ... return a list of the categories
            const categories = arrayHelp.unique(data.products.map(p => p.category));
            const payload = categories.map(category => {
              return {
                category,
                count: data.products.filter(p => strHelp.stringEquals(p.category, category, true)).length
              };
            });
            return {
              statusCode: 200,
              body: JSON.stringify(payload),
            };

          default: 
            //get the product with an id that matches the second param
            const id = Number.parseInt(req.path[1]);
            const product = data.products.find(p => p.id === id);
            if (product) {
              return {
                statusCode: 200,
                body: JSON.stringify(product),
              };
            } 
            //else ... not found - invalid id
            return {
              statusCode: 404,
              body: JSON.stringify({id, message: 'Product Not Found'}),
            };
        }
      }

      //else ... just return all of the products

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