<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* @import "wxcomponents/element-ui/lib/theme-chalk/index.css"; */
	*{
		margin: 0;
		padding: 0;
	} 
	.uni-app,.uni-page-head, .uni-page-head, .uni-placeholder{
		display: none;
	}
	
</style>
