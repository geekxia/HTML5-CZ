import store from '@/store'
function myconnect(mapState,mapDispatch) {
  const state = mapState(store.getState())
  const methods = mapDispatch(store.dispatch)
  return Wrapped => {
    return class extends React.PureComponent {
      componentDidMount () {
        store.subscribe(()=>{
          this.forceUpdate()
        })
      }
      render () {
        return <Wrapped {...props} {...state} {...methods}>
      }
    }
  }
}
