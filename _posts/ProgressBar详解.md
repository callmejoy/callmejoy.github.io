##  ProgressBar详解
---------------------
>系统自带的ProgressBar直接继承于View类，有以下几点要注意：  

  * ProgressBar有两个进度条，一个是android:progress，另一个是android:secondaryProgress。后者常用来做缓存的进度
  * ProgressBar分为确定和不确定的，确定的进度条有进度值，不确定的进度条像圆圈型的加载图。这个属性由android:indeterminate来控制，
  * ProgressBar的样式： * Widget.ProgressBar.Horizontal
  						* Widget.ProgressBar.Small
  						* Widget.ProgressBar.Inverse
  						* Widget.ProgressBar.Large.Inverse
  	设定有两种方式：  * style="@android:style/Widget.ProgressBar.Small"
  					  * style="?android:attr/progressBarStyleLarge"
