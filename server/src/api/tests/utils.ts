import { AxiosRequestConfig } from 'axios';

// TODO: Load PORT number from env variable

export const graphQLRequestConfig = (
  graphQLRequest: string,
): AxiosRequestConfig => {
  return {
    url: 'http://localhost:666/api',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: graphQLRequest,
  };
};
