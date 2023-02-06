import { resolve } from "path"

function fetchGoodList () {
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve([1,2,3,4])
        },100)
    })
}

// redux + redux-saga (不是redux-thunk)
// dva = redux + redux-saga + react-router-dom
export default {
    namespace: 'good',
    state: {
        list: [],
        info: {}
    },
    // 相当于vuex中的mutations
    reducers: {
        changeList (state:any, {payload}:any) {
            // 开启immer后，这里可以直接修改state
            state.list = payload
        }
    },
    // 相当于vuex中的actions（只能使用Generator同步代码）
    effects: {
        // 给页面使用
        *getList ({payload}:any, {call, put}:any ) {
            const list = yield call(fetchGoodList, payload)
            console.log('接口数据', list)
            yield put({type:'changeList', payload:list})
        }
    }
}