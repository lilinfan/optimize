<template>
	<div class="form">
		<form action="" id="myForm">
			<div class="leixing">
				<h3>类型选择</h3>
				<span>项目规划</span>
				<span>方案</span>
				<span>施工图</span>
			</div>
			<div class="mianji">
				<h3>面积大小</h3>
				<span>100亩以下<br>10000元</span>
				<span>100-200亩<br>30000元</span>
				<span>200亩以上<br>50000元</span>
			</div>
			<div class="ziliao">
				<h3>资料上传</h3>
				<input type="file" id="filename">
				<input type="text" id="filetext">
				<button id="filebtn">选择文件</button>
			</div>
			<div class="lianxi">
				<h3>联系人信息</h3>
				<div class="group">
					<label>姓名</label>
					<input type="text" id="usename">
				</div>
				<div class="group">
					<label>电话</label>
					<input type="text" id="telephone">
				</div>
				<div class="group">
					<label>邮箱</label>
					<input type="text" id="email">
				</div>
			</div>
			<hr>
			<div class="jiaqian">
				<p>价钱：.00 元</p>
				<button type="submit">一键下单</button>
			</div>
		</form>
	</div>
</template>
<style scoped lang='less'>
/*最小宽度1441px*/
@media screen and (min-width:1441px){
	.form{
		width:600px;
		height:550px;
		padding:20px;
		.leixing,.mianji,.ziliao,.lianxi{
			h3{
				font-size:18px;
			}
			span{
				font-size:14px;
				padding:10px 40px;
			}
		}
		.ziliao{
			#filetext{
				width:560px;
			}
			button{
				font-size:14px;
			}
		}
		.lianxi .group{
			label{
				font-size:14px;
			}
			input{
				font-size:14px;
				width:145px;

			}
		}
		.jiaqian{
			p{
				font-size:16px;
			}
			button{
				font-size:16px;
				padding:10px 20px;
			}
		}
	}
}
/*最大宽度1440px*/
@media screen and (max-width:1440px){
	.form{
		width:450px;
		padding:10px 20px;
		.leixing,.mianji,.ziliao,.lianxi{
			h3{
				font-size:14px;
			}
			span{
				font-size:12px;
				padding:10px 30px;
			}
		}
		.ziliao{
			#filetext{
				width:400px;
			}
			button{
				font-size:12px;
				padding:0 10px;
			}
		}
		.lianxi .group{
			display:inline-block;
			margin:10px 0;
			label{
				font-size:12px;
			}
			input{
				font-size:12px;
				width:160px;
			}
		}
		.jiaqian{
			p{
				font-size:14px;
			}
			button{
				font-size:12px;
				padding:5px 20px;
			}
		}
	}
}
/*通用样式*/
	.form{
		box-sizing:border-box;
		background:rgba(255,255,255,0.9);
		position:absolute;
		bottom:0;
		right:100px;
		.leixing,.mianji,.ziliao,.lianxi{
			h3{
				line-height:30px;
			}
			span{
				display:inline-block;
				border:1px solid #333;
				margin-right:10px;
				margin-top:10px;
				margin-bottom:10px;
				cursor:pointer;
				text-align:center;
				font-weight:bolder;
			}
			span:hover{
				color:#337ab7;
				border:2px solid #337ab7;
			}
		}
		.ziliao{
			posiition:relative;
			overflow:auto;
			height:80px;
			#filename{
				opacity:0;
				width:100%;
				height:30px;
				position:absolute;
				z-index:1;
			}
			#filetext{
				height:30px;
				line-height:30px;
				box-sizing:border-box;
				border-radius:5px;
				border:1px solid #333;
				position:absolute;
				margin-top:10px;
			}
			button{
				height:30px;
				line-height:30px;
				background:#337ab7;
				position:absolute;
				right:20px;
				border:none;
				margin:0 auto;
				color:#fff;
				display:block;
				border-radius:0px 5px 5px 0px;
				margin-top:10px;
			}
		}
		.lianxi .group{
			display:inline-block;
			margin:10px 0;
			label{
				font-weight:bold;
			}
			input{
				border:1px solid #333;
				height:32px;
				line-height:32px;
				color:#000;
				border-radius:5px;
			}
		}
		.jiaqian{
			p{
				float:left;
				color:#337ab7;
				font-weight:bold;
			}
			button{
				background:#337ab7;
				border:none;
				color:#fff;
				float:right;
				font-weight:bold;
			}
		}
	}
</style>