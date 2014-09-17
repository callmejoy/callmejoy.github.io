## 图片异步加载
  图片的加载是一个相对耗时的过程，采用异步的加载方式是界面加载更加流畅，用户体验更好。AsyncImageLoader是一个多线程图片异步加载器，在这里总结一下用法：
```
  主方法：Drawable loadDrawable(final String imageUrl,final ImageView imageView,final ImageCallBack imageCallBack)包含的参数是下载图片的Url,图片对象和回调接口类。

  初始化构建器中包含用于缓存图片的Hash,接下来首先要判断url对应的图片在缓存中存不存在，若存在则直接从缓存中取出
  if (imageCache.containsKey(imageUrl)) {
			// 从缓存中获取
			SoftReference<Drawable> softReference = imageCache.get(imageUrl);
			Drawable drawable = softReference.get();
			if (drawable != null) {
				return drawable;
			}
		}
  如果缓存中不存在，需要下载，下载的过程另开线程，图片加载的方法：
  public static Drawable loadImageFromUrl(String url) {
  	    // 图片地址
		URL m;
		InputStream i = null;
		try {
			m = new URL(url);
			// 拿到比特流
			i = (InputStream) m.getContent();
		} catch (MalformedURLException e1) {
			e1.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		// 比特流转换为Drawable对象
		Drawable d = Drawable.createFromStream(i, "src");
		// 返回图片对象
		return d;
	}

	在调用方法的时候，若判断缓存的图片为空，可以预设默认的图片。
```

