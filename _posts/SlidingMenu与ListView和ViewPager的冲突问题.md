# SlidingMenu与ListView和ViewPager滑动冲突问题
  * 开发的过程中遇到界面需要使用SlidingMenu实现侧滑栏，在主栏目中需要用ListView加载循环数据，前者是水平方向的拖动效果，后者是垂直方向的拖动，同时使用时，ListView滚动失效。  
  解决方法是重写自定义的LinearLayout，新建类MyLinearLayout.java  
  ```  
  public class JourneyLinearLayout extends LinearLayout {  
    private GestureDetector mGestureDetector;  
    View.OnTouchListener mGestureListener;  
  
    private boolean isLock = true;  
  
    private OnScrollListener onScrollListener;// 自定义接口  
  
    private boolean b;  
  
    public JourneyLinearLayout(Context context) {  
        super(context);  
    }  
  
    public void setOnScrollListener(OnScrollListener onScrollListener) {  
        this.onScrollListener = onScrollListener;  
    }  
  
    public JourneyLinearLayout(Context context, AttributeSet attrs) {  
        super(context, attrs);  
        mGestureDetector = new GestureDetector(new MySimpleGesture());  
    }  
  
    @Override  
    public boolean dispatchTouchEvent(MotionEvent ev) {  
        Log.e("jj", "dispatchTouchEvent...");  
        // 获取手势返回值  
        b = mGestureDetector.onTouchEvent(ev);  
        // 松开手要执行一些操作。(关闭 or 打开)  
        if (ev.getAction() == MotionEvent.ACTION_UP) {  
            onScrollListener.doLoosen();  
        }  
        return super.dispatchTouchEvent(ev);  
    }  
  
    @Override  
    public boolean onInterceptTouchEvent(MotionEvent ev) {  
        Log.e("jj", "onInterceptTouchEvent...");  
        super.onInterceptTouchEvent(ev);  
        return b;  
    }  
    /*** 
     * 在这里我简单说明一下 
     */  
    @Override  
    public boolean onTouchEvent(MotionEvent event) {  
        Log.e("jj", "onTouchEvent...");  
        isLock = false;  
        return super.onTouchEvent(event);  
    }  
  
    /*** 
     * 自定义手势执行 
     *  
     * @author joy
     *  
     */  
    class MySimpleGesture extends SimpleOnGestureListener {  
  
        @Override  
        public boolean onDown(MotionEvent e) {  
            Log.e("jj", "onDown...");  
            isLock = true;  
            return super.onDown(e);  
        }  
  
        @Override  
        public boolean onScroll(MotionEvent e1, MotionEvent e2,  
                float distanceX, float distanceY) {  
  
            if (!isLock)  
                onScrollListener.doScroll(distanceX);  
  
            // 垂直大于水平  
            if (Math.abs(distanceY) > Math.abs(distanceX)) {  
                // Log.e("jjj", "ll...垂直...");  
                return false;  
            } else {  
                // Log.e("jjj", "ll...水平...");  
                // Log.e("jj", "distanceX===" + distanceX);  
                return true;  
            }  
  
        }  
    }  
  
    /*** 
     * 自定义接口 实现滑动... 
     *  
     * @author joy
     *  
     */  
    public interface OnScrollListener {  
        void doScroll(float distanceX);// 滑动...  
  
        void doLoosen();// 手指松开后执行...  
    }  
}  

新的类的作用就是捕捉手势，根据在X\Y方向上滑动的距离，若moveX大于moveY则认为是水平滑动，调用SlidingMenu侧滑栏，否则调用ListView。  
SlidingMenu与ViewPager的冲突暂时没有处理，问题在于若存在左划栏，且子标签也需要向左滑动这样的情况，SlidingMenu会拦截ViewPager的手势响应。现在想到的解决思路是判断子标签划到两边时再调用SlidingMenu,或者判断手势Down的位置距离屏幕边缘的距离，在一定的距离范围内即可调用SlidingMenu划出侧边栏,其余状态下调用ViewPager。需要注意的是ViewPager和SlidingMenu都调用了support-v4包，在引入的时候要保证其版本相同。