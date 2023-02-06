import { fetchCnode } from '@/utils/api'

import { ref, watch, reactive, onMounted, watchEffect, toRef } from 'vue'

// 自定义Hooks必须以use*开头
export default function useList () {

  const tab = ref('')
  const page = ref(1)

  const list = ref([])
  // const list = toRef(reactive([]))

  const count = ref(0)

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
    fetchCnode({tab:tab.value,page:page.value,limit:5}).then(res=>{
      list.value = res
    })
  }

  return [tab,page,list]

  // watchEffect(()=>{
  //   fetchCnode({tab:tab.value,page:page.value,limit:5}).then(res=>{
  //     console.log('---res', res)
  //     list.value = res
  //     // console.log('----list', list)
  //     // list = JSON.parse(JSON.stringify(list))
  //   })
  // })
}
