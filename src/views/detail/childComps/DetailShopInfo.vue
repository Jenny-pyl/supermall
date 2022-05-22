<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shop.sells | sellCountFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td class="right-text" style="color: #000">{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style scoped> 
.shop-top {
  display: flex;
  margin: 20px 5px;
  line-height: 60px;
}
.title {
  margin-left: 8px;
  font-size: 22px;
}
.shop-top img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.shop-middle {
  display: flex;
  justify-content: space-around;
}
/* .shop-middle-item {
  flex: 1;
} */
.shop-middle-left {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.info-sells {
  text-align: center;
  color: #000;
}
.info-goods {
  text-align: center;
  padding: 0 12px;
  margin-left: 5px;
  border-right: 2px solid #ccc;
  color: #000;
}
.sells-text,.goods-text {
  font-size: 12px;
}
.shop-middle-right .score {
  color: #5ea732;
  margin: 0 8px;
  display: inline;
}
.shop-middle-right .score-better {
  color: #f13e3a
}
.shop-middle-right .better {
  background-color: #5ea732;
  color: #fff;
}
.shop-middle-right .better-more {
  background-color: #f13e3a;
}
.shop-middle-right .right-text {
  font-size: 13px;
}
.shop-bottom {
  margin-top: 5px;
  width: 100%;
}
.enter-shop {
  background-color: rgb(238, 230, 230);
  width: 40%;
  text-align: center;
  margin: 0 auto;
  border-radius: 7px;
}
</style>