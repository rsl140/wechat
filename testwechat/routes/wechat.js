var express = require('express');  
var router = express.Router();
// 引入微信插件
var wechat = require('wechat');
var WechatAPI = require('wechat-api');
// 引入config
var configApi = require('../config.json');
  
var config = configApi;
  
router.use(express.query());
// use wechat-api
var api = new WechatAPI(config.appID, config.appSecret);

var menu = configApi.menu;
console.log(menu);
  
router.use('/', wechat(config, function(req, res, next) {  
  console.log(config);
  console.log(req.weixin);  
  var message = req.weixin;  
  //文本  
  if (message.Content === '1') {  

      res.reply('hehe');  
  }
}));
// 创建微信菜单
api.createMenu(menu, function(err, result){
     console.log(result);
     console.log(err);
    });
  
module.exports = router;