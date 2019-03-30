import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig');
let apiUrl = sysConfig.xcApiUrlPre;

//定义方法，请求服务端的页面查询接口
export const page_list = (page, size, params) => {
  // 请求服务端的页面查询接口
  let queryStr = querystring.stringify(params);
  return http.requestQuickGet(apiUrl+'/cms/page/list/'+page+'/'+size+'?'+queryStr);
};

/*页面添加*/
export const page_add = params => {
  return http.requestPost(apiUrl + '/cms/page/add', params)
};

/*页面查询*/
export const page_get = id => {
  return http.requestQuickGet(apiUrl + '/cms/page/get/' + id)
};

/*页面查询*/
export const page_getSiteList =() => {
  return http.requestQuickGet(apiUrl + '/cms/page/getSiteList/')
};

/*页面修改，采用put方法*/
export const page_edit = (id, params) => {
  return http.requestPut(apiUrl + '/cms/page/update/' + id, params)
};
/*页面删除*/
export const page_del = id => {
  return http.requestDelete(apiUrl + '/cms/page/del/' + id)
};
