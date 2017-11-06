
<template>

<div class="login">
	<div class="inputstyle">
		<mu-auto-complete hintText="请输入用户名" name="username" v-model="username" label="请输入用户名" @input="handleInput" />
	</div>
  
  <div class="inputstyle">
  	<mu-auto-complete hintText="请输入密码" name="password" v-model="password" label="请输入密码" labelFloat />
  </div>
  <div class="inputstyle button">
  	<mu-raised-button v-on:click="loginIn" label="登陆" class="demo-raised-button" secondary/><!-- to="/admin/list" -->
  </div>
</div>
</template>

<style scoped>
@import '../public/css/login.css';
</style>
<script>
import axios from 'axios';
import qs from 'qs';
export default {
  data () {
    return {
    }
  },
  methods: {
	handleInput (val) {
      this.dataSource = []
    },
    loginIn: function(){
    	var name = this.username;
      var pwd = this.password;
      
      axios.post('http://127.0.0.1:3000/users/findAdmin',qs.stringify({ 
        'username': name ,
        'pwd': pwd
      }))
      .then((res)=>{
        if(res.data.rs.length === 0){
          alert("请输入正确的用户名");
        }else{
          this.$router.push('/admin');
        }
        console.log(res);
      }).catch((res)=>{
        alert("系统错误");
      })
    }
  }
}
</script>