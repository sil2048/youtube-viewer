import axios from 'axios';

const env = process.env.NODE_ENV;

const envConfig = {
  development: {
    apiUrl: 'https://jsonplaceholder.typicode.com/',
  },
  staging: {
    apiUrl: 'https://jsonplaceholder.typicode.com/',
  },
  production: {
    apiUrl: 'https://jsonplaceholder.typicode.com/',
  },
};

function fetchAPI(options) {
  return axios(options);
}

function getPosts() {
  const endpoint = `${envConfig[env].apiUrl}posts`;
  const options = {
    url: endpoint,
    method: 'GET',
  };
  return fetchAPI(options);
}

function getSelectPost(payload) {
  const endpoint = `${envConfig[env].apiUrl}posts/${payload.id}`;
  const options = {
    url: endpoint,
    method: 'GET',
  };
  return fetchAPI(options);
}

export default {
  getPosts,
  getSelectPost,
};
