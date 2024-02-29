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
 		<view class="player-audio">
 			<slider block-size="5" activeColor="#fff" backgroundColor="#eef2f3" :max="duration" :value="currentTime"
 				@change="seek" class="player-audio-progress" />
 			<view class="player-audio-controls">
 				<my-icon :urlString="isPlaying ? '../../static/audio/pause.png':'../../static/audio/play.png'" class="player-audio-controls-image"
 					@my-click="togglePlay"></my-icon>
 				<view class="player-audio-controls-text">
 					<view class="player-audio-controls-text-left">
 						<span class="player-audio-controls-text-left-song">{{song}}</span>
 						<span class="player-audio-controls-text-left-singer">{{singer}}</span>
 					</view>
 					<text class="player-audio-controls-text-right">{{ formatTime(currentTime) }} /
 						{{ formatTime(duration) }}</text>
 				</view>
 			</view>
 		</view>
 	</view>
 </template>


 <script>
 	import myIcon from '../../components/myIcon.vue';
 	const audio = uni.createInnerAudioContext();
 	export default {
 		components: {
 			myIcon
 		},
 		data() {
 			return {
 				url: '',
 				list: [],
 				isPlaying: false,
 				currentTime: 0,
 				duration: 0,
 				song: '',
 				singer: ''
 			}
 		},
 		onLoad(option) {
 			var serverUrl = this.serverUrl || this.$config.serverUrl;
 			let data = option.item ? JSON.parse(decodeURIComponent(option.item)) : null;
 			let singer = option.item ? JSON.parse(decodeURIComponent(option.singer)) : null;
 			this.singer = singer || "未知歌手"
 			this.list = data;
 			this.song = this.list.name || '未知歌曲';
 			uni.setNavigationBarTitle({
 				title: this.song
 			});
 			let id = data.id;
 			if (id) {
 				uni.request({
 					url: serverUrl + '/song/url?id=' + id,
 					success: (res) => {
 						if (res.data.code === 200) {
 							this.url = res.data.data[0].url;
 							if (this.url) {
 								audio.src = this.url;
 								audio.play();
 								this.isPlaying = true;
 								audio.onTimeUpdate(() => {
 									this.currentTime = audio.currentTime;
 									this.duration = audio.duration;
 								});
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
 			if (audio) {
 				audio.stop();
 			}
 		},
 		methods: {
 			togglePlay() {
 				if (audio) {
 					if (this.isPlaying) {
 						audio.pause();
 					} else {
 						audio.play();
 					}
 					this.isPlaying = !this.isPlaying;
 				}
 			},
 			formatTime(time) {
 				const minutes = Math.floor(time / 60);
 				const seconds = Math.floor(time % 60);
 				return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
 			},
 			seek() {
 				if (audio) {
 					audio.seek(this.currentTime);
 				}
 			}
 		}
 	};
 </script>


 <style>
 	@import url(index.css);
 </style>