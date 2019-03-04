<template>
  <div class="page">
    <div class="weui-cells__title select">添加爱好选择 <span
        class="icon icon-36"
        @click="toSelectPage"
      ></span></div>
    <div class="content">
      <div class="weui-cells fz14">
        <div
          class="weui-cell"
          v-for="(item, index) in addListArr"
          :key="index"
        >
          <div class="weui-cell__bd">
            <p>{{item.name}}</p>
          </div>
          <div
            class="weui-cell__ft cor"
            @click="delList(item.name)"
          >点击删除</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      list: [
        { name: 'jack', age: 11 },
        { name: 'rouse', age: 22 },
        { name: 'lili', age: 22 },
      ]
    }
  },
  methods: {
    toSelectPage () {
      this.$router.push({ path: '/select' })
    },
    delList (name) {
      this.delListArr(name)
    },
    ...mapMutations(['delListArr'])
  },
  computed: {
    ...mapGetters(['addListArr'])
  }
}
</script>
<style lang="scss" scoped>
.select {
  color: #5077aa;
}
.fz14 {
  font-size: 14px;
}
.cor {
  color: #5077aa;
}
.select_btn {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 100px;
  margin: 0 15px;
}
</style>
