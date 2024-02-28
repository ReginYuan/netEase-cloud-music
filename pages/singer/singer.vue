<template>
	<view class="singer">
		<view class="singer-list">
			<navigator class="singer-list-item" v-for="(item,index) in singerList" :key="index"
				:url="'/pages/singer-deatils/singer-deatils?item=' + encodeURIComponent(JSON.stringify(item))">
				<image :src="item.img1v1Url" mode="" class="singer-list-item-image"></image>
				<span class="singer-list-item-name">{{item.name}}</span>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				singerList: []
			}
		},
		onLoad() {
			var serverUrl = this.serverUrl || this.$config.serverUrl;
			uni.request({
				url: serverUrl + '/top/artists?limit=80',
				success: (res) => {
					if (res.data.code === 200) {
						this.singerList = res.data.artists
					}
				}
			})
		},
		methods: {}
	}
</script>

<style>
	@import url(./index.css);
</style>