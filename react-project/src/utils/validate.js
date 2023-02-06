export function validatePrice (price=1) {
  return (rule, value) => {
    // do something
    if (value < price) {
      return Promise.reject(new Error(`商品价格不能小于${price}元`))
    } else {
      return Promise.resolve()
    }
  }
}
