<script setup lang="ts" name="HomeView"></script>
<template>
  <div class="home_view">
    <div class="container">
      <el-scrollbar height="600px">
        <div style="height: 64px"></div>
        <p v-for="item in 1" :key="item" class="scrollbar-demo-item">
          {{ item }}
        </p>
      </el-scrollbar>
    </div>
  </div>
</template>
<style scoped lang="less">
.home_view {
  height: 600px;
  width: 357px;
  .container {
  }
}
:global(.el-scrollbar) {
  --el-scrollbar-opacity: 0;
  --el-scrollbar-hover-opacity: 0;
}
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: rgba(192, 243, 255, 0.374);
  color: var(--el-color-primary);
}
</style>
