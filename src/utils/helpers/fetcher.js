import axios from 'axios';

const defaultMethod = 'GET';

export const fetcher = (params) => axios({
  method: defaultMethod,
  ...params,
});
