"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: {
    iconId: {
      type: String,
      default: ""
    },
    iconColor: {
      type: String,
      default: "text-dark"
    },
    iconSize: {
      type: [Number, String],
      default: 20
    }
  },
  methods: {
    myClick() {
      this.$emit("my-click");
    }
  },
  watch: {
    "iconId": {
      handler(newVal, oldVal) {
      },
      deep: true
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($props.iconId),
    b: common_vendor.n($props.iconColor),
    c: `${$props.iconSize}rpx`,
    d: common_vendor.o((...args) => $options.myClick && $options.myClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eaed518e"], ["__file", "D:/Code/uni-app/netEase-cloud/netEase-cloud-music/components/myIcon.vue"]]);
wx.createComponent(Component);
