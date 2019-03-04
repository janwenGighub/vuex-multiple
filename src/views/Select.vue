<template>
  <div class="page">
    <div class="weui-cells__title">复选列表项</div>
    <div class="content">
      <div class="weui-cells weui-cells_checkbox">
        <label
          class="weui-cell weui-check__label"
          v-for="(item, index) in selectList"
          :key="index"
          :for="`s11${index}`"
        >
          <div class="weui-cell__hd">
            <input
              class="weui-check"
              :name="item.name"
              :id="`s11${index}`"
              type="checkbox"
              :value="item"
              v-model="newSelectArr"
            >
            <i class="weui-icon-checked"></i>
          </div>
          <div class="weui-cell__bd">
            <p>{{item.name}}</p>
          </div>
        </label>
        <a
          href="javascript:void(0);"
          class="weui-cell weui-cell_link"
        >
          <div class="weui-cell__bd">添加更多</div>
        </a>
      </div>
    </div>
    <a
      href="javascript:;"
      class="weui-btn  b-orange select_btn"
      @click="submitBtn"
    >确定</a>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      selectList: [
        { name: '皮皮虾', id: 4 },
        { name: '匹诺曹', id: 5 },
        { name: '小仙女', id: 6 }
      ],
      newSelectArr: []
    }
  },
  mounted() {
    let arr = this.addSelectArr
    this.newSelectArr = arr
  },
  methods: {
    submitBtn () {
      this.addSelectList(this.newSelectArr)
      this.$router.go(-1)
    },
    ...mapMutations(['addSelectList'])
  },
  computed: {
    ...mapGetters(['addSelectArr'])
  }
}
</script>

<style lang="scss" scoped>
.select_btn {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 100px;
  margin: 0 15px;
}
</style>
