<template>
	<view class="user">
		<view class="top">
			<image class="setting" src="/static/img/seting.png" mode=""></image>
			<view class="cont">
				<view class="cont-left">
					<image src="/static/img/username.png" mode=""></image>
				</view>
				<view class="cont-right">
					<view class="cont-right-name">
						张晓红
					</view>
					<view class="cont-right-data">
						合同截至有限日期：2021-4-31
					</view>
				</view>
			</view>
		</view>
		<view class="title">
			其他功能
		</view>
		<view class="main" >
			<view class="merit" @click="neritBtn(index)" v-for="(item,index) in dataList" :key="index">
				<view class="merit-img">
					<image :src=item.img mode=""></image>
				</view>
				<view class="merit-text">
					{{item.title}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [
					{img:'/static/img/dir.png',title: '司机维护'},
					{img:'/static/img/Waybill.png',title: '运单跟进'},
					{img:'/static/img/costs.png',title: '费用查看'},
				]
			}
		},
		methods: {
			neritBtn(index){
				if (index == 0) {
					console.log("111")
					uni.navigateTo({
					    url: '/pages/logistics/maintain_driver/maintain'
					});
				}
			}
			
		}
	}
</script>

<style lang="scss" scoped>
.user{
	width: 100%;
	height: 100%;
	.top{
		width: 100%;
		height: 110px;
		background: #4D74FF;
		padding: 30px 0 0 10px;
		position: relative;
		.setting{
			width: 25px;
			height: 25px;
			position: absolute;
			top: 7px;
			right: 20px;
		}
		.cont{
			width: 100%;
			height: 60px;
			.cont-left{
				width: 60px;
				height: 60px;
				float: left;
				image{
					width: 60px;
					height: 60px;
					border-radius: 50%;
				}
			}
			.cont-right{
				width: 250px;
				height: 60px;
				float: left;
				text-indent: 7px;
				color: white;
				.cont-right-name{
					height: 30px;
					line-height: 35px;
				}
				.cont-right-data{
					height: 30px;
					line-height: 25px;
				}
			}
		}
	}
	.title{
		width: 100%;
		height: 50px;
		font-size: 15px;
		font-weight: bold;
		line-height: 50px;
		text-indent: 28px;
		background: #F2F2F2;
	}
	.main{
		width: 100%;
		height: 470px;
		background: #F2F2F2;
		.merit{
			width: 85px;
			height: 85px;
			background: white;
			border-radius: 5px;
			margin-left: 28px;
			display: inline-block;
			.merit-img{
				width: 85px;
				height: 50px;
				position: relative;
				image{
					width: 40px;
					height: 40px;
					position: absolute;
					top: 10px;
					left: 26%;
				}
			}
			.merit-text{
				width: 85px;
				height: 35px;
				font-size: 15px;
				line-height: 28px;
				text-align: center;
			}
		}
	}
}	
</style>
