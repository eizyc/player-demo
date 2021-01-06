<template>
  <div :id="id">
  </div>
</template>

<script>
import Lib from '@/lib';

export default {
  name: 'Player',
  props: ['src','type','number'],
  data() {
    return {
      Player: null, // 播放器实例
    };
  },
  mounted() {
    setTimeout(() => {
      this.init();
    }, this.number*400);
  },
  computed: {
    // 动态设置id，兼容一屏多个直播视频
    id() {
      const id = Lib.createRandomId();
      return `my-player-${id}`;
    },
  },
  methods: {
    init() {
      const { id } = this;
      let config = {
          id: id,
          width: "100%",
          height: "100%",
          autoplay: true,
          isLive: true,
          source: this.src,
          enableStashBufferForFlv: true,
          stashInitialSizeForFlv: 32,
        }
      // eslint-disable-next-line no-undef
      // this.Player = new WasmPlayer(null,id,this.callbackfun,{decodeType:"auto", openAudio:1, Height:true});
      if(this.type=='tsingsee'){
        // eslint-disable-next-line no-undef
        this.Player = new WasmPlayer(null,id,this.callbackfun,{openAudio:true});
        this.Player.play(this.src, 1)
      }else if(this.type=='aliplayer'){
        // eslint-disable-next-line no-undef
        this.Player =  new Aliplayer(
        config, () => {
          console.dir(`${id} aliplayer 实例化ok`)
        })
      }
    },
    callbackfun(e){
      console.log('callbackfun', e);
    },
  },
  beforeDestroy() {
      if(this.type=='tsingsee'){
        // eslint-disable-next-line no-undef
        this.Player.destroy();
      }else if(this.type=='aliplayer'){
        // eslint-disable-next-line no-undef
        this.Player.dispose();
      }
  },
};
</script>

<style>

</style>
