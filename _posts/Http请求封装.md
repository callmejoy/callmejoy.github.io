# Http请求封装
--------------
HttpPost和HttpGet请求是客户端和服务端交互中非常常用的步骤，这里封装了Http请求操作MyHttpPost和MyHttpGet以及json数据解析的方法EncodeJson().
```
/**
 * HttpPost、HttpGet请求，Gson库解析json数据
 * 
 * @author joy
 * 
 */
public class MyRunnable {

	public MyRunnable(String url, List<NameValuePair> list, Context myContext) {

	}

	/**
	 * HttpPost请求
	 * 
	 * @param url
	 * @param list
	 * @return
	 */
	public static <T> T MyHttpPost(String url, String[] key, String[] value,
			Class<T> classofT) throws JsonSyntaxException {
		HttpPost httpPost = new HttpPost(url);
		String result = null;
		List<NameValuePair> list = new ArrayList<NameValuePair>();
		for (int i = 0; i < key.length; i++) {
			NameValuePair pair = new BasicNameValuePair(key[i], value[i]);
			list.add(pair);
		}
		try {
			UrlEncodedFormEntity entity = new UrlEncodedFormEntity(list,
					"UTF-8");
			httpPost.setEntity(entity);
			HttpResponse response = HttpClientHelper.getHttpClient().execute(
					httpPost);
			if (response.getStatusLine().getStatusCode() == 200) {
				result = EntityUtils.toString(response.getEntity(), "utf-8");
				return EncodeJson(result, classofT);
			} else {
				return null;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 服务器直接返回str的时候调用
	 * 
	 * @param url
	 * @param key
	 * @param value
	 * @return
	 */
	public static String MyHttpPost(String url, String[] key, String[] value) {
		String result = null;
		HttpPost httpPost = new HttpPost(url);
		List<NameValuePair> list = new ArrayList<NameValuePair>();
		for (int i = 0; i < key.length; i++) {
			NameValuePair pair = new BasicNameValuePair(key[i], value[i]);
			list.add(pair);
		}
		try {
			UrlEncodedFormEntity entity = new UrlEncodedFormEntity(list,
					"UTF-8");
			httpPost.setEntity(entity);
			HttpResponse response = HttpClientHelper.getHttpClient().execute(
					httpPost);
			if (response.getStatusLine().getStatusCode() == 200) {
				result = EntityUtils.toString(response.getEntity(), "utf-8");
			} else {
				return null;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	/**
	 * 传入json字符串，根据数据的结构类，使用Gson来解析json数据
	 * 
	 * @param json
	 * @param classofT
	 * @return
	 * @throws JsonSyntaxException
	 */
	private static <T> T EncodeJson(String json, Class<T> classofT)
			throws JsonSyntaxException {
		Gson gson = new Gson();
		Object object = gson.fromJson(json, classofT);
		return Primitives.wrap(classofT).cast(object);
	}

	/**
	 * HttpGet方法通信，传回的结果为str直接调用
	 * 
	 * @param url
	 * @param params
	 * @return
	 */
	public static String MyHttpGet(String url, HashMap<String, String> params) {
		String result = null;
		HttpGet httpGet = new HttpGet(getUrl(url, params));
		try {
			HttpResponse response = HttpClientHelper.getHttpClient().execute(
					httpGet);
			if (response.getStatusLine().getStatusCode() == 200) {
				result = EntityUtils.toString(response.getEntity(), "UTF-8");
			} else {
				return null;
			}
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return result;
	}

	/**
	 * HttpGet return json ,encode Json with Gson lib.
	 * 
	 * @param url
	 * @param params
	 * @return
	 */
	public static <T> T MyHttpGet(String url, HashMap<String, String> params,
			Class<T> classofT) {
		String result = null;
		HttpGet httpGet = new HttpGet(getUrl(url, params));
		try {
			HttpResponse response = HttpClientHelper.getHttpClient().execute(
					httpGet);
			if (response.getStatusLine().getStatusCode() == 200) {
				result = EntityUtils.toString(response.getEntity(), "UTF-8");

			} else {
				return null;
			}
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return EncodeJson(result, classofT);
	}

	/**
	 * url stitching
	 * 
	 * @param url
	 * @param params
	 * @return
	 */
	private static String getUrl(String url, HashMap<String, String> params) {
		// 添加url参数
		if (params != null) {
			Iterator<String> it = params.keySet().iterator();
			StringBuffer sb = null;
			while (it.hasNext()) {
				String key = it.next();
				String value = params.get(key);
				if (sb == null) {
					sb = new StringBuffer();
					sb.append("?");
				} else {
					sb.append("&");
				}
				sb.append(key);
				sb.append("=");
				sb.append(value);
			}
			url += sb.toString();
		}
		return url;
	}

	// 打印
	public static void print(String s) {
		System.out.println(s);
	}

```
