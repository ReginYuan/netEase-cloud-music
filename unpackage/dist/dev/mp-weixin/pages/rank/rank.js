"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      rankList: []
    };
  },
  onLoad() {
    var serverUrl = this.serverUrl || this.$config.serverUrl;
    var NUMBER = [0, 1, 2, 3, 4, 22, 23];
    for (let i = 0; i < NUMBER.length; i++) {
      common_vendor.index.request({
        url: serverUrl + "/top/list?idx=" + NUMBER[i],
        method: "GET",
        success: (res) => {
          if (res.data.code === 200) {
            let list = res.data.playlist;
            list.rank = res.data.playlist.tracks.slice(0, 3);
            this.rankList.push(list);
          }
        }
      });
    }
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.rankList, (item, k0, i0) => {
      return common_vendor.e({
        a: item.coverImgUrl,
        b: item && item.rank.length > 0
      }, item && item.rank.length > 0 ? {
        c: common_vendor.f(item.rank, (item2, index2, i1) => {
          return {
            a: common_vendor.t(index2 + 1),
            b: common_vendor.t(item2.name),
            c: index2
          };
        })
      } : {}, {
        d: item,
        e: "/pages/rank-deatils/rank-deatils?item=" + encodeURIComponent(JSON.stringify(item))
      });
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/uni-app/netEase-cloud/netEase-cloud-music/pages/rank/rank.vue"]]);
wx.createPage(MiniProgramPage);
