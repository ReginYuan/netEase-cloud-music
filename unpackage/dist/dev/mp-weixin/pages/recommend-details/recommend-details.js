"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      coverImgUrl: "",
      songs: [],
      name: ""
    };
  },
  onLoad(option) {
    var serverUrl = this.serverUrl || this.$config.serverUrl;
    let data = option.item ? JSON.parse(decodeURIComponent(option.item)) : null;
    let id = data ? data.id : null;
    this.name = data.name || "未知歌单";
    common_vendor.index.setNavigationBarTitle({
      title: this.name
    });
    if (id) {
      common_vendor.index.request({
        url: serverUrl + "/playlist/detail?id=" + id,
        success: (res) => {
          if (res.data.code === 200) {
            this.coverImgUrl = res.data.playlist.coverImgUrl;
            this.songs = res.data.playlist.tracks;
          }
        },
        error: (err) => {
          console.error("Request Error:", err);
        }
      });
    }
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.coverImgUrl,
    b: common_vendor.f($data.songs, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.ar[0].name),
        c: index,
        d: "/pages/player/player?item=" + encodeURIComponent(JSON.stringify(item)) + "&singer=" + encodeURIComponent(JSON.stringify(item.ar[0].name))
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/uni-app/netEase-cloud/netEase-cloud-music/pages/recommend-details/recommend-details.vue"]]);
wx.createPage(MiniProgramPage);
