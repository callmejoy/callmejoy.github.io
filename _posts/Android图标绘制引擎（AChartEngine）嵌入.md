# 使用AChartEngine绘制图表
 在开发中遇到要开发类似股票K线图的需求，Canvas在这类数据的渲染上效率不高，这里采用了AChartEngine。
 >下载地址：http://code.google.com/achartengine
 >

 导入achartengine-1.1.0.jar包。  

 主要的类:XYMutilpleSeriesRenderer,XYMutilpleSeriesDataset，XYSeriesRender  
 XYMutilpleSeriesRenderer渲染器，用于进行绘制的设置；XYSeriesRender用于定义绘制的点集合设置；XYMutilpleSeriesDataset用于诗句的存放。实际项目中的配置：
 >KLineClass
 >

 ```  
 public class KLineClass {
	// 将视图封装起来，返回视图
	public GraphicalView getChartGraphicalView(Context context,
			List<Date> xvalue, List<Double> yvalue) {
		return ChartFactory.getTimeChartView(context,
				getDataSet(xvalue, yvalue), getRenderer(), "M/d HH:mm");
	}

	/**
	 * 构造数据
	 * 
	 * @return
	 */
	// 注： 也可以在这个方法里面直接传入数据，这里我是从外界传入的数据，如果要在各个方法里直接插入数据的话，我的这个被注解掉的就是，
	// 一定要注意把这个点放进barDataset中，也就是 barDataset.addSeries(timeseries);这句代码
	public XYMultipleSeriesDataset getDataSet(List<Date> xvalue,
			List<Double> yvalue) {
		// 构造数据
		XYMultipleSeriesDataset barDataset = new XYMultipleSeriesDataset();
		TimeSeries timeseries = new TimeSeries("价格");
		for (int i = 0; i < xvalue.size(); i++) {
			timeseries.add(xvalue.get(i), yvalue.get(i));
		}
		// 将需要绘制的点放进barDataset中
		barDataset.addSeries(timeseries);
		return barDataset;
	}

	/**
	 * 构造渲染器
	 * 
	 * @return
	 */

	public XYMultipleSeriesRenderer getRenderer() {
		XYMultipleSeriesRenderer renderer = new XYMultipleSeriesRenderer();
		// SimpleSeriesRenderer simp=new SimpleSeriesRenderer();
		// 3, 对点的绘制进行设置
		XYSeriesRenderer xyRenderer = new XYSeriesRenderer();
		// 3.1设置颜色
		xyRenderer.setColor(Color.GREEN);
		// 3.2设置点的样式
		xyRenderer.setPointStyle(PointStyle.TRIANGLE);
		// 3.3, 将要绘制的点添加到坐标绘制中
		renderer.addSeriesRenderer(xyRenderer);
		xyRenderer.setDisplayChartValues(true);
		renderer.setYTitle("单位（元）");// 设置y轴标题
		renderer.setAxesColor(Color.WHITE);// x轴线的颜色
		renderer.setLabelsColor(Color.WHITE);// y轴线的颜色
		renderer.setAxisTitleTextSize(16);// 设置坐标轴标题文本大小
		renderer.setChartTitleTextSize(20); // 设置图表标题文本大小
		renderer.setXLabels(10);// x轴显示的个数
		renderer.setYLabels(10);// y轴显示的个数
		// 是否显示网格
		renderer.setShowGridX(true);
		// x或y轴上数字的方向，相反的。
		renderer.setXLabelsAlign(Align.CENTER);
		renderer.setYLabelsAlign(Align.CENTER);
		renderer.setPointSize((float) 3);// 设置每个轴上点的大小
		// 图表部分的背景颜色
		renderer.setBackgroundColor(Color.BLACK);
		renderer.setApplyBackgroundColor(true);
		renderer.setPanEnabled(true, false);// 设置xy轴能否拖动
		// 设置每个柱子上是否显示数值
		// renderer.getSeriesRendererAt(0).setDisplayChartValues(true);
		// renderer.getSeriesRendererAt(0).setChartValuesTextSize(30);
		// simp.setChartValuesTextSize(40);
		// simp.setDisplayChartValues(true);
		// 设置渲染器显示缩放按钮
		renderer.setZoomButtonsVisible(false);
		// 设置渲染器允许放大缩小
		renderer.setZoomEnabled(true);
		/*
		 * renderer.setXLabels(0);//设置X轴不显示数字 String
		 */
		renderer.setClickEnabled(true);// 设置是否可以点击
		renderer.setSelectableBuffer(20);// 设置点击但范围
		return renderer;
	}  }
```
所有常用的属性
--------------------
  * 修改背景色或设置背景图片背景色设置需要设置两项：setMarginsColor（设置四边颜色）以及setBackgroundColor（设置中间背景色）
  * setAxisTitleTextSize(16);// 设置坐标轴标题文本大小
  * setChartTitleTextSize(20); // 设置图表标题文本大小
  * setLabelsTextSize(15); // 设置轴标签文本大小
  * setLegendTextSize(15); // 设置图例文本大小
  * renderer.setChartTitle( "个人收支表");//设置柱图名称
  * renderer.setXTitle( "名单" );//设置X轴名称
  * renderer.setYTitle( "金额" );//设置Y轴名称
  * renderer.setXAxisMin(0.5);//设置X轴的最小值为0.5
  * renderer.setXAxisMax(5.5);//设置X轴的最大值为5
  * renderer.setYAxisMin(0);//设置Y轴的最小值为0
  * renderer.setYAxisMax(500);//设置Y轴最大值为500
  * renderer.setDisplayChartValues(true);//设置是否在柱体上方显示值
  * renderer.setShowGrid(true);//设置是否在图表中显示网格
  * renderer.setXLabels(0);//设置X轴显示的刻度标签的个数
  * 如果想要在X轴显示自定义的标签，那么首先要设置renderer.setXLabels(0);其次要renderer.addTextLabel()循环添加
  * renderer.setXLabelsAlign(Align.RIGHT);//设置刻度线与X轴之间的相对位置关系
  * renderer.setYLabelsAlign(Align.RIGHT);//设置刻度线与Y轴之间的相对位置关系
  * renderer.setZoomButtonsVisible(true);//设置可以缩放
  * renderer.setPanLimits(newdouble[] { 0, 20, 0, 140 });//设置拉动的范围
  * renderer.setZoomLimits(newdouble[] { 0.5, 20, 1, 150 });//设置缩放的范围
  * renderer.setRange(newdouble[]{0d, 5d, 0d, 100d}); //设置chart的视图范围
  * renderer.setFitLegend(true);// 调整合适的位置
  * renderer.setClickEnabled(true)//设置是否可以滑动及放大缩小;  

> 主程序PriceDetail.java
>

```
public class PriceDetail extends Activity implements OnClickListener {
	private RelativeLayout backBtn;
	LinearLayout layout2;
	RelativeLayout relalayout00;
	GraphicalView graphview2;
	KLineClass KLine;

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.price_detail);
		initViews();
		initK();
	}

	public void initK() {
		layout2 = (LinearLayout) findViewById(R.id.layouto2);
		// 这里注意如果是从外界传入数据，那么就在这里可以传入，也可以将其封装起来，在这里调用，如果是在上面的构造数据是传入数据，这里就不需要了，这里是为了动态改变数据做的模块
		List<Date> xvalue = new ArrayList<Date>();
		List<Double> yvalue = new ArrayList<Double>();
		// 这里的数据动态传入
		xvalue.add(new Date(455555));
		xvalue.add(new Date(559899));
		xvalue.add(new Date(855555));
		yvalue.add(10.0);
		yvalue.add(20.0);
		yvalue.add(52.0);
		KLine = new KLineClass();
		graphview2 = KLine.getChartGraphicalView(getApplicationContext(),
				xvalue, yvalue);
		layout2.addView(graphview2);
		graphview2.setOnClickListener(this);
	}

	public void initViews() {
		backBtn = (RelativeLayout) findViewById(R.id.back_out);

		backBtn.setOnClickListener(new OnClickListener() {

			@Override
			public void onClick(View arg0) {
				PriceDetail.this.finish();
			}
		});
	}

	/**
	 * 监听Toast，提示数据的显示格式的等
	 */
	@SuppressLint({ "SimpleDateFormat", "NewApi" })
	@Override
	public void onClick(View v) {
		GraphicalView graphicalView = (GraphicalView) v;
		SeriesSelection seriesselection = graphicalView
				.getCurrentSeriesAndPoint();
		if (seriesselection == null) {
			return;
		}
		SimpleDateFormat sp = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		String time = sp.format(new Date(559899));
		// 获取x轴的值
		int x = (int) seriesselection.getXValue();
		// 获取y轴的值
		int y = (int) seriesselection.getValue();
		Toast toast = new Toast(this);
		toast = Toast.makeText(getApplicationContext(), "时间：" + time + "\n"
				+ "   值：" + y, Toast.LENGTH_LONG);
		// 设置toast显示的位置
		toast.setGravity(Gravity.getAbsoluteGravity(x, y), 100, 100);
		Toast.makeText(getApplicationContext(),
				Gravity.getAbsoluteGravity(x, y) + "", Toast.LENGTH_LONG)
				.show();
		LinearLayout toastView = (LinearLayout) toast.getView();
		// 设置Toast的背景色
		toastView.setBackgroundColor(Color.BLUE);
		toast.show();// 显示Toast
	}
}
```
  
    后面开发可能遇到最大的问题就是，如果数据内容是实时动态更新，如何去拉去数据数据。肯定是需要另开线程，但是android只允许在主线程中修改更新UI，所有新开的线程需要和主线程通信。  
  在android4.0版本之后，在主线程中访问网络被限制，所以装有此版本和高于此版本系统的手机在主线程中访问网络一定报错，可以考虑在onCreat方法中使用：  
  
```
  StrictMode.setThreadPolicy(new StrictMode.ThreadPolicy.Builder()
                 .detectDiskReads()
                 .detectDiskWrites()
                 .detectNetwork()   // or .detectAll() for all detectable problems
                 .penaltyLog()
                 .build());
         StrictMode.setVmPolicy(new StrictMode.VmPolicy.Builder()
                 .detectLeakedSqlLiteObjects()
                 .detectLeakedClosableObjects()
                 .penaltyLog()
                 .penaltyDeath()
                 .build());
```