<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.base-info {
  margin-top: 10px;
}
.info-title {
  font-size: 13px;
  color: #000;
  font-weight: bold;
}
.info-price {
 margin: 12px 4px 12px;
}
.n-price {
  font-size: 18px;
  color: var(--color-high-text)
}
.o-price {
  font-size: 8px;
  text-decoration: line-through;
  margin: 0 5px;
}
.discount {
  background-color: var(--color-high-text);
  border-radius: 5px;
  color: #fff;
}
.info-other {
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  margin: 0 7px;
  padding-bottom: 7px;
  border-bottom: 1px solid rgb(231, 228, 228);
}
.info-service {
  display: flex;
  justify-content: space-between;
  padding: 18px 7px;
  border-bottom: 4px solid rgb(231, 228, 228);
  font-size: 13px;
  color: #000;
}
.info-service-item img {
  width: 10px;
}
</style>