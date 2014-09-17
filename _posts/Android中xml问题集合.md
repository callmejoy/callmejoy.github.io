# Android中关于xml的问题集锦
----------------
### 选择器selector的使用


### listView与scrollView并存时的冲突
  * 界面初始化完成后，会自动滚动到listView上。原因是listView如果采用了异步加载，会在整个UI界面渲染之后渲染，然后拿到焦点。解决办法是在给listView安装了adapter之后，让整个界面scrollTo（0，/*scrollView顶部Y坐标*/）

  * scrollView中嵌套listView最蛋疼的一个问题就是listView的高度问题，不论listView如何设置layout_height，list的高度都只会是一个item的高度。有四种解决办法：  
（1）手动设置listView的高度  
（2）使用单个listView来取代scrollView中的所有控件，这个要判断条件，使用不同的itemStyle  
（3）使用LinearLayout代替listView,意思就是动态的添加线性布局,不适合重复量大的任务  
（4）自定义可适应ScrollView的listView  
第一种方法时最常用的方法，listView的高度动态改变，用循环获取adapter中的item总高度：  
```
View listItem = listAdapter.getView(i,null,listView);
llistItem.measure(0,0);
totalHeight += listItem.getMeasuredHeight();  


### RadioGroup中动态添加RadioButton以及按钮取值监听
  * 添加RadioButton
```  
RadioGroup group;
for(int i=0;i<10;i++)
{
  RadioButton tempButton = new RadioButton(this);
  group.addView(tempButton,LinearLayout.LayoutParams.FILL_PARENT,LinearLayout.LayoutParams.WRAP_CONTENT);
}  
```  

  * 为RadioGroup添加时间处理，可以得到当前选择的RadioButton
```  
        group.setOnCheckedChangeListener(new OnCheckedChangeListener() {
            
            @Override
            public void onCheckedChanged(RadioGroup group, int checkedId) {
                // TODO Auto-generated method stub
                RadioButton tempButton = (RadioButton)findViewById(checkedId); // 通过RadioGroup的findViewById方法，找到ID为checkedID的RadioButton
                // 以下就可以对这个RadioButton进行处理了
            }
        });  
```

### ProgressBar缓冲控件的使用  
    ProgressBar，进度条，是AndroidUI界面中一个非常实用的组件，通常用于向用户显示某个耗时操作完成的百分比。
因此它需要动态的显示进度，从而避免长时间的执行某个耗时的操作，而让用户感觉程序失去了相应，从而提高界面的友好性。<br />

Android内置了几种风格的进度条，可以通过Style属性设置ProgressBar的风格。支持如下属性:

  * @android:style/Widget.ProgressBar.Horizontal：水平进度条（可以显示刻度，常用）。
  * @android:style/Widget.ProgressBar.Small：小进度条。
  * @android:style/Widget.ProgressBar.Large：大进度条。
  * @android:style/Widget.ProgressBar.Inverse：不断跳跃、旋转画面的进度条。
  * @android:style/Widget.ProgressBar.Large.Inverse:不断跳跃、旋转动画的大进度条。
  * @android:style/Widget.ProgressBar.Small.Inverse：不断跳跃、旋转动画的小进度条。
 
  圆形进度条的动画效果实现：
  在/res/layout/anim文件夹在写如旋转动画：
> image_loading.xml

```
<?xml version="1.0" encoding="utf-8"?>
<animated-rotate xmlns:android="http://schemas.android.com/apk/res/android"
    android:pivotX="50%"
    android:pivotY="50%" >
</animated-rotate>
```  
在values/style文件中写入自己定义的进度圈属性  
```
<style name="myProgressBarStyleLarge">
　　<item name="android:indeterminateDrawable">\@drawable\/progress_large</item> 
　　<item name="android:minWidth">76dip</item>
　　<item name="android:maxWidth">76dip</item>
　　<item name="android:minHeight">76dip</item>
　　<item name="android:maxHeight">76dip</item>
</style>
```
要实现加载数据时现实进度条，完成任务时关闭的效果，首先在xml编写时将控件设置为Visiable Gone,在开启线程的时候时候去除这一属性，加载动画效果，完成任务后向handler发送信息，在UI线程中再次隐藏控件。