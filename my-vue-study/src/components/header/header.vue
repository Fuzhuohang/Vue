<template>
  <div class="header">
    <div class="header-left"></div>
    <div class="header-right">
      <div class="author-info">
        <div class="avatar">
          <img src="../../assets/images/avatar.png" alt="header">
        </div>
        <div class="info">
          <span class="name">付卓航</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  components: {

  }
}
</script>
<style lang="less" scoped>
  .header {
    padding: 0 24px;
    height: 64px;
    display: flex;
    justify-content: space-between;
    background: #f7f7f7;
    box-shadow: 0px 1px 4px 0 rgba(0, 0, 0, 0.25);
    &-left {

    }
    &-right {
      display: flex;
      .author-info {
        display: flex;
        align-items: center;
        .avatar {
          height: 40px;
          width: 40px;
          margin-right: 12px;
          img{
            height: 40px;
            width: 40px;
            border-radius: 50%;
            overflow: hidden;
          }
        }
        .info {
          .name {
            color: rgba(0, 0, 0, 0.85);
            font-size: 16px;
            line-height: 22px;
            height: 22px;
          }
        }
      }
    }
  }
</style>