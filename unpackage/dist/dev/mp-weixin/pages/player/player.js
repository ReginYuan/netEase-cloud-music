"use strict";
const common_vendor = require("../../common/vendor.js");
const audio = common_vendor.index.createInnerAudioContext();
const _sfc_main = {
  data() {
    return {
      url: "",
      list: []
    };
  },
  onLoad(option) {
    var serverUrl = this.serverUrl || this.$config.serverUrl;
    let song = option.item ? JSON.parse(decodeURIComponent(option.item)) : null;
    this.list = song;
    common_vendor.index.setNavigationBarTitle({
      title: this.list.name || "未知歌曲"
    });
    console.log("this.list", this.list);
    let id = song.id;
    if (id) {
      common_vendor.index.request({
        url: serverUrl + "/song/url?id=" + id,
        success: (res) => {
          if (res.data.code === 200) {
            this.url = res.data.data[0].url;
            if (this.url) {
              audio.src = this.url;
              audio.play();
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
    audio.stop();
  },
  methods: {
    toggle() {
      audio.pause();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.list.al ? $data.list.al.picUrl : $data.list.picUrl,
    b: $data.list.al ? $data.list.al.picUrl : $data.list.picUrl
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/uni-app/netEase-cloud/netEase-cloud-music/pages/player/player.vue"]]);
wx.createPage(MiniProgramPage);
