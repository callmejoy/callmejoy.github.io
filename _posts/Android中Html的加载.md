# Android中Html的加载  
==================  

  在android应用中加载文本，最方便的就是直接解析html来实现文本的格式控制，一般有两个方向的思路：

### 方法一：
  * 使用Spanned接口类调用自定义的MyImageGetter来异步的加载文字和图片 
 
```
Spanned s = HTML.fromHtml(html,new MyImageGetter(context,textview),tagHandler);  
textView.setText(s);
textView.setMovementMethod(LinkMovement.getInstance);
```

> 需要自定义的MyImageGetter类：<a href="http://git.oschina.net/setsuna/Epp-Daily-Schedule/blob/master/Summary/%E7%A7%BB%E5%8A%A8%E5%AE%A2%E6%88%B7%E7%AB%AF/MyImageGetter.java">MyImageGetter.java</a>
  
-----------
### 方法二：
  * 直接使用WebView来加载文本内容  

```
private void showWebView(){  
    webView.loadDataWithBaseURL(null,html,"text/html","utf-8",null);   
	webView.getSettings().setLyoutAlgorithm(LayoutAlgorithm.SINGLE_COLLUM);  
	webView.getSettings().setJavascriptEnable(true);  
	webView.requestFocus(); // 不设置，网页中诸如输入框之类的会挂掉  
 	// 设置网页适配手机分辨率  
  	webView.getSettings().setUsesWideViewPort(true);  
	webView.getSettings().setLoadWithOverrideMode(true);  
}
```
webView直接添加网页：webView.loadUrl(String url);
取消滚动条 this.setScrollBarStyle(SCROLLBARS_OUTSIDE_OVERLAY);