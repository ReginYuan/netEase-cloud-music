<template>
	<view class="rank">
		<view class="rank-conent">
			<view class="rank-conent-list">
				<navigator class="rank-conent-list-item" v-for="item in rankList" :key="item"
					:url="'/pages/rank-deatils/rank-deatils?item=' + encodeURIComponent(JSON.stringify(item))">
					<view class="rank-conent-list-item-left">
						<image :src="item.coverImgUrl" mode=""></image>
					</view>
					<view class="rank-conent-list-item-right" v-if="item && item.rank.length>0 ">
						<view class="rank-conent-list-item-right-song" v-for="(item2, index2) in item.rank"
							:key="index2">
							<span class="rank-conent-list-item-right-song-index">{{index2 + 1}}</span>
							<span class="rank-conent-list-item-right-song-name">{{item2.name}}</span>
						</view>
					</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rankList: [],
			}
		},
		onLoad() {
			var serverUrl = this.serverUrl || this.$config.serverUrl;
			var NUMBER = [0, 1, 2, 3, 4, 22, 23]
			for (let i = 0; i < NUMBER.length; i++) {
				uni.request({
					url: serverUrl + '/top/list?idx=' + NUMBER[i],
					method: 'GET',
					success: (res) => {
						if (res.data.code === 200) {
							let list = res.data.playlist
							list.rank = res.data.playlist.tracks.slice(0, 3)
							this.rankList.push(list)
						}
					}
				})
			}
		},
		methods: {

		}
	}
</script>

<style>
	@import url(./index.css);
</style>