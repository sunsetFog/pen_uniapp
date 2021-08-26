<template>
	<view class="maintain">
		<arrow-com :newCom="desmain"></arrow-com>
		<view class="tr-head">
			<image class="searchImg" src="/static/img/search.png" mode=""></image>
			<input type="text" value="" placeholder="请输入关键词搜索" />
			<view @click="addedBtn" class="added">
				<image src="/static/img/jia.png" mode=""></image>
				新增
			</view>
		</view>
		<view class="tr-main" v-for="(item,index) in mainList" :key='index'>
			<view class="imgLeft">
				<view class="imgLeftCircle">
					<image :src=item.img mode=""></image>
				</view>
			</view>
			<view class="tr-main-cont">
				<view class="tr-main-cont-one">
					<view class="contName">{{item.name}}</view>
					<view class="contBtn" >{{item.car_number}}</view>
				</view>
				<view class="tr-main-cont-two">
					<view class="contText">手机号码：{{item.phone}}</view>
				</view>
				<view class="tr-main-cont-three">
						身份证号码：{{item.id_number}}
				</view>
			</view>
		</view>
		<view class="letterTag">
			<view class="list" v-for="(data,inde) in letTag" :key="inde+'a'">
				{{data}}
			</view>
			
		</view>
		<view class="footer">
			<view class="footer-left">
				<view class="footer-img">
					<image  src="/static/img/home.png" mode=""></image>
					<image v-show="nameActive" src="/static/img/home-active.png" mode=""></image>
				</view>
				<view class="text">
					主页
				</view>
			</view>
			<view class="footer-right">
				<view class="footerImg">
					<image src="/static/img/user.png" mode=""></image>
					<image v-show="userActive" src="/static/img/user-active.png" mode=""></image>
				</view>
				<view :class="{textUser: 'grows'}" class="textUser">
					我的
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import arrowCom from '../../../common/arrow/arrow'
	export default {
		components: {arrowCom},
		data() {
			return {
				desmain: '司机维护',
				dirver: [
					{img: '/static/img/ma.png',name: '王国盛',plate: 'J2M125',phoneNum: '18316554831',distance:'440782199502135213'},
					{img: '/static/img/ma.png',name: '王国盛',plate: 'J2M125',phoneNum: '18316554831',distance:'440782199502135213'}
				],
				letTag: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
				mainList: '',
				nameActive: false,
				userActive: false,
				
			
			}
		},
		methods: {
			addedBtn(){
				uni.navigateTo({
				    url: '/pages/logistics/maintain_driver/newAdded'
				});
				console.log("111")
			}
		},
		created() {
			uni.request({
			    url: 'http://xxll.5mall.com/mobile/swiper/list_data_driverinfo.jhtml', 
			    data: {
					// username: this.user,
					// password: this.pass,
					companyName: 'xxll'
			    },
				method: 'post',
			    header: {
					 'content-type': 'application/x-www-form-urlencoded',
					 'Access-Control-Allow-Origin': '*'
			    },
			    success: (res) => { 
					console.log("---res",res)
					this.mainList = res.data.objx;
					// this.assignPhone = res.data.objx.phone
					uni.navigateTo({
					    // url: '/pages/list/carrier'
					});
			    }
			});
		}
		
	}
</script>

<style lang="scss" scoped>
	.maintain{
		
		.tr-head{
			width: 100%;
			height: 50px;
			background: #EEEEEE;
			padding: 7px 8px 0 0;
			box-sizing: border-box;
			position: relative;
			input{
				width: 70%;
				height: 33px;
				font-size: 14px;
				border-radius: 20px;
				text-indent: 30px;
				background: white;
				position: absolute;
				top: 9px;
				left: 19px;
			}
			.searchImg{
				width: 25px;
				height: 25px;
				position: absolute;
				top: 13px;
				left: 25px;
				z-index: 10;
			}
			.added{
				width: 60px;
				height: 35px;
				line-height: 35px;
				text-align: center;
				font-size: 13px;
				text-indent: 17px;
				color: white;
				background: #4C73FF;
				float: right;
				position: relative;
				image{
					width: 16px;
					height: 16px;
					position: absolute;
					top: 10px;
					left: 6px;
				}
			}
		}
		.tr-main{
			width: 100%;
			height: 90px;
			border-bottom: 1px solid #EEEEEE;
			padding: 10px 0 0 23px;
			box-sizing: border-box;
			.imgLeft{
				width: 43px;
				height: 80px;
				float: left;
				padding: 8px 0 0 0;
				box-sizing: border-box;
				.imgLeftCircle{
					width: 38px;
					height: 38px;
					border-radius: 50%;
					image{
						width: 38px;
						height: 38px;
					}
				}
			}
			.tr-main-cont{
				width: 250px;
				height: 80px;
				float: left;
				padding: 0 0 0 10px;
				box-sizing: border-box;
				.tr-main-cont-one{
					width: 240px;
					height: 30px;
					position: relative;
					.contName{
						width: 55px;
						height: 30px;
						font-size: 14px;
						line-height: 35px;
						display: inline-block;
					}
					.contBtn{
						width: 65px;
						height: 20px;
						line-height: 20px;
						text-align: center;
						font-size: 12px;
						display: inline-block;
						color: #4C73FF;
						border-radius: 5px;
						position: absolute;
						top: 7px;
						left: 55px;
						background: #E9EEFF;
					}
				}
				.tr-main-cont-two{
					width: 240px;
					height: 20px;
					color: #6B6666;
					font-size: 13px;
					line-height: 20px;
					.contTextLeft{
						width: 100%;
						height: 20px;
					}
				}
				.tr-main-cont-three{
					width: 240px;
					height: 20px;
					line-height: 23px;
					font-size: 13px;
				}	
				
			}
		}
		.letterTag{
			font-size: 12px;
			position: fixed;
			right: 0px;
			top: 90px;
			word-wrap:break-word;
			word-break:normal; 
			.list{
				width: 20px;
				height: 22px;
				line-height: 21px;
				text-align: center;
			}
		}
		.footer{
			width: 100%;
			height: 50px;
			border-top: 1px solid #9D9E9D;
			position: fixed;
			bottom: 0;
			right: 0;
			.footer-left{
				width: 50%;
				height: 50px;
				float: left;
				position: relative;
				.footer-img{
					width: 100%;
					height: 25px;
					image{
						width: 27px;
						height: 27px;
						display: block;
						position: absolute;
						top: 3px;
						left: 43%;
					}
				}
				.text{
					width: 100%;
					height: 25px;
					text-align: center;
					line-height: 31px;
					color: #9D9E9D;
					font-size: 15px;
				}
			}
			.footer-right{
				width: 50%;
				height: 50px;
				float: left;
				position: relative;
				.footerImg{
					width: 100%;
					height: 25px;
					image{
						width: 27px;
						height: 27px;
						display: block;
						position: absolute;
						top: 3px;
						left: 43%;
					}
				}
				.textUser{
					width: 100%;
					height: 25px;
					text-align: center;
					line-height: 31px;
					color: #9D9E9D;
					font-size: 15px;
				}	
				
			}
		}
	}
</style>
