// using axios create RestClient that takes all necessary parameters for api call. use es6 async await syntax
import axios from "axios";
import omitBy from "lodash/omitBy";
import isNil from "lodash/isNil";

interface RestClientnput {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  headers?: any;
  data?: any;
}

// create it as input + response
interface RestClientOutput extends RestClientnput {
  body: any;
  status: number;
  statusText: string;
}

export const RestClient = async ({
  url,
  method,
  headers,
  data,
}: RestClientnput): Promise<RestClientOutput> => {
  let response;
  console.log(`START API CALL ${method} ${url}`, {
    method,
    url,
    headers,
    data,
  });
  try {
    response = await axios(omitBy({ url, method, headers, data }, isNil));
  } catch (error) {
    console.error(`ERROR API CALL ${method} ${url}`, error);
    throw error;
  }

  const sanitizedResponse = {
    body: response.data,
    status: response.status,
    statusText: response.statusText,
    url,
    method,
    headers,
    data,
  };

  console.log(`END API CALL ${method} ${url}`, sanitizedResponse);

  return sanitizedResponse;
};
