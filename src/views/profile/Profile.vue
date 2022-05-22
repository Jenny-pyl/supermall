<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">我的档案</div>
    </nav-bar>

    <div class="login">
      <div class="login-left">
        <img src="~assets/img/profile/avatar.svg" alt="">
        <div class="login-left-text">
          <p>登录/注册</p>
          <p><img src="~assets/img/profile/phone.svg" alt="">暂无绑定手机号</p>
        </div>
      </div>
      <div class="login-right">
        <img src="~assets/img/profile/right-arrow.svg" alt="">
      </div>
    </div>

    <div class="info">
      <div class="info-item" v-for="item in infos">
        <p><span>{{item.number}}</span>元</p>
        <p>{{item.text}}</p>
      </div>
    </div>

    <div class="part part1">
      <div v-for="item in message1" class="part-item">
        <img :src="item.url">
        <span>{{item.word}}</span>
      </div>
    </div>

    <div class="part">
      <div v-for="item in message2" class="part-item">
        <img :src="item.url">
        <span>{{item.word}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "Profile",
  components: {
    NavBar,
  },
  data() {
    return {
      infos: [
        {
          number: "0.00",
          text: "我的余额",
        },
        {
          number: "0",
          text: "我的优惠",
        },
        {
          number: "0",
          text: "我的积分",
        },
      ],
      message1: [
        {
          url: require("~assets/img/profile/message.svg"),
          word: "我的消息",
        },
        {
          url: require("~assets/img/profile/pointer.svg"),
          word: "积分商城",
        },
        {
          url: require("~assets/img/profile/vip.svg"),
          word: "会员卡",
        },
      ],
      message2: [
        {
          url: require("~assets/img/profile/cart.svg"),
          word: "我的购物车",
        },
        {
          url: require("~assets/img/profile/pointer.svg"),
          word: "下载购物APP",
        },
      ],
    };
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.login {
  height: 80px;
  background-color: var(--color-tint);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.login-left {
  display: flex;
  align-items: center;
  margin-left: 5px;
}
.login-left-text {
  margin: 0 65px 0 10px;
}
.login-left-text p {
  width: 140px;
}
.login-left-text p img {
  width: 20px;
  position: relative;
  top: 4px;
  left: -3px;
}
.login-left img {
  width: 70px;
}
.login-right img {
  width: 20px;
}
.info {
  display: flex;
  height: 70px;
  align-items: center;
}
.info-item {
  flex: 1;
  text-align: center;
  border-right: 1px solid #ccc;
  height: 100%;
  padding: 16.6px 0;
}
.info-item p span {
  color: var(--color-high-text);
  font-weight: bold;
}
.part1 {
  border-top: 20px solid #eee;
  border-bottom: 20px solid #eee;
}
.part-item {
  height: 35px;
  line-height: 35px;
}
.part-item span {
  margin-left: 15px;
}
.part-item img {
  width: 20px;
  position: relative;
  top: 5px;
  left: 7px;
}
</style>