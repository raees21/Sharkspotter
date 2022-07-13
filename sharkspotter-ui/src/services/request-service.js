import qs from 'qs';
import merge from 'lodash/merge';
import { DateTime } from 'luxon';
const axios = require('axios').default;

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || '';

const buildRequestOptions = ({
  payload = {},
  method = httpMethods.get,
  options = {},
  authScheme = 'Bearer',
  authCredential = ''
}) => {
  const httpMethod = !Object.values(httpMethods).includes(method)
    ? httpMethods.get
    : method;
  return merge({
    method: httpMethod,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'request-time': DateTime.now().toISO({ includeOffset: true }),
      ...(authCredential && { Authorization: `${authScheme} ${authCredential}` }),
    },
    ...(![httpMethods.get, httpMethods.delete].includes(method) && { data: JSON.stringify(payload) }),
  }, options);
};

const trimUrl = (url) =>
  url
    .replace(/\/{2,}/g, '/') // Replace 2 or more /'s with one
    .replace(/^\/|\/$/g, '') // Remove trailing and leading /'s
    .replace('/?', '?') // Ensure query parameters are preserved
    .trim();

const constructUrl = (endpoint = '', routeParams = [], query = {}) =>
  `${trimUrl([endpoint, routeParams.join('/')].join('/'))}${buildQueryString(query)}`;

const buildQueryString = (query) =>
  qs.stringify(query, { addQueryPrefix: true });


export const httpMethods = {
  get: 'GET',
  post: 'POST',
  delete: 'DELETE',
  patch: 'PATCH',
  put: 'PUT'
};

export const request = async ({
  baseUrl = apiBaseUrl,
  endpoint = '/',
  routeParams = [],
  data = {},
  query = {},
  method = httpMethods.get,
  options = {},
  authScheme = 'Bearer',
  authCredential = '',
} = {}) => {
  const url = constructUrl(endpoint, routeParams, query);
  const axiosConfig = buildRequestOptions({
    payload: data,
    method,
    options,
    authScheme,
    authCredential,
  });
  const response = await axios({ url, baseURL: baseUrl, ...axiosConfig });
  return response.data;
};
