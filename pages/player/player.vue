<template>
	<view class="player">
		<view class="player-background">
			<view class="player-background-filter"></view>
			<image :src="list.al ? list.al.picUrl : list.picUrl" class="player-background-image"></image>
		</view>
		<view class="player-middle">
			<view class="player-middle-box">
				<view class="player-middle-box-cdBox">
					<view class="player-middle-box-cdBox-cd">
						<image :src="list.al ? list.al.picUrl : list.picUrl" mode=""
							class="player-middle-box-cdBox-cd-image"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- <audio  controls class="player-audio"></audio> -->
		<!-- <audio :src="url" controls autoplay ></audio> -->
	</view>
</template>

<script>
	const audio = uni.createInnerAudioContext();
	export default {
		data() {
			return {
				url: '',
				list: []
			}
		},
		onLoad(option) {
			var serverUrl = this.serverUrl || this.$config.serverUrl;
			let song = option.item ? JSON.parse(decodeURIComponent(option.item)) : null;
			this.list = song;
			// 设置页面标题为 "动态标题"
			uni.setNavigationBarTitle({
				title: this.list.name || '未知歌曲'
			});
			console.log('this.list', this.list)
			let id = song.id;
			if (id) {
				uni.request({
					url: serverUrl + '/song/url?id=' + id,
					success: (res) => {
						if (res.data.code === 200) {
							this.url = res.data.data[0].url;
							if (this.url) {
								audio.src = this.url;
								audio.play()
							} else {
								uni.showToast({
									title: '暂无资源',
									icon: 'none',
									duration: 2000
								})
							}
						}
					},
					error: (err) => {
						console.error('Request Error:', err);
					}
				});
			}
		},
		onUnload() {
			// 停止音频播放
			audio.stop()
		},
		methods: {
			toggle() {
				audio.pause()
			}
		}
	}
</script>

<style>
	@import url(index.css);
</style>