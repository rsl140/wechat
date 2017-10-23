var express = require('express');  
var router = express.Router();  
var wechat = require('wechat');
var wechtApi = require('wechat-api');
var configApi = require('../config.json');
  
var config = configApi;
  
router.use(express.query());  
var api = new WechatAPI(config.appID, config.appSecret);
  
router.use('/', wechat(config, function(req, res, next) {  
  console.log(config);
  console.log(req.weixin);  
  var message = req.weixin;  
  //文本  
  if (message.Content === '1') {  

      res.reply('hehe');  
  }
  var menu = {
        "button": [
            {
                "type": "click", 
                "name": "123", 
                "key": "V1001_TODAY_MUSIC"
            }
        ]
    }
    api.createMenu(menu, function(err, result){
     console.log(result);
    });
    
}));




// api.createMenu(menu, function (err, result) {
//   console.log(result);
// });
  
module.exports = router;