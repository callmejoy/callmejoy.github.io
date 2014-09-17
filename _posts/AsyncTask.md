# AsyncTask小结，制作一个验证码读秒器
----------------
Android提供了工具类android.os.AsyncTask，使用它不需要编写任务线程和Handler实例即可完成异步任务。
这是AsyncTask的定义：  
```  
public abstract class AsyncTask<Params,Progress,Result>  
```  

Params代表启动任务执行的输入参数，Progress int型，用来显示任务执行的进度,Result则为后台执行后的结果。一个任务执行一般包括以下几个步骤：
  * execute(Params...params)在代码中调用执行异步任务
  * onPreExecute(),在上一个方法被执行后立即调用,一般用来对UI做一些标记
  * doInBackground（Params params）后台执行费时操作，在执行的过程中调用publishProgress(Progress...values)来更新进度信息
  * onProgressUpdate(Params...values) 在调用publishProgress时执行，直接将进度信息更新到UI组件上
  * onPostExecute(Result result）后台操作结束后执行，计算结果将作为参数传入，直接将结果显示到UI组件上

  读秒器实现：在onPreExecute中设置int '时间上线',在后台中调用循环：
```
while (true) {
				try {
					Thread.sleep(1000);
					i--;
					if (i < 0) {
						return null;
					}
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
				// 通知可以运行onProgressUpdate生命周期
				publishProgress();
			}  
```  

每一秒更新一次UI,在onProgressUpdate中setText(i+"秒后重置")
在onPostExecute中进行重置操作。
