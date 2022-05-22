<template>
  <div v-if="Object.keys(commentInfo) !==0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="info-user"></i>
      </div>
    </div>
    <div class="info-user" v-if="commentInfo.user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail" v-if="commentInfo.user">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item, index) in commentInfo.images" :key="index">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";

export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate: function (value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
</script>

<style scoped>
.info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  /* margin: 0 20px; */
  border-bottom: 2px solid #ccc;
}
.info-user {
  height: 60px;
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.info-user img {
  width: 60px;
  border-radius: 50%;
}
.info-user span {
  /* display: inline-block; */
  margin-left: 10px;
}
.info-detail {
  margin-top: 10px;
  padding: 10px;
}
.info-detail .info-other{
  margin-top: 5px;
  font-size: 12px;
}
/* .info-detail .info-imgs{
  width: 100%;
} */
.info-detail .info-imgs img {
  width: 50px;
  margin-right: 5px;
}
</style>