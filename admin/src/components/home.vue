<template id="indexPage">
  <div class="layout">
    <div class="header">
      <div class="logo">
        口袋二级
      </div>
      <div class="nav">
        <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
          <mu-tab value="tab1" title="Nav One"/>
          <mu-tab value="tab2" title="Nav TwO"/>
          <mu-tab value="tab3" title="Nav Three"/>
        </mu-tabs>
      </div>
    </div>
    <div class="content">
      <div class="content-left">
        <mu-list @change="handleListChange" :value="activeList">
          <!-- <mu-list-item title="题库" to="/list" value="list1" >
            <mu-icon slot="left" value="send" />
          </mu-list-item>
          <mu-list-item title="XXX" to="/" value="list2">
            <mu-icon slot="left" value="drafts"/>
          </mu-list-item> -->
          <mu-list-item title="用户信息" to="/list" toggleNested value="list1">
            <mu-icon slot="left" value="inbox"/>
            <mu-list-item slot="nested" to="/list" title="会员信息" value="list2">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="分享统计" value="list3">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
          </mu-list-item>

          <mu-list-item title="资源管理" toggleNested value="list4">
            <mu-icon slot="left" value="inbox"/>
            <mu-list-item slot="nested" title="题库" value="list5">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="考试大纲" value="list6">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="知识点" value="list7">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="教师微信号" value="list7">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
          </mu-list-item>

          <mu-list-item title="系统管理" toggleNested value="list8">
            <mu-icon slot="left" value="inbox"/>
            <mu-list-item slot="nested" title="系统用户" value="list9">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="页面管理" value="list10">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="字典" value="list11">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="日志" value="list12">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
          </mu-list-item>
        </mu-list>
      </div>
      <div class="content-right">
        <div class="body">
	        <div class="list">
			    <router-view/>
		    </div>
        </div>
      </div>
    </div>
    <div class="footer">
      Muse-UI ©2017 Created by Muse-UI
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeTab: 'tab1',
      activeList: 'list1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    handleListChange (val) {
      this.activeList = val
    }
  }
}


</script>
<style scoped>
.layout{
  background-color: rgb(236, 236, 236);
}

.header{
  background-color: #7e57c2;
}

.logo{
  font-size: 24px;
  color: white;
  display: inline-block;
  padding: 10px 20px;
}

.nav{
  display: inline-block;
  width: calc(100% - 150px);
  margin: 0 auto;
}

.tab{
  margin: 0 auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0);
}

.content{
  overflow: hidden;
}

.content-left{
  width: 20%;
  float: left;
  background-color: white;
  margin-bottom: -4000px;
  padding-bottom: 4000px;
}

.content-right{
  width: 80%;
  display: inline-block;
  float: right;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0)
}

.breadcrumb{
  margin: 10px 0;
}

.body{
  background-color: white;
  border-radius: 5px;
  min-height: 600px;
}

.footer{
  padding: 10px 0;
  text-align: center;
}
</style>