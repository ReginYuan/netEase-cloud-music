<template>
	<!-- <text class="iconfont" :class="[iconId,iconColor]" :style="{fontSize:`${iconSize}rpx`}" @tap="myClick"></text> -->
	<image :src="urlString" class="iconfont" :style="{fontSize:`${iconSize}rpx`}" @tap="myClick"></image>
</template>

<script>
	export default {
		props: {
			urlString: {
				type: String,
				default:''
			},
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
				default: 45
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
		background-image: url('~@/static/audio/pause.png');
		background-size: 100%;
	}

	.icon-play {
		background-image: url('~@/static/audio/play.png');
		background-size: 100%;
	}
</style>