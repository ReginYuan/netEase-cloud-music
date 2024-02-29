<template>
	<!-- 歌单详情 -->
	<view class="recommend-details">
		<image :src="coverImgUrl" mode="aspectFill" class="recommend-details-image"></image>
		<view class="recommend-details-list">
			<navigator class="recommend-details-list-item" v-for="(item,index) in songs" :key="index"
			:url="'/pages/player/player?item=' + encodeURIComponent(JSON.stringify(item))+'&singer='+encodeURIComponent(JSON.stringify(item.ar[0].name))">
				<span class="recommend-details-list-item-text">{{item.name}}</span>
				<span class="recommend-details-list-item-name">{{item.ar[0].name}}</span>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				coverImgUrl: '',
				songs: [],
				name: ''
			}
		},
		onLoad(option) {
			var serverUrl = this.serverUrl || this.$config.serverUrl;
			let data = option.item ? JSON.parse(decodeURIComponent(option.item)) : null;
			let id = data ? data.id : null;
			this.name = data.name || '未知歌单';
			uni.setNavigationBarTitle({
				title: this.name
			});
			if (id) {
				uni.request({
					url: serverUrl + '/playlist/detail?id=' + id,
					success: (res) => {
						if (res.data.code === 200) {
							this.coverImgUrl = res.data.playlist.coverImgUrl;
							this.songs = res.data.playlist.tracks;
						}
					},
					error: (err) => {
						console.error('Request Error:', err);
					}
				});
			}

		},
		methods: {

		}
	}
</script>

<style>
	@import url(./index.css);
</style>