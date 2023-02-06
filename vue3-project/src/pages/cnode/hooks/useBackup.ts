import { ref, computed, watchEffect, watch, onMounted } from 'vue'

import { useDispatch, useSelector } from './index.ts'

export default function useBackup () {
  const tab = ref('')
  const page = ref(1)
  const count = ref(0)

  // 模仿react-redux
  const dispatch = useDispatch()
  const list = useSelector(state=>state.cnode.list)

  // 当count变化时调接口
  watch(count, ()=>{getList()})

  // 当品类或页码变化时
  watch([tab,page], ([newT,newP], [oldT,oldP])=>{
    // 当品类变化时，让page重置为1
    if (newT !== oldT) {
      page.value = 1
      count.value++
    }
    // 当页码变化时
    if (newP !== oldP) {
      count.value++
    }
  })

  // 初始化渲染完成时
  onMounted(()=>{getList()})

  const getList = () => {
    const params = { tab:tab.value,page:page.value,limit:6 }
    dispatch('cnode/getList', params)
  }

  return [tab,page,list]
}
