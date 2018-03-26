<template>
	<div class="header-top">
		<vHeader></vHeader>
		<div class="header-content">
			<h2>TEAM</h2>
			<p><span>精英团队，贴心服务</span></p>
		</div>
		<!-- 业务详情模块 -->
		<div class="team-content">
			<div class="title"><h2>精英团队，贴心服务</h2></div>
			<div class="content">
				<!-- 团队列表模块 -->
				<teamList></teamList>
			</div>
		</div>
		<vFooter></vFooter>
	</div>
</template>
<script>
	import vHeader from './header'
	import teamList from './teamList'
	import vFooter from './footer'
	export default{
		components:{
			vHeader,
			teamList,
			vFooter
		}
	}
</script>
<style scoped lang='less'>
@media screen and (min-width:1441px){
	.header-top{
		background:url('../assets/index_header_bg.jpg') no-repeat center center;
		height:660px;
		.header-content{
			height:660px;
			p{
				font-size:14px;
			}
		}
	}
}
@media screen and (max-width:1440px){
	.header-top{
		background:url('../assets/index_header_bg_1423.jpg') no-repeat center center;
		height:550px;
		.header-content{
			height:550px;
			p{
				font-size:12px;
			}
		}
	}
}
	.header-top{
		width:100%;
		.header-content{
			width:100%;
			max-width:1440px;
			margin:0 auto;
			position:relative;
			overflow:auto;
			text-align:center;
			color:#fff;
			h2{
				font-family:'义启未来体';
				font-size:60px;
				margin-bottom:20px;
				margin-top:230px;
			}
			p{
				letter-spacing:4px;
				span{
					background:rgba(0,0,0,0.8);
					padding:10px 50px;
				}
			}
		}	
	}
	.team-content{
		margin-top:150px;
		margin-bottom:100px;
		.title{
			width:100%;
			eight:130px;
			background:url('../assets/title_bg_000.png') no-repeat center top;
			font-family:'义启未来体';
			margin-bottom:50px;
			h2{
				line-height:150px;
				font-size:30px;
				text-align:center;
			}
		}
		.content{
			width:100%;
			max-width:1440px;
			margin:0 auto;
		}
	}
</style>