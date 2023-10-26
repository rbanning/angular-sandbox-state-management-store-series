export type FunctionRequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'TRACE';   //https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
export interface IFunctionRequest {
  path: string[]; //removes functions folder
  method: FunctionRequestMethod;
  params: {[key: string]: string};
  headers: {[key: string]: string};
  body?: string;
}

export const parseFunctionEvent = (event: any, functions_folder: string = 'functions'): IFunctionRequest => {
  //generate the path array
  const parts = event.path.split('/');
  const index = parts.indexOf(functions_folder);
  const path = parts.filter((_: string, i: number) => i > index);
  return {
    path,
    method: event.httpMethod as FunctionRequestMethod,
    params: event.queryStringParameters,
    headers: event.headers,
    body: event.body
  };
}