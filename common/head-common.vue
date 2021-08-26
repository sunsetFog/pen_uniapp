<template>
	<view class="head-common">
		<view class="tr-head" :style="{background: article}">
			<image  src="/static/img/search.png" mode=""></image>
			<input type="text" value="" placeholder="请输入关键词搜索" />
		</view>
	</view>
</template>

<script>
	export default {
		props: ['article'],
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.tr-head{
		width: 100%;
		height: 50px;
		background: #4C73FF;
		position: relative;
	}
	.tr-head input{
		width: 90%;
		height: 33px;
		font-size: 14px;
		border-radius: 20px;
		text-indent: 30px;
		background: white;
		position: absolute;
		top: 9px;
		left: 19px;
	}
	.tr-head image{
		width: 25px;
		height: 25px;
		position: absolute;
		top: 13px;
		left: 25px;
		z-index: 10;
	}
</style>
