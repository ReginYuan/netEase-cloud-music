"use strict";
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/rank/rank.js";
  "./pages/singer/singer.js";
  "./pages/singer-deatils/singer-deatils.js";
  "./pages/rank-deatils/rank-deatils.js";
  "./pages/recommend-details/recommend-details.js";
  "./pages/player/player.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Code/uni-app/netEase-cloud/netEase-cloud-music/App.vue"]]);
const app = common_vendor.createApp(App);
app.config.globalProperties.serverUrl = "http://127.0.0.1:3000";
app.mount("#app");
