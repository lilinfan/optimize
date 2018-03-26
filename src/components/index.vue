<template>
	<div class="header-top">
		<!-- logo和导航组件 -->
		<vHeader></vHeader>
		<div class="header-content">
			<div class="biaoti">
				<h2>控制成本</h2>
				<h3>Control Costs</h3>
				<p>合理控制经济成本，为业主创造价值，节约投资<br>Control the economic cost reasonably, create value for the owner and save the investment</p>
			</div>
			<!-- 下单组件 -->
			<vForm></vForm>
		</div>
		<!-- 业务模块 -->
		<div class="yewu">
			<div class="title"><h2>我们的业务</h2></div>
			<p>深圳市鹤之峰建筑有限公司成立于2013年，是一家从事结构、机电、建筑、景观设计优化及咨询的专业化公司，<br>过专业设计优化和设计咨询，使建筑、结构、机电、景观的设计更加合理、经济，为业主单位节省大量的经济成本。</p>
		</div>
		<!-- 优势模块 -->
		<div class="youshi">
			<div class="title"><h2>我们的优势</h2></div>
			<div class="group">
				<div class="group-box">
					<div class="group-slide">
						<h3>"简捷"</h3>
						<p>下单步骤简捷明了，操作便捷</p>
					</div>
					<div class="group-slide">
						<h3>"高效"</h3>
						<p>更短的时间交付任务</p>
					</div>
					<div class="group-slide">
						<h3>"价廉"</h3>
						<p>物美价廉，花更少的钱达到预想的效果</p>
					</div>
				</div>
			</div>
		</div>
		<!-- 案例模块 -->
		<div class="anli">
			<div class="title"><h2>成功案例，打造完美空间</h2></div>
			<div class="case-list">
				<vList></vList>
			</div>
		</div>
		<!-- 服务流程 -->
		<div class="fuwu">
			<div class="title"><h2>服务流程</h2></div>
			<ul>
				<li class="li-active"><h3><i>1</i></h3><p>在线下单</p></li>
				<li><h3><i>2</i></h3><p>在线付款</p></li>
				<li><h3><i>3</i></h3><p>开始制作</p></li>
				<li><h3><i>4</i></h3><p>邮箱发送</p></li>
				<li><h3><i>5</i></h3><p>完成订单</p></li>
			</ul>
		</div>
		<!-- 版权模块 -->
		<vFooter></vFooter>	
	</div>	
</template>
<script>
import vHeader from './header'
import vForm from './form'
import vList from './list'
import vFooter from './footer'
	export default{
		name:'index',
		components:{
			vHeader,
			vForm,
			vList,
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
		}
	}
	/*业务、案例、服务流程*/
	.yewu,.anli,.fuwu{
		margin-top:100px;
		.title{
			h2{
				font-size:30px;
			}
		}
		p{
			font-size:16px;
		}
	}
	/*优势*/
	.youshi{
		margin-top:100px;
		padding:100px 0px;
		.title{
			h2{
				font-size:30px;
			}
		}
		.group{
			.group-box{
				.group-slide{
					height:176px;
					padding:40px 0;
					h3{
						font-size:30px;
					}
					p{
						font-size:16px;
					}
				}
			}
		}
	}
	/*服务流程*/
	.fuwu{
		ul{
			li{
				p{
					font-size:20px;
				}
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
		}
	}
	/*业务、案例、服务流程*/
	.yewu,.anli,.fuwu{
		margin-top:50px;
		.title{
			h2{
				font-size:24px;
			}
		}
		p{
			font-size:12px;
		}
	}
	/*优势*/
	.youshi{
		margin-top:50px;
		padding:50px 0px;
		.title{
			height:130px;
			margin-bottom:50px;
			h2{
				font-size:24px;
			}
		}
		.group{
			.group-box{
				.group-slide{	
					padding:20px 0;	
					height:150px;			
					h3{
						font-size:20px;
					}
					p{
						font-size:12px;
					}
				}
			}
		}
	}
	.anli{
		.case-list{
			width:1200px;
			margin:0 auto;
		}
	}
	/*服务流程*/
	.fuwu{
		ul{
			li{
				p{
					font-size:14px;
				}
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
			.biaoti{
				font-family:"义启未来体";
				color:#fff;
				width:400px;
				float:left;
				margin-top:150px;
				margin-left:100px;
				h2{
					font-size:30px;
				}
				h3{
					font-size:30px;
					height:50px;
					line-height:50px;
					width:300px;
					background:#000;
					margin:10px 0;
				}
				p{
					font-size:20px;
					line-height:24px;
				}
			}
		}	
	}
	.yewu,.anli,.fuwu{
		.title{
			width:100%;
			height:130px;
			background:url('../assets/title_bg_000.png') no-repeat center center;
			font-family:'义启未来体';
			margin-bottom:50px;
			h2{
				line-height:150px;
				text-align:center;
			}
		}
		p{
			line-height:30px;
			text-align:center;
		}
	}
	.youshi{
		background:url('../assets/youshi_bg.jpg') no-repeat;
		font-family:'义启未来体';
		.title{
			background:url('../assets/title_bg_fff.png') no-repeat center center;
			height:130px;
			margin-bottom:50px;
			h2{
				line-height:150px;
				text-align:center;
				color:#fff;
			}
		}
		.group{
			padding:10px 0px;
			border-top:2px solid #fff;
			border-bottom:2px solid #fff;
			width:100%;
			box-sizing:border-box;
			margin:0 auto;
			.group-box{
				width:100%;
				max-width:1440px;
				margin:0 auto;
				.group-slide{
					display:inline-block;
					width:33%;
					box-sizing:border-box;
					text-align:center;
					color:#fff;
					border-left:2px solid #fff;					
					cursor:pointer;
					h3{
						line-height:60px;
					}
					p{
						line-height:30px;
					}
				}
				.group-slide:first-Child{
					border:none;
				}
				.group-slide:hover{
					color:#000;
				}
			}
		}
	}
	.anli{
		background:#f8f8f8;
		padding:50px 0;
	}
	.fuwu{
		width:100%;
		max-width:1050px;
		margin:100px auto;
		overflow:auto;
		ul{
			font-size:0;
			text-align:center;
			margin-top:30px;

			li{
				float:left;
				background:#ddd;
				width:170px;
				height:180px;
				text-align:center;
				margin-left:40px;
				h3{
					font-size:60px;
					line-height:100px;
					color:#fff;
				}
				p{
					line-height:30px;
				}
			}
			.li-active,li:hover{
				margin-top:-30px;
				height:210px;
				background:#337ab7;
				color:#fff;
			}
		}
	}

</style>