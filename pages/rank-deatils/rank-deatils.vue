<template>
	<!-- 排行榜详情 -->
	<view class="rank-deatils">
		<image :src="songs.coverImgUrl" mode="aspectFill" class="rank-deatils-image"></image>
		<view class="rank-deatils-list" v-if="songs.tracks.length>0">
			<navigator class="rank-deatils-list-item" v-for="(item,index) in songs.tracks" :key="index"
				:url="'/pages/player/player?item=' + encodeURIComponent(JSON.stringify(item))+'&singer='+encodeURIComponent(JSON.stringify(item.ar[0].name))">
				<span class="rank-deatils-list-item-text">{{item.al.name}}</span>
				<span class="rank-deatils-list-item-name">{{item.ar[0].name}}</span>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				songs: {
					coverImgUrl: ''
				},
				name: ''
			}
		},
		onLoad(option) {
			var serverUrl = this.serverUrl || this.$config.serverUrl;
			let data = option.item ? JSON.parse(decodeURIComponent(option.item)) : null;
			this.name = data.name || '未知榜单';
			uni.setNavigationBarTitle({
				title: this.name
			});
			this.songs = data
		},
		methods: {

		}
	}
</script>

<style>
	@import url(./index.css);
</style>