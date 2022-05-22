<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-botton class="check-botton" 
                    :is-checked="isSelectAll"
                    @click.native="allBtnClick"/>
      <span>全选</span>
    </div>
    <div class="price">
      合计：{{totalPrice}}
    </div>
    <div class="calculate" @click="calClick">
      去计算：{{checkLength}}
    </div>
  </div>
</template>

<script>
import CheckBotton from 'components/content/checkButton/CheckButton.vue'

import {mapGetters} from 'vuex'

export default {
  name: "CartBottomBar",
  components: {
    CheckBotton
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return '￥' + this.$store.state.cartList
                              .filter(item => item.checked)
                              .reduce((preValue,item) => {
                                return preValue+item.count*item.price
                              },0)
    },
    checkLength() {
      return this.$store.state.cartList
                              .filter(item => item.checked)
                              .reduce((preValue, item) => {
                                return preValue + item.count
                              },0)
    },
    isSelectAll() {
      //购物车没有商品不选中
      if(this.cartList.length === 0) return false
      // return !this.cartList.some(item => {
      //   if(!item.checked) {
      //     return true
      //   }
      // })

      return this.cartList.every(item => item.checked)
    }
  },
  methods: {
    allBtnClick() {
      if(this.isSelectAll) {
        this.cartList.forEach(item => {
          item.checked = false
        });
      }else{
        this.cartList.forEach(item => {
          item.checked = true
        });
      }
    },
    calClick() {
      if(this.checkLength===0) {
        this.$toast.show('请选择购买商品')
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: red;
  position: relative;
  background-color: #eee;
  display: flex;
  align-items: center;
  font-size: 14px;
  /* bottom: 40px; */
}
.check-content {
  display: flex;
  align-content: center;
  align-items: center;
  width: 60px;
  height: 40px;
  margin-left: 10px;
}
.check-botton {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.price {
  margin-left: 10px;
  flex: 1;
}
.calculate {
  width: 90px;
  background-color: var(--color-high-text);
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
}
</style>