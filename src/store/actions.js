import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  //context -> {state,commit}
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      //判断之前数组是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      if (oldProduct) {
        // oldProduct.count++
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前商品数量+1')
      } else {
        payload.count = 1
        // state.cartList.push(payload)
        context.commit(ADD_TO_CART, payload)
        resolve('添加了新商品')
      }
    })
  }
}
