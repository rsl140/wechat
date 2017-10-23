var express = require('express');  
var router = express.Router();  
var wechat = require('wechat');
var configApi = require('../config.json');
  
var config = configApi;
// var config = {  
//   token : 'wechat',  
//   appid : 'wx53fb10f438bee5af',  
//   appsecret :'261a006bf239e0c7fd978883552a66e6',  
//   encodingAESKey : ''  
// };  
  
router.use(express.query());  
  
router.use('/', wechat(config, function(req, res, next) {  
  console.log(config);
    console.log(req.weixin);  
    var message = req.weixin;  
    //文本  
    if (message.Content === '1') {  
  
        res.reply('hehe');  
    }  
  
}));  
  
module.exports = router;