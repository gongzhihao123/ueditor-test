<template>
  <div class="articleExamine">
    文章审核
    <Ueditor></Ueditor>
  </div>
</template>
<script>
import Ueditor from './component/ueditor'
export default {
  data () {
    return {}
  },
  components: {
    Ueditor
  }
}
</script>
<style lang="scss" scoped>
.articleExamine {
  margin-left: 230px;
  padding: 30px 20px;
}
</style>
