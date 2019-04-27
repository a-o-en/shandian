export const reqConfig = {
  login: {
    url: '/login',
    method: 'GET',
    header: { 'content-type': 'application/json' },
    needToken: false
  },
  getUserInfo: {
    url: '/user',
    method: 'GET',
    header: { 'content-type': 'application/json' },
    needToken: true
  },
  getSchoolList: {
    url: '/school',
    method: 'GET',
    header: { 'content-type': 'application/json' },
    needToken: true
  },
  updateUserInfo: {
    url: '/user',
    method: 'POST',
    header: { 'content-type': 'application/x-www-form-urlencoded' },
    needToken: true
  },
  addCollection: {
    url: '/collection',
    method: 'PUT',
    header: { 'content-type': 'application/x-www-form-urlencoded' },
    needToken: true
  },
  getCollectionList: {
    url: '/collection/list',
    method: 'GET',
    header: { 'content-type': 'application/json' },
    needToken: true
  },
  deleteCollection: {
    url: '/collection',
    method: 'DELETE',
    header: { 'content-type': 'application/x-www-form-urlencoded' },
    needToken: true
  },
  getRecommend: {
    url: '/career/recommand',
    method: 'GET',
    header: { 'content-type': 'application/json' },
    needToken: true
  },
  search: {
    url: '/career/search',
    method: 'GET',
    header: { 'content-type': 'application/json' },
    needToken: true
  },
  getDetailById: {
    url: '/career',
    method: 'GET',
    header: { 'content-type': 'application/json' },
    needToken: true
  }
}
