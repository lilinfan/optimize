<template>
	<div class="list-group">
		<ul>
			<li>
				<a href="">
					<div class="anli-img">
						<img src="../assets/anli.jpg" alt="" >
					</div>
					<h3>北京万科中央城</h3>
					<p>该项目位于房山长阳京良路2号。借鉴新加坡新城理念，凭借CSD地标的核心地缘优势，以便捷的轨道交通为中心，规划...</p>
				</a>
			</li>
			<li>
				<a href="">
					<div class="anli-img">
						<img src="../assets/anli.jpg" alt="" >
					</div>
					<h3>北京万科中央城</h3>
					<p>该项目位于房山长阳京良路2号。借鉴新加坡新城理念，凭借CSD地标的核心地缘优势，以便捷的轨道交通为中心，规划...</p>
				</a>
			</li>
			<li>
				<a href="">
					<div class="anli-img">
						<img src="../assets/anli.jpg" alt="" >
					</div>
					<h3>北京万科中央城</h3>
					<p>该项目位于房山长阳京良路2号。借鉴新加坡新城理念，凭借CSD地标的核心地缘优势，以便捷的轨道交通为中心，规划...</p>
				</a>
			</li>
			<li>
				<a href="">
					<div class="anli-img">
						<img src="../assets/anli.jpg" alt="" >
					</div>
					<h3>北京万科中央城</h3>
					<p>该项目位于房山长阳京良路2号。借鉴新加坡新城理念，凭借CSD地标的核心地缘优势，以便捷的轨道交通为中心，规划...</p>
				</a>
			</li><li>
				<a href="">
					<div class="anli-img">
						<img src="../assets/anli.jpg" alt="" >
					</div>
					<h3>北京万科中央城</h3>
					<p>该项目位于房山长阳京良路2号。借鉴新加坡新城理念，凭借CSD地标的核心地缘优势，以便捷的轨道交通为中心，规划...</p>
				</a>
			</li>
			<li>
				<a href="">
					<div class="anli-img">
						<img src="../assets/anli.jpg" alt="" >
					</div>
					<h3>北京万科中央城</h3>
					<p>该项目位于房山长阳京良路2号。借鉴新加坡新城理念，凭借CSD地标的核心地缘优势，以便捷的轨道交通为中心，规划...</p>
				</a>
			</li>
			<li>
				<a href="">
					<div class="anli-img">
						<img src="../assets/anli.jpg" alt="" >
					</div>
					<h3>北京万科中央城</h3>
					<p>该项目位于房山长阳京良路2号。借鉴新加坡新城理念，凭借CSD地标的核心地缘优势，以便捷的轨道交通为中心，规划...</p>
				</a>
			</li>
			<li>
				<a href="">
					<div class="anli-img">
						<img src="../assets/anli.jpg" alt="" >
					</div>
					<h3>北京万科中央城</h3>
					<p>该项目位于房山长阳京良路2号。借鉴新加坡新城理念，凭借CSD地标的核心地缘优势，以便捷的轨道交通为中心，规划...</p>
				</a>
			</li>
		</ul>
		<button class="more">MORE</button>
	</div>
</template>
<style scoped lang='less'>
@media screen and (min-width:1441px){
	.list-group{
		ul{
			li{
				width:325px;
				margin:20px 17.5px;
				a{
					.anli-img{
						height:197px;
						img{
							top:0px;
							transition:top 0.5s;
						}
					}
					h3{
						font-size:16px;
					}
					p{
						font-size:14px;
					}
				}
				a:hover{
					img{
						top:-198px;
					}
				}
			}
		}
	}

}
@media screen and (max-width:1440px){
	.list-group{
		ul{
			li{
				width:23%;
				margin:1%;
				padding:1%;
				background:#fff;
				overflow:auto;
				box-sizing:border-box;
				a{

					.anli-img{
						height:155px;
						img{
							top:0px;
							transition:top 0.5s;
						}
					}
					h3{
						font-size:14px;
					}
					p{
						font-size:12px;
					}
				}
				a:hover{
					img{
						top:-158px;
					}
				}
			}
		}
	}
}
	.list-group{
		width:100%;
		max-width:1440px;
		margin:0 auto;
		ul{
			font-size:0;
			overflow:auto;
			li{
				display:inline-block;
				position:relative;
				a{
					color:#333;
					text-decoration:none;
					.anli-img{
						width:100%;
						overflow:hidden;
						position:relative;
						img{
							width:100%;
							position:absolute;
						}
					}
					h3{
						line-height:30px;
					}
					p{
						line-height:24px;
						text-indent:2em;
					}
				}
				a:hover{
					color:#337ab7;
				}
			}
		}
		.more{
			font-family:'义启未来体';
			padding:10px 30px;
			border:1px solid #333;
			color:#333;
			font-size:20px;
			background:none;
			font-weight:bold;
			display:block;
			margin:20px auto;
			cursor:pointer;
		}
		.more:hover{
			color:#337ab7;
			border-color:#337ab7;
		}
	}
</style>