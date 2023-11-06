// 管理分类导航的数据
import { defineStore } from 'pinia'
import Web3 from 'web3';
let useHomeStore = defineStore('home', {
  state: () => ({
    web3: null as Web3 | null,
  }),
  actions: {
    async init() {
      console.log('init')
      this.web3 = new Web3('https://polygon.llamarpc.com');
      this.web3.eth.getBlockNumber().then(console.log);
    },
    async test() {
      console.log('test')
    }
  },
  getters: {}
})
export default useHomeStore

