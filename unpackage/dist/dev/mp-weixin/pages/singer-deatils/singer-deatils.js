"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      users: {
        name: ""
      },
      hotSongsList: []
    };
  },
  onLoad(option) {
    var serverUrl = this.serverUrl || this.$config.serverUrl;
    let data = option.item ? JSON.parse(decodeURIComponent(option.item)) : null;
    let id = data ? data.id : null;
    if (id) {
      common_vendor.index.request({
        url: serverUrl + "/artists?id=" + id,
        success: (res) => {
          if (res.data.code === 200) {
            this.users = res.data.artist;
            this.hotSongsList = res.data.hotSongs;
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
    a: $data.users.img1v1Url,
    b: common_vendor.f($data.hotSongsList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.al.name),
        b: common_vendor.t(item.ar[0].name),
        c: index,
        d: "/pages/player/player?item=" + encodeURIComponent(JSON.stringify(item))
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/uni-app/netEase-cloud/netEase-cloud-music/pages/singer-deatils/singer-deatils.vue"]]);
wx.createPage(MiniProgramPage);
