/*

可可英语 unlock vip by 渤涵

[rewrite_local]
^https:\/\/mob2015.kekenet.com\/keke\/mobile\/index.php url script-response-body buehen0426/Scripts/keke/kkyy.js

[MITM]
hostname = mob2015.kekenet.com

*/

re('"is_vip":\\d@"end_time":\\d+','"is_vip":1@"end_time":1741575902')

function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
}