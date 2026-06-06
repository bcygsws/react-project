// Copyright (c) 2025 Administrator
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import axios from 'axios';
const $http=axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

