import { request } from 'umi';

// 这个api方法，以后可以用于page页面组件，还可以用redux-saga数据流
export async function fetchCnode(params: any) {
  return request<{ data: API.ArticleList }>('https://cnodejs.org/api/v1//topics', {
    method: 'GET',
    params,
  });
}
