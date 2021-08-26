<template>
	<view class="container">
		<view class="head-common">
			<view class="tr-head" >
				<image  @click="search" src="/static/img/search.png" mode=""></image>
				<input type="text" value="" placeholder="请输入关键词搜索" />
			</view>
		</view>
		<view class="tr-nav">
			<view class="tr-nav-view" v-for="(item,index) in goods_list" :key="index">
				<view @click="tr_active(index)" :class="{'grows': item.isActive}" class="tr-nav-picker">{{item.title}}</view>
			</view>
		</view>
		<view class="tr-coat" v-for="(item,index) in dataList">
			<view class="tr-cont">
				<view class="tr-cont-top">
					<view class="tr-seats">
						单号：{{item.sn}}
					</view>
					<view class="tr-state">
						<image :src=item.imgurl mode=""></image>
					</view>
				</view>
				<view class="tr-city">
					<view class="tr-city-left">
						<view class="tr-city-text">
							{{item.warehouse_area}}
						</view>
						<view class="tr-val">
							{{item.warehouse_name}}
						</view>
					</view>
					<view class="tr-city-img">
						<image src="/static/img/arrow.png" mode=""></image>
					</view>
					<view class="tr-city-right">
						<view class="tr-city-text-one">
							{{item.delivery_area}}
						</view>
						<view class="tr-val-one">
							<!-- {{item.shipping_time}} -->
						</view>
					</view>
				</view>
				<view class="tr-square">
					<view class="tr-square-left">
						方数: {{item.volume}}
					</view>
					<view class="tr-square-right">
						发达时间: {{item.shipping_time}}
					</view>
				</view>
				<view class="tr-press">
					<button @click="pressBtn(ind)" type="default">指派司机</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goods_list: [
					{title: '全部运单',color: '0E2472',isActive: true},
					{title: '待承接',color: '0E2472',isActive: false},
					{title: '运输中',color: '0E2472',isActive: false},
					{title: '已完结',color: '0E2472',isActive: false},
				],
				dataList: {},
				num: 1,
				btnList: [
					
				]
				// cont_list: [
				// 	{seats: '2393936956223',imgurl: '/static/img/undertaken.png',text: '无锡市',val: '无锡仓库',text_one: '上海市',
				// 	val_one: '上海经营部',imgurlaArr: '/static/img/arrow.png',square_text:'15立方',square_time:'2012-04-02',
				// 	press: ['指派司机','确认承接']},
				// 	{seats: '2393936956223',imgurl: '/static/img/delivery.png',text: '无锡市',val: '无锡仓库',text_one: '上海市',
				// 	val_one: '上海经营部',imgurlaArr: '/static/img/arrow.png',square_text:'15立方',square_time:'2012-04-02',
				// 	press: ['提醒发货']},
				// 	{seats: '2393936956223',imgurl: '/static/img/transit.png',text: '无锡市',val: '无锡仓库',text_one: '上海市',
				// 	val_one: '上海经营部',imgurlaArr: '/static/img/arrow.png',square_text:'15立方',square_time:'2012-04-02',
				// 	press: ['运输跟进']},
				// ],
			}
		},
		methods: {
			tr_active(index){
				for (let i=0;i<this.goods_list.length;i++){
					this.goods_list[i].isActive = false
				}
				this.goods_list[index].isActive = true
			},
			pressBtn(ind){
				console.log("---指派司机",ind)
				
			},
			search(){
				sessionStorage.getItem('token')
				uni.request({
				    url: 'http://xxll.5mall.com/mobile/swiper/list_data_shipping.jhtml', 
				    data: {
						// username: this.user,
						// password: this.pass,
						// companyName: 'xxll'
				    },
					method: 'post',
				    header: {
						 'content-type': 'application/x-www-form-urlencoded',
						 // 'Access-Control-Allow-Origin': '*'
				    },
				    success: (res) => { 
						console.log("--1111state",res)
						this.dataList = res.data.objx;
						uni.switchTab({
						    // url: '/pages/list/carrier'
						});
				    }
				});
			}
			
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			console.log("qqq",option); //打印出上个页面传递的参数。
		},
		created () {
			this.search()
			// this.onLoad()
			console.log("$route",this.$route)
			console.log("__$router",this.$router)
		}
		
	}
</script>

<style scoped>
	.container {
		
	}
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
	.tr-nav{
		width: 100%;
		height: 40px;
	}
	.tr-nav-view{
		
	}
	.tr-nav-picker{
		width: 70px;
		height: 40px;
		float: left;
		font-size: 14px;
		text-align: center;
		line-height: 40px;
		margin-left: 19px;
	}
	.grows{
		color: #0E2472;
		border-bottom: 2px solid #0E2472;
	}
	.tr-coat{
		width: 100%;
		height: 200px;
		padding: 15px 15px 0 15px;
		box-sizing: border-box;
		background: #F2F2F2;
	}
	.tr-cont{
		width: 100%;
		height: 180px;
		border-radius: 7px;
		background: white;
	}
	.tr-cont-top{
		width: 100%;
		height: 35px;
	}
	.tr-seats{
		width: 190px;
		height: 35px;
		float: left;
		color: #B7C1D7;
		line-height: 35px;
		text-indent: 15px;
	}
	.tr-state{
		float: right;
	}
	.tr-state image{
		width: 70px;
		height: 35px;
	}
	.tr-city{
		width: 100%;
		height: 55px;
		position: relative;
	}
	.tr-city-left{
		width: 130px;
		height: 55px;
		float: left;
		text-indent: 30px;
	}
	.tr-city-text,.tr-city-text-one{
		width: 100%;
		height: 30px;
		font-weight: bold;
		font-size: 14px;
		line-height: 30px;
		text-align: center;
	}
	.tr-val,.tr-val-one{
		height: 15px;
		line-height: 15px;
		color: #B7C1D7;
		font-size: 14px;
		text-align: center;
	}
	.tr-city-img{
		width: 80px;
		height: 55px;
		float: left;
	}
	.tr-city-img image{
		width: 80px;
		height: 55px;
	}
	.tr-city-right{
		width: 130px;
		height: 55px;
		float: right;
		text-align: right;
		padding-right: 25px;
		box-sizing: border-box;
		position: absolute;
		top: 0;
		right: 0;
	}
	.tr-square{
		width: 100%;
		height: 35px;
		font-size: 14px;
		padding: 0px 0 0 15px;
		box-sizing: border-box;
		border-bottom: 1px solid #B7C1D7;
	}
	.tr-square-left{
		width: 160px;
		height: 35px;
		line-height: 30px;
		float: left;
	}
	.tr-square-right{
		height: 35px;
		line-height: 20px;
		float: left;
	}
	.tr-press{
		width: 100%;
		height: 53px;
		text-align: right;
		padding: 8px 15px 0 0;
		box-sizing: border-box;
	}
	.tr-press button{
		width: 100px;
		height: 38px;
		font-size: 14px;
		border-radius: 20px;
		border: 1px solid #ACACAC;
		display: inline-block;
		margin-left: 15px;
	}
</style>
