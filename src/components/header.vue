<template>
  <div id="container">
  <header>
    <div class="logo"></div>
    <nav>
      <ul>
        <li><router-link to='/index'>首页</router-link></li>
        <li><router-link to='/server'>华城业务</router-link></li>
        <li><router-link to='/case'>项目案例</router-link></li>
        <li><router-link to='/team'>优秀团队</router-link></li>
        <li><router-link to='/about'>关于我们</router-link></li>
      </ul>
    </nav>
        
        
  </header>
  </div>
</template>

<style scoped lang='less'>
@media screen and (min-width:1441px){
  header{
    height:80px;
    .logo{
      margin-top:22px;
    }
    nav{
      ul{
        li{
          a{
            font-size:14px;
            line-height:80px;
          }
        }
      }
    }
  }
  
}
@media screen and (max-width:1440px){
  header{
    height:60px;
    .logo{
      margin-top:12px;
    }
    nav{
      ul{
        li{
          a{
            font-size:12px;
            line-height:60px;
          }
        }
      }
    }
  }
  
}
.container{overflow:auto;}
   header{
    width:100%;
    max-width:1440px;
    margin:0 auto;
    text-align:center;
    overflow:auto;
    position:absolute;
    top:0px;
    z-index:11;
    .logo{
      background:url('../assets/logo.png') no-repeat;
      width:74px;
      height:36px;
      margin-left:33%;
      float:left;
      display:inline-block; 
    }
    nav{
      text-align:center;
      float:left;
      margin-left:3%;
      ul{
        list-style:none;
        font-size:0;
        li{
          display:inline-block;
          a{
            color:#fff;
            display:block;
            text-decoration:none;
            padding:0 20px;
          }
          a:hover{
            background:#000;
          }
        }
      }
    }
   }
</style>