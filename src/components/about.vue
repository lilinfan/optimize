<template>
	<div class="header-top">
		<vHeader></vHeader>
		<div class="header-content">
			<h2>ABOUT US</h2>
			<p><span>'华城优化设计' —— 专业的技术团队，专业的操作流程，为您的项目规划、方案、施工图<br>提供更加合理的优化意见，让您更加省钱，省力，省心</span></p>
		</div>
		<!-- 关于我们模块 -->
		<div class="about-content">
			<div class="title"><h2>公司简介</h2></div>
			<div class="content">
				<h3>华城设计优化是一家致力于建筑设计咨询、建筑设计监理、建筑结构优化设计等，以专业化和精细化的工作模式开展设计管<br>理和设计优化的专业顾问机构。<br>
我们立足于房地产公司设计管理和成本控制的延伸和补充，以国内先进的设计管理思路开展设计管理及设计优化工作，站在专业<br>的角度，使建筑结构设计合理、经济，<br>
为业主单位节省了大量的经济成本，获得了业内人士的广泛好评。</h3>
				<h4><img src="../assets/a_icon.png" alt="">价值理念<span>专业铸就精品，科学创造价值</span></h4>
				<hr>
				<h4><img src="../assets/a_icon.png" alt="">服务宗旨<span>客户至上，诚实守信，合作双赢</span></h4>
				<hr>
				<h4><img src="../assets/a_icon.png" alt="">公司使命<span>致力于安全、经济、合理的建筑设计，节约社会资源</span></h4>
				<hr>
				<h4><img src="../assets/a_icon.png" alt="">企业愿景<span>打造中国建筑行业首屈一指的专业品牌，成为国内一流的设计优化与咨询公司</span></h4>
			</div>
		</div>
		<div class="map">
			<div class="info">
				
			</div>
		</div>
		<vFooter></vFooter>
	</div>
</template>
<script>
	import vHeader from './header'
	import vFooter from './footer'
	export default{
		components:{
			vHeader,
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
			h2{
				margin-top:230px;
			}
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
			h2{
				margin-top:180px;
			}
			p{
				font-size:12px;
			}
		}
	}
}
	.header-top{
		background:url('../assets/index_header_bg.jpg') no-repeat;
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
			}
			p{
				letter-spacing:4px;
				span{
					background:rgba(0,0,0,0.8);
					display:inline-block;
					padding:10px 50px;
					line-height:30px;
				}
			}
		}	
	}
	.about-content{
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
			h3{
				line-height:30px;
				font-size:14px;
				letter-spacing:2px;
				text-align:center;
				margin-bottom:50px;
			}
			h4{
				font-size:20px;
				text-align:center;
				margin:20px 0px;
				letter-spacing:4px;
				img{
					vertical-align:middle;
					margin-right:10px;
				}
				span{
					display:block;
					line-height:20px;
					font-size:14px;
					margin-top:20px;
					font-weight:normal;
				}
			}
			hr{
				width:2px;
				height:100px;
				background:#333;
				border:none;
			}
		}

	}
</style>