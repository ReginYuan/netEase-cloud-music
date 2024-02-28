"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      singerList: []
    };
  },
  onLoad() {
    var serverUrl = this.serverUrl || this.$config.serverUrl;
    common_vendor.index.request({
      url: serverUrl + "/top/artists?limit=80",
      success: (res) => {
        if (res.data.code === 200) {
          this.singerList = res.data.artists;
        }
      }
    });
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.singerList, (item, index, i0) => {
      return {
        a: item.img1v1Url,
        b: common_vendor.t(item.name),
        c: index,
        d: "/pages/singer-deatils/singer-deatils?item=" + encodeURIComponent(JSON.stringify(item))
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/uni-app/netEase-cloud/netEase-cloud-music/pages/singer/singer.vue"]]);
wx.createPage(MiniProgramPage);
