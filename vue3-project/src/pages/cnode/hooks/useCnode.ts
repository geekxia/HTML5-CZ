import { ref, computed, watchEffect, watch, onMounted } from 'vue'
import { useStore } from 'vuex'

export default function useCnode () {
  const tab = ref('')
  const page = ref(1)
  const count = ref(0)

  const store = useStore()
  // console.log('---store', store)

  // 使用store数据，一定要用计算属性包裹一层
  const list = computed(()=>store.state.cnode.list)

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
    store.dispatch('cnode/getList', )
  }

  return [tab,page,list]
}
