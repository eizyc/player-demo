<template>
  <div class="home">
    <div>
      <input type="text" v-model="src" placeholder="播放链接">
      <select v-model="type" placeholder="播放器类型">
        <option value ="tsingsee">tsingsee</option>
        <option value ="aliplayer" >aliplayer</option>
      </select>
      <button @click="buildPlayer">Build</button>
    </div>
    <div v-if="flag">
      <div class="video" v-for="(item,index) in arr" :key="index" :style="{width:width+'% !important',height:'auto'}">
        {{index}}
        <Player  :src="src" :type="type" :number="index"/>
        <button @click="destory(index)">销毁</button>
      </div>
    </div>
  </div>
</template>
<script>
import Player from '@/components/Player.vue';

export default {
  name: 'Home',
  components: {
    Player,
  },
  data() {
    return {
      src: '',
      arr:[],
      type:'aliplayer',
      flag: false,
    };
  },
  computed: {
    width() {
      const { number } = this;
      if (number === 1) {
        return 100;
      } if (number === 2 || number === 3 || number === 4) {
        return 50;
      }
      return 33;
    },
  },
  methods: {
    buildPlayer() {
      this.flag = true;
      let item = {
        src:this.src,
        type:this.type
      }
      this.arr.push(item)
      this.number++;
    },
    destory(index){
      this.arr.splice(index,1)
      this.number--;
    }
  },
};
</script>
<style lang="less" scoped>
.video{
  display: inline-block;
}
</style>
