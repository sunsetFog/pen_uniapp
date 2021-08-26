<template>
	<view class="assign">
		<arr-com :newCom="design"></arr-com>
		<head-common article='#EEEEEE'></head-common>
		<view class="tr-main" v-for="(item,index) in assignList" :key='index'>
			<view class="tr-main-left">
				<image @click="circle(index)" src="/static/img/circle.png" mode="" v-show='item.active'></image>
				<image @click="hook(index)"  src="/static/img/hook.png" mode="" v-show='item.isActive'></image>
			</view>
			<view class="imgLeft">
				<view class="imgLeftCircle">
					<image :src=item.img mode=""></image>
				</view>
			</view>
			<view class="tr-main-cont">
				<view class="tr-main-cont-one">
					<view class="contName">{{item.name}}</view>
					<view class="contBtn" >{{item.carNumber}}</view>
				</view>
				<view class="tr-main-cont-two">
					<view class="contTextLeft">{{item.deal}}</view>
					<view class="contTextRight">{{item.praise}}</view>
				</view>
				<view class="tr-main-cont-three">
					<image src="/static/img/position.png" mode=""></image>
					<view class="tr-main-cont-three-text">
						{{item.distance}}
					</view>
				</view>
			</view>
			<view class="tr-main-right">
				<image src="/static/img/phone.png" mode=""></image>
			</view>
		</view>
		<view class="footer">
			<button @click="footerBtn" type="default">确定</button>
		</view>
	</view>
</template>

<script>
	import headCommon from '../../../common/head-common'
	import arrCom from '../../../common/arrow/arrow'
	export default {
		components: {headCommon,arrCom},
		data() {
			return {
				design: '指派司机',
				dirver: [
					{active: true,isActive: false,img: '/static/img/ma.png',name: '王国盛',plate: 'J2M125',deal: '已成交480单',praise: '好评95%',distance:'14分钟前距离我 1.4km'},
					{active: true,isActive: false,img: '/static/img/ma.png',name: '王国盛',plate: 'J2M125',deal: '已成交480单',praise: '好评95%',distance:'14分钟前距离我 1.4km'}
				],
				num: 0,
				assignList: '',
				assignPhone: '',
			}
		},
		methods: {
			circle(index){
				for (let i=0;i<this.dirver.length;i++) {
					this.dirver[i].isActive = false
				}
				this.dirver[index].isActive = true
			},
			hook(index){
				for (let i=0;i<this.dirver.length;i++) {
					this.dirver[i].isActive = false
				}
				this.dirver[index].isActive = false
			},
			footerBtn(){
				uni.navigateTo({
				    url: 'new_file'
				});
			}
		},
		created () {
			uni.request({
			    url: 'http://xxll.5mall.com/mobile/swiper/assign_driver.jhtml', 
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
					console.log("--指派state",res)
					this.assignList = res.data.objx;
					this.assignPhone = res.data.objx.phone
					uni.navigateTo({
					    // url: '/pages/list/carrier'
					});
			    }
			});
			
		}
	}
</script>

<style lang="scss" scoped>
	.assign{
		.tr-main{
			width: 100%;
			height: 90px;
			border-bottom: 1px solid #EEEEEE;
			padding: 10px 0 0 0;
			box-sizing: border-box;
			.tr-main-left{
				width: 50px;
				height: 80px;
				float: left;
				position: relative;
				image{
					width: 20px;
					height: 20px;
					position: absolute;
					left: 16px;
					top: 16px;
				}
			}
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
				width: 220px;
				height: 80px;
				float: left;
				padding: 0 0 0 10px;
				box-sizing: border-box;
				.tr-main-cont-one{
					width: 210px;
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
					width: 210px;
					height: 20px;
					color: #6B6666;
					font-size: 13px;
					line-height: 20px;
					.contTextLeft{
						width: 100px;
						height: 20px;
						display: inline-block;
					}
					.contTextRight{
						width: 80px;
						height: 20px;
						display: inline-block;
					}
				}
				.tr-main-cont-three{
					width: 210px;
					height: 20px;
					position: relative;
					image{
						width: 14px;
						height: 14px;
						position: absolute;
						top: 6px;
						left: 0px;
					}
					.tr-main-cont-three-text{
						width: 160px;
						height: 20px;
						line-height: 20px;
						font-size: 13px;
						margin-left: 20px;
						display: inline-block;
					}
				}	
				
			}
			.tr-main-right{
				width: 60px;
				height: 80px;
				float: right;
				position: relative;
				image{
					width: 35px;
					height: 35px;
					position: absolute;
					right: 20px;
					top: 20px;
				}
			}
		}
		.footer{
			width: 100%;
			height: 40px;
			position: fixed;
			bottom: 50px;
			left: 0;
			button{
				width: 90%;
				height: 40px;
				color: white;
				font-size: 15px;
				background: #4C73FF;
			}
		}
	}
	
</style>
