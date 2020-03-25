## BackCN
![deploy](https://github.com/yueyericardo/BackCN/workflows/deploy/badge.svg)  
回国路由，绕过国内网站的海外限制，仅验证ip，音频和视频不经过代理服务器。  
代理的域名可在[backcn](https://github.com/yueyericardo/BackCN/blob/master/backcn)文件中查看

## [BackCN Proxy Links](https://github.com/yueyericardo/BackCN/blob/master/backcn)
- 网易云
- 微博 
- 虾米
- 腾讯视频
- 爱奇艺
- IP测试 (ip.cn)

这些网站之外的所有其他网站会被服务器block。  
如果使用全局模式 (Global Mode)，那么所有其他网站都会 404。  
因此请按照下面的步骤操作，使用 Pac Mode。

## Mac - ShadowsockX-NG
1. Import SS URL  
![](https://yyrcd-1256568788.cos.na-siliconvalley.myqcloud.com/yyrcd/2020-03-24-035044.png)
2. Update GFW List URL  
https://raw.githubusercontent.com/yueyericardo/BackCN/master/backcn.txt  
![](https://yyrcd-1256568788.cos.na-siliconvalley.myqcloud.com/yyrcd/2020-03-24-035142.png)
![](https://yyrcd-1256568788.cos.na-siliconvalley.myqcloud.com/yyrcd/2020-03-24-035232.png)
3. Proxy Mode  
![](https://yyrcd-1256568788.cos.na-siliconvalley.myqcloud.com/yyrcd/2020-03-24-035253.png)
4. Turn Shadowsocks on

## iOS - Shadowrocket
1. Scan QR Code  
<img width=49% src="https://yyrcd-1256568788.cos.na-siliconvalley.myqcloud.com/yyrcd/2020-03-24-IMG_3565.PNG">
2. Chang Config File
<br>
https://github.com/yueyericardo/BackCN/blob/master/backcn.conf
<p class="img" style="display: inline-flex;">
<img width=49% src="https://yyrcd-1256568788.cos.na-siliconvalley.myqcloud.com/yyrcd/2020-03-24-040051.png">
<img width=49% src="https://yyrcd-1256568788.cos.na-siliconvalley.myqcloud.com/yyrcd/2020-03-24-042719.jpg">
</p>
<p class="img" style="display: inline-flex;">
<img width=49% src="https://yyrcd-1256568788.cos.na-siliconvalley.myqcloud.com/yyrcd/2020-03-24-040212.png">
<img width=49% src="https://yyrcd-1256568788.cos.na-siliconvalley.myqcloud.com/yyrcd/2020-03-24-IMG_3569.PNG">
</p>
3. Start  
<img width=49% src="https://yyrcd-1256568788.cos.na-siliconvalley.myqcloud.com/yyrcd/2020-03-24-040251.png">

## Test
https://ip.cn/


#### 参考
部分参考[Unblock-Youku/urls.js](https://github.com/uku/Unblock-Youku/blob/master/shared/urls.js)
