<script lang="ts" setup name="AppTopnav">
import { ref } from "vue";
const dialogVisible = ref(false);
</script>
<template>
  <nav class="app-topnav">
    <div class="container">
      <div class="rpc_select" @click="dialogVisible = true">
        <img src="@/assets/images/matic-token.png" alt="" />
        <div class="icon">
          <el-icon><ArrowRightBold /></el-icon>
        </div>
      </div>
    </div>
  </nav>
  <el-dialog
    v-model="dialogVisible"
    center
    title="切换网络"
    width="90%"
    top="74px"
  >
    <div class="network_list">
      <div class="item active">
        <img src="@/assets/images/matic-token.png" alt="" />
        <span>Polygon Mainnet</span>
      </div>
    </div>
    <span style="color: aliceblue"></span>
    <template #footer>
      <div class="dialog-footer">添加网络</div>
    </template>
  </el-dialog>
</template>

<style scoped lang="less">
.app-topnav {
  background: #00000063;
  backdrop-filter: blur(50px);
  height: 64px;
  width: 357px;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  border-bottom: 1px solid #ffffff18;

  .container {
    height: 100%;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .rpc_select {
      transition: all 0.3s ease-in-out;
      display: flex;
      align-items: center;
      padding: 0 4px;
      justify-content: space-between;
      height: 32px;
      width: 32px;
      border-radius: 16px;
      background: #ffffff0a;
      cursor: pointer;

      img {
        height: 24px;
        width: 24px;
      }
      .icon {
        height: 0px;
        width: 0px;
        overflow: hidden;
      }
      &:hover {
        background: #ffffff1a;
        width: 56px;
        border-radius: 16px;
        .icon {
          display: flex;
          transition: all 0.3s ease-in-out;
          transform: rotate(90deg);
          height: 24px;
          width: 24px;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
:global(.el-dialog) {
  background: #121314 !important;
  border-radius: 8px !important;
  box-shadow: 0px 0px 20px 0px #000000d8 !important;
  border: 1px solid #ffffff02;
}
:global(.el-dialog__header) {
  --el-dialog-bg-color: #fff !important;
}
:global(.el-dialog__title) {
  color: #fff !important;
  font-size: 16px !important;
}
:global(.el-dialog__headerbtn) {
  font-size: var(--el-message-close-size, 20px);
  color: #fff !important;
}
:global(.el-dialog__headerbtn .el-dialog__close) {
  color: #fff !important;
  &:hover {
    color: #fff !important;
  }
}
:global(.el-dialog--center .el-dialog__body) {
  padding: 0 !important;
}
.dialog-footer {
  border: 1px solid @untColor;
  padding: 10px 0;
  border-radius: 4px;
  font-size: 14px;
  color: @untColor;
  &:hover {
    background: @untColor;
    color: black;
  }
}
.network_list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px 0 !important;

  .item {
    padding: 8px 20px;
    display: flex;
    width: 100%;
    cursor: pointer;
    justify-content: start;
    align-items: center;
    gap: 14px;
    img {
      border: 1px solid #bce0f770;
      border-radius: 50%;
      height: 30px;
      width: 30px;
    }
    span {
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }
  }
  .active {
    position: relative;
    background-color: #bce0f732;
    &::before {
      content: "";
      position: absolute;
      left: 3px;
      top: 50%;
      transform: translateY(-50%);
      height: 80%;
      width: 3px;
      background-color: #bce0f7c2;
      border-radius: 4px;
    }
  }
}
</style>
