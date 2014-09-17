# 自定义Adapter定制ListView
  * 创建一个Myadapter类继承于baseadapter
  * 创建adapter的四个基本方法
  * 在Activity中实例化Myadapter是传入context与数据
  * 将listview对象与adapter绑定
  * 需要两个xml视图文件，一个用于显示listview，一个用于定制listview的样式
  * Myadapter和Activity
  ```  
	public class Myadapter extends BaseAdapter {

	private Context context;
	private String data[];

	public Myadapter(Context context, String data[]) {					//构造方法，传入context与显示的数据
		this.context = context;
		this.data = data;
	}

	@Override
	public int getCount() {												//获取数据的长度
		return data.length;
	}

	@Override
	public Object getItem(int i) {										//获取每一条数据

		return data[i];
	}

	@Override
	public long getItemId(int i) {										//获取每一条数据的id
		return i;
	}

	@Override
	public View getView(int i, View v, ViewGroup arg2) {				//获取需要加载的视图
		if (v == null) {
			v = LayoutInflater.from(context).inflate(R.layout.list,
					null);
		}
		TextView tv = (TextView) v.findViewById(R.id.tv);				//获取TextView对象
		tv.setText(data[i]);											//设置文本信息
		return v;
		}
	}
  ```  
  ```  
	package com.example.listview;
	import android.os.Bundle;
	import android.support.v7.app.ActionBarActivity;
	import android.widget.ListView;
	public class MainActivity extends ActionBarActivity {
	private ListView lv;
	private String[] data = { "北京", "上海", "成都", "深圳"};
		private Myadapter adapter;										//声明自定义的Myadapter对象

		@Override
		protected void onCreate(Bundle savedInstanceState) {
			super.onCreate(savedInstanceState);
			setContentView(R.layout.main);
			lv = (ListView) findViewById(R.id.lv);						//获取listview对象
			adapter = new Myadapter(this, data);						//实例化Myadapter，得到adapter
			lv.setAdapter(adapter);										//将listview与adapter绑定
		}

	}

  ```    
  *   main.xml																		//用于显示listview的xml视图
  ```  
	<?xml version="1.0" encoding="utf-8"?>
	<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
		android:layout_width="match_parent"
		android:layout_height="match_parent"
		android:orientation="vertical" >
		<ListView
			android:id="@+id/lv"
			android:layout_width="match_parent"
			android:layout_height="wrap_content" >
		</ListView>
	</LinearLayout>
  
  ```  
  * list.xml																		//定制listview的样式
  ```  
	<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
		xmlns:tools="http://schemas.android.com/tools"
		android:id="@+id/container"
		android:layout_width="match_parent"
		android:layout_height="match_parent"
		android:orientation="horizontal"
		tools:context="com.example.listview.MainActivity"
		tools:ignore="MergeRootFrame" >

    <ImageView																		//显示图片
        android:id="@+id/image"
        android:layout_width="30dp"
        android:layout_height="30dp"
        android:src="@drawable/ic_launcher" />

    <TextView																		//显示文本信息
        android:id="@+id/tv"
        android:layout_width="match_parent"
        android:layout_height="32dp"
        android:gravity="center_vertical"
        android:text="" />

	</LinearLayout>
  ```  