"use strict";
const common_vendor = require("../../common/vendor.js");
const myIcon = () => "../../components/myIcon.js";
const audio = common_vendor.index.createInnerAudioContext();
const _sfc_main = {
  components: {
    myIcon
  },
  data() {
    return {
      url: "",
      list: [],
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      song: "",
      singer: ""
    };
  },
  onLoad(option) {
    var serverUrl = this.serverUrl || this.$config.serverUrl;
    let data = option.item ? JSON.parse(decodeURIComponent(option.item)) : null;
    let singer = option.item ? JSON.parse(decodeURIComponent(option.singer)) : null;
    this.singer = singer || "未知歌手";
    this.list = data;
    this.song = this.list.name || "未知歌曲";
    common_vendor.index.setNavigationBarTitle({
      title: this.song
    });
    let id = data.id;
    if (id) {
      common_vendor.index.request({
        url: serverUrl + "/song/url?id=" + id,
        success: (res) => {
          if (res.data.code === 200) {
            this.url = res.data.data[0].url;
            if (this.url) {
              audio.src = this.url;
              audio.play();
              this.isPlaying = true;
              audio.onTimeUpdate(() => {
                this.currentTime = audio.currentTime;
                this.duration = audio.duration;
              });
              this.formatTime(audio.currentTime);
            } else {
              common_vendor.index.showToast({
                title: "暂无资源",
                icon: "none",
                duration: 2e3
              });
            }
          }
        },
        error: (err) => {
          console.error("Request Error:", err);
        }
      });
    }
  },
  onUnload() {
    if (audio) {
      audio.stop();
      audio.src = "";
    }
  },
  methods: {
    togglePlay() {
      if (audio) {
        if (this.isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
        this.isPlaying = !this.isPlaying;
      }
    },
    formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },
    seek() {
      if (audio) {
        audio.seek(this.currentTime);
      }
    }
  }
};
if (!Array) {
  const _component_my_icon = common_vendor.resolveComponent("my-icon");
  _component_my_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.list.al ? $data.list.al.picUrl : $data.list.picUrl,
    b: $data.list.al ? $data.list.al.picUrl : $data.list.picUrl,
    c: $data.duration,
    d: $data.currentTime,
    e: common_vendor.o((...args) => $options.seek && $options.seek(...args)),
    f: common_vendor.o($options.togglePlay),
    g: common_vendor.p({
      iconId: $data.isPlaying ? "icon-pause" : "icon-play"
    }),
    h: common_vendor.t($data.song),
    i: common_vendor.t($data.singer),
    j: common_vendor.t($options.formatTime($data.currentTime)),
    k: common_vendor.t($options.formatTime($data.duration))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/uni-app/netEase-cloud/netEase-cloud-music/pages/player/player.vue"]]);
wx.createPage(MiniProgramPage);
