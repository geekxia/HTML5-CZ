import { useStore } from 'vuex'
import { computed } from 'vue'

export function useSelector(fn) {
  // 参数校验
  const store = useStore()
  return computed(()=>fn(store.state))
}

export function useDispatch() {
  const store = useStore()
  return store.dispatch
}
