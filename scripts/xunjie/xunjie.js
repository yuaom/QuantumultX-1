/*

#Xunjie Unlock annual subscriptions by 渤涵
#解锁迅捷六款App：清爽视频编辑，迅捷文字识别，录音转文字助手，文字转语音助手，迅捷PDF转换器，迅捷论文查重

[rewrite_local]
^https?:\/\/.*\.xunjie.*\.com\/api\/v\d\/* url script-response-body buehen0426/Scripts/xunjie/xunjie.js

[mitm]
hostname = *.xunjie*.com,

*/

let obj = JSON.parse($response.body);
obj.userinfo.vip = [{
      "id": 00000001,
      "auth_type": 1,
      "auth_value": 4102469002
    }];

$done({body: JSON.stringify(obj)});