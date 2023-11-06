<script setup lang="ts" name="HomeView">
import useStore from "@/store";
import Web3 from "web3";
const { home } = useStore();
home.init();
// 检查window.ethereum是否可用
if (window.ethereum) {
  // 创建一个Web3实例
  const web3 = new Web3(window.ethereum);

  try {
    // 请求用户授权
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    // 获取账户
    const accounts = await web3.eth.getAccounts();
    console.log('Connected', accounts[0]);
    // 这里你可以执行后续操作，例如交互合约
  } catch (error) {
    console.error('User denied account access');
  }
} else {
  console.log('Please install MetaMask!');
}

</script>
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
