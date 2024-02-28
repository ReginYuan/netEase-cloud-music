<template>
	<view class="singer-deatils">
		<image :src="users.img1v1Url" mode="aspectFill" class="singer-deatils-image"></image>
		<view class="singer-deatils-list">
			<navigator class="singer-deatils-list-item" v-for="(item,index) in hotSongsList" :key="index"
			:url="'/pages/player/player?item=' + encodeURIComponent(JSON.stringify(item))"
			>
				<span class="singer-deatils-list-item-text">{{item.al.name}}</span>
				<span class="singer-deatils-list-item-name">{{item.ar[0].name}}</span>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				users: {
					name: ''
				},
				hotSongsList: []
			}
		},
		onLoad(option) {
			var serverUrl = this.serverUrl || this.$config.serverUrl;
			let data = option.item ? JSON.parse(decodeURIComponent(option.item)) : null;
			let id = data ? data.id : null;
			if (id) {
				uni.request({
					url: serverUrl + '/artists?id=' + id,
					success: (res) => {
						if (res.data.code === 200) {
							this.users = res.data.artist;
							this.hotSongsList = res.data.hotSongs;
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