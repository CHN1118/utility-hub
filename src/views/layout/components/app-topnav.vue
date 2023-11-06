<script lang="ts" setup name="AppTopnav"></script>
<template>
  <nav class="app-topnav">
    <div class="container"></div>
  </nav>
</template>

<style scoped lang="less">
.app-topnav {
  background: #0e2c3f2b;
  backdrop-filter: blur(20px);
  height: 64px;
  width: 357px;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  border-bottom: 1px solid #ffffff0a;

  .container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
}
</style>
