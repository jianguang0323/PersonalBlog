
<template>
 <div class="applog">
    <el-form
      label-position="left"
      label-width="0px"
      class="login-container"
    >
      <h2 class="title" style="padding-left:22px;">个人博客系统</h2>
      <el-form-item prop="account">
        <el-input type="text" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password"  auto-complete="off" placeholder="密码" ></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:48%;" @click="Login">登 录</el-button>
      </el-form-item>
    </el-form>
    <div const style=" width:100%;position: absolute;margin:0px auto;bottom: 10px;text-align: center;font-size: 14px;">
      剑光如电气如虹
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss" scoped >
.login-container {
  position: absolute;
  left: 70%;
  top: 60%;
  width: 350px;
  margin: -190px 0 0 -175px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
   .title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
}
</style>
<style>
.applog {
  height: 100%;
  background: url(../../assets/login-bg.png) no-repeat;
   background-size: 100% 100%;
}
</style>
