
<template>

<div class="login">
	<div class="inputstyle">
		<mu-auto-complete hintText="请输入用户名" label="请输入用户名" @input="handleInput" labelFloat :dataSource="dataSource" @change="handlechange" />
	</div>
  
  <div class="inputstyle">
  	<mu-auto-complete hintText="请输入密码"  label="请输入密码" labelFloat :dataSource="dataSource"/>
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
export default {
  data () {
    return {
      dataSource: []
    }
  },
  methods: {
    handlechange (val) {
      console.log(`you choose ${val}`)
    },
	handleInput (val) {
      this.dataSource = [
      ]
    },
    loginIn: function(){
    	alert(11);
    }
  }
}
</script>