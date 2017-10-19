## Hexo 插件，解决 disqus 不能访问的反向代理
![](https://img.shields.io/badge/node-%3E7.6-brightgreen.svg)

[![NPM](https://nodei.co/npm/hexo-disqus-proxy-heroku.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/hexo-disqus-proxy-heroku/)


### 准备
* heroku 
* hexo project


# 服务器端

DISQUS_API_SECRECT:
> 获取`api-secret`

DISQUS_SHORT_NAME:
>是你的website的 shortname 名称 比如在你的disqus安

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/chinanf-boy/disqus-proxy-heroku)

### Tips: 在``heroku`` 可以设置 链接`` github`` 项目时，自动部署，新的`` git commit`` 中 开头或 结尾 要是`` ci ``才会执行

#### 获取`api-secret`

在使用本插件之前需要在 Disqus 申请开启 api 权限。访问[register new application](https://disqus.com/api/applications/register/) 就可以注册一个 application.然后在[applications](https://disqus.com/api/applications/)可以看到你的 application 列表。其中 Secret Key 就是我们需要的api-secret,并且需要在后台的Settings => Community里开启访客评论

### 安装

在`Hexo`博客目录执行
```
npm install hexo-disqus-proxy-heroku --save
```

### 前端配置

在你的`Hexo`博客目录中修改`_config.yml`文件
添加如下配置：（注意缩进和空格）
```
disqus_proxy:
  shortname: yobrave
  host: XXXX.herokuapp.com
  admin_avatar: /avatars/admin-avatar.jpg
  default_avatar: /avatars/default-avatar.png
```
其中：
* `shortname` 是你的website的 shortname 名称 比如在你的disqus安装代码中 有这样一句脚本：
         s.src = 'https://test-eo9kkdlcze.disqus.com/embed.js';
         那么你的disqus 的shortname 就是 test-eo9kkdlcze
* `host`是 herokuapp
* `default_avatar`和`admin_avatar`分别是默认头像和管理员头像的路径。例如在`source`目录下建立`avatars`目录，放入两个头像，在这里设置成绝对路径。如果不设置，则为默认头像。

#### 关键的一步

在`disqus`的官方配置中，我们需要在页面合适位置添加一个 `<div id="disqus_thread"></div>` 作为占位符，
而`hexo-disqus-proxy`插件并不能知道在页面的哪个位置插入这个标签比较合适，所以这个需要额外配置一下：

##### 情况一
如果你本身用的主题已经支持`disqus`的配置，那么灰常爽，你只需要正常启用主题的disqus评论，插件就会自动检测并合适的覆盖，
这是最常见的情况，肯定是最吼的。
##### 情况二
在你写的`markdown`文件底部插入`<div id="disqus_thread"></div>`。这样评论框位置会位于文章的下方，并且大小能被外部元素所约束，不会乱跑。
什么，`markdown`也能插入`HTML`标签？

嗯是的。
##### 情况三
稍微懂一点点`hexo`的基本知识，自己改主题。大概的思路是，在`Hexo`渲染的过程中，把`<div id="disqus_thread"></div>`加在主题目录下的layout目录中
关于博文页面的模板中的合适的位置就行了。


Done!


## 未来 ：

# 把 react -> preact 真的大 ``react`` 小小博客加载速度🈵慢多了都不怎么想用

# 这个项目式 fork 来的