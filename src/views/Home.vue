<template>
  <div class="page">
    <p>hello vuex</p>
    <div class="weui-cells__title weui-start">选择你的爱好?<span class="f-green">[多选题]</span></div>
    <div class="content">
      <div class="weui-form">
        <div
          class="weui-form-li iblock"
          v-for="(item, index) in hobbyList"
          :key="index"
        >
          <input
            class="weui-form-checkbox"
            :id="`h1${index}`"
            :value="item"
            type="checkbox"
            v-model="hobbyArr"
          >
          <label :for="`h1${index}`">
            <i class="weui-icon-checkbox"></i>
            <div class="weui-form-text">
              <p>{{item.name}}</p>
            </div>
          </label>
        </div>
      </div>
    </div>
    <a
      href="javascript:;"
      class="weui-btn weui-btn_default home_btn"
      @click="toPage"
    >提交</a>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      hobbyList: [
        { id: 1, name: '美术' },
        { id: 2, name: '唱歌' },
        { id: 3, name: '游泳' }
      ],
      hobbyArr: []
    }
  },
  methods: {
    toPage () {
      this.addHobbyList(this.hobbyArr)
      this.$router.push({ path: '/list' })
    },
    ...mapMutations(['addHobbyList'])
  }
}
</script>
<style lang="scss" scoped>
.page {
  .home_btn {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100px;
    margin: 0 15px;
  }
}
</style>

