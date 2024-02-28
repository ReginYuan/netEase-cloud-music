<template>
	<view class="page">
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<view class="swiper-item">
					<image class="swiper-item-image" :src="item.imageUrl" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
		<scroll-view scroll-y="true" class="page-recommend">
			<view class="page-recommend-text">
				推荐歌单
			</view>
			<view class="page-recommend-list" v-if="recommendList.length>0">
				<navigator v-for="(item,index) in recommendList" :key="index" class="page-recommend-list-item"
					:url="'/pages/recommend-details/recommend-details?item=' + encodeURIComponent(JSON.stringify(item))">
					<image class="page-recommend-list-item-image" :src="item.picUrl" mode=""></image>
					<span class="page-recommend-list-item-text">{{item.name}}</span>
				</navigator>
			</view>
			<view class="page-recommend-text">
				推荐歌曲
			</view>
			<view class="page-recommend-list" v-if="musicList.length>0">
				<navigator v-for="(item,index) in musicList" :key="index" class="page-recommend-list-item"
					:url="'/pages/player/player?item=' + encodeURIComponent(JSON.stringify(item))">
					<image class="page-recommend-list-item-image" :src="item.song.album.picUrl" mode=""></image>
					<span class="page-recommend-list-item-text">{{item.name}}</span>
					<br />
					<span class="page-recommend-list-item-text">{{item.song.artists[0].name}}</span>
				</navigator>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [],
				recommendList: [],
				musicList: []
			}
		},
		onLoad() {
			var serverUrl = this.serverUrl || this.$config.serverUrl;
			var NUMBER = [0, 1, 2, 3, 4, 22, 23]
			uni.request({
				url: serverUrl + '/banner',
				method: 'GET',
				success: (res) => {
					if (res.data.code === 200) {
						this.swiperList = res.data.banners
					}
				}
			})
			uni.request({
				url: serverUrl + '/personalized',
				method: 'GET',
				success: (res) => {
					if (res.data.code === 200) {
						this.recommendList = res.data.result
					}
				}
			})
			uni.request({
				url: serverUrl + '/personalized/newsong',
				method: 'GET',
				success: (res) => {
					if (res.data.code === 200) {
						this.musicList = res.data.result.slice(1)
					}
				}
			})

		},
		methods: {

		}
	}
</script>

<style>
	@import url(./index.css);
</style>