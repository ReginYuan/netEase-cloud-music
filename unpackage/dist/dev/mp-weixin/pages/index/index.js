"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      swiperList: [],
      recommendList: [],
      musicList: []
    };
  },
  onLoad() {
    var serverUrl = this.serverUrl || this.$config.serverUrl;
    common_vendor.index.request({
      url: serverUrl + "/banner",
      method: "GET",
      success: (res) => {
        if (res.data.code === 200) {
          this.swiperList = res.data.banners;
        }
      }
    });
    common_vendor.index.request({
      url: serverUrl + "/personalized",
      method: "GET",
      success: (res) => {
        if (res.data.code === 200) {
          this.recommendList = res.data.result;
        }
      }
    });
    common_vendor.index.request({
      url: serverUrl + "/personalized/newsong",
      method: "GET",
      success: (res) => {
        if (res.data.code === 200) {
          this.musicList = res.data.result.slice(1);
        }
      }
    });
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.swiperList, (item, index, i0) => {
      return {
        a: item.imageUrl,
        b: index
      };
    }),
    b: $data.recommendList.length > 0
  }, $data.recommendList.length > 0 ? {
    c: common_vendor.f($data.recommendList, (item, index, i0) => {
      return {
        a: item.picUrl,
        b: common_vendor.t(item.name),
        c: index,
        d: "/pages/recommend-details/recommend-details?item=" + encodeURIComponent(JSON.stringify(item))
      };
    })
  } : {}, {
    d: $data.musicList.length > 0
  }, $data.musicList.length > 0 ? {
    e: common_vendor.f($data.musicList, (item, index, i0) => {
      return {
        a: item.song.album.picUrl,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.song.artists[0].name),
        d: index,
        e: "/pages/player/player?item=" + encodeURIComponent(JSON.stringify(item)) + "&singer=" + encodeURIComponent(JSON.stringify(item.song.artists[0].name))
      };
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/uni-app/netEase-cloud/netEase-cloud-music/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
