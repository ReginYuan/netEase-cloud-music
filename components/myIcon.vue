<template>
	<view class="iconfont" :class="[iconId,iconColor]" :style="{fontSize:`${iconSize}rpx`}" @tap="myClick"></view>
</template>

<script>
	export default {
		props: {
			iconId: {
				type: String,
				default: ''
			},
			iconColor: {
				type: String,
				default: 'text-dark'
			},
			iconSize: {
				type: [Number, String],
				default: 20
			}
		},
		methods: {
			myClick() {
				this.$emit('my-click')
			}
		},
		watch: {
			"iconId": {
				handler(newVal, oldVal) {
					console.log("新的值:" + newVal);
					console.log("旧的值:" + oldVal);
				},
				deep: true
			}
		}
	}
</script>

<style scoped>
	.iconfont {
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	}

	.icon-pause {
		width: 80rpx;
		height: 80rpx;
		background-image: url('../static/audio/pause.png');
		background-size: 100%;
		background-size: cover;
	}

	.icon-play {
		width: 80rpx;
		height: 80rpx;
		background-image: url('../static/audio/play.png');
		background-size: 100%;
		background-size: cover;
	}
</style>