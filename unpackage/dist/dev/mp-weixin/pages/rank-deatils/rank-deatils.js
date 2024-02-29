"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      songs: {
        coverImgUrl: ""
      },
      name: ""
    };
  },
  onLoad(option) {
    this.serverUrl || this.$config.serverUrl;
    let data = option.item ? JSON.parse(decodeURIComponent(option.item)) : null;
    this.name = data.name || "未知榜单";
    common_vendor.index.setNavigationBarTitle({
      title: this.name
    });
    this.songs = data;
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.songs.coverImgUrl,
    b: $data.songs.tracks.length > 0
  }, $data.songs.tracks.length > 0 ? {
    c: common_vendor.f($data.songs.tracks, (item, index, i0) => {
      return {
        a: common_vendor.t(item.al.name),
        b: common_vendor.t(item.ar[0].name),
        c: index,
        d: "/pages/player/player?item=" + encodeURIComponent(JSON.stringify(item)) + "&singer=" + encodeURIComponent(JSON.stringify(item.ar[0].name))
      };
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/uni-app/netEase-cloud/netEase-cloud-music/pages/rank-deatils/rank-deatils.vue"]]);
wx.createPage(MiniProgramPage);
