<template>
	<div class="header-top">
		<vHeader></vHeader>
		<div class="header-content">
			<h2>SERVER</h2>
			<p><span>客户至上，诚实守信，合作双赢</span></p>
		</div>
		<!-- 业务详情模块 -->
		<div class="server-content">
			<div class="title"><h2>业务详情参考</h2></div>
			<div class="content">
				<table>
					<thead>
						<tr>
							<th>类型</th>
							<th>面积</th>
							<th>价钱</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowspan="3" class="leixing"><h3>项目规划</h3></td>
							<td>100亩以下</td>
							<td>10000元</td>
						</tr>
						<tr>
							<td>100-200亩</td>
							<td>30000元</td>
						</tr>
						<tr>
							<td>200亩以上</td>
							<td>50000元</td>
						</tr>
						<tr>
							<td rowspan="3" class="leixing"><h3>方案</h3></td>
							<td>100亩以下</td>
							<td>10000元</td>
						</tr>
						<tr>
							<td>100-200亩</td>
							<td>30000元</td>
						</tr>
						<tr>
							<td>200亩以上</td>
							<td>50000元</td>
						</tr>
						<tr>
							<td rowspan="3" class="leixing"><h3>施工图</h3></td>
							<td>100亩以下</td>
							<td>10000元</td>
						</tr>
						<tr>
							<td>100-200亩</td>
							<td>30000元</td>
						</tr>
						<tr>
							<td>200亩以上</td>
							<td>50000元</td>
						</tr>
					</tbody>
				</table>
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
			p{
				font-size:14px;
			}
		}
	}
	.server-content{
		margin-top:150px;
		.title{
			h2{
				font-size:30px;
			}
		}
		.content{
			max-width:1440px;
			margin:0 auto;
			table{
				width:100%;
				font-size:16px;
				box-sizing:border-box;
				thead{
					tr{
						th{
							font-size:20px;
						}
					}
				}
				tr{
					td{
						h3{
							font-size:20px;
						}
					}
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
			p{
				font-size:12px;
			}
		}
	}
	.server-content{
		margin-top:50px;
		.title{
			h2{
				font-size:24px;
			}
		}
		.content{
			max-width:1200px;
			margin:0 auto;
			table{
				width:100%;
				font-size:14px;
				box-sizing:border-box;
				thead{
					tr{
						th{
							font-size:16px;
						}
					}
				}
				tr{
					td{
						h3{
							font-size:16px;
						}
					}
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
	.server-content{
		margin-bottom:100px;
		.title{
			width:100%;
			height:130px;
			background:url('../assets/title_bg_000.png') no-repeat center top;
			font-family:'义启未来体';
			margin-bottom:50px;
			h2{
				line-height:150px;
				text-align:center;
			}
		}
		.content{
			width:100%;
			margin:0 auto;
			table{
				width:100%;
				box-sizing:border-box;
				thead{
					tr{
						th{
							font-family:'义启未来体';
							line-height:50px;
						}
					}
				}
				tbody{border:1px solid #ddd;}
				tr{
					border-bottom:1px solid #ddd;
					td{
						width:33%;
						line-height:50px;
						text-align:center;
						cursor:pointer;
						h3{
							border-right:1px solid #ddd;
						}
					}
					.leixing{
						vertical-align:middle;
						line-height:150px;
						font-family:'义启未来体';
					}
				}
				td:hover{
					background:#337ab7;
					color:#fff;
				}
			}
		}
	}
</style>