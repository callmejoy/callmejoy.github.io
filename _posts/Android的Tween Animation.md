# Android的Tween Animation
  * 补间动画分为旋转，移动，缩放，淡入淡出
  * 首先创建一个Animationset对象
  * 再创建一个Aniation对象
  * 为Animation设置相应的数据
  * 将Animation动画放到Animationset中
  * 使用空间加载Animation
  ```  
  	@Override
	public void onClick(View v) {											//处理点击事件
		switch (v.getId()) {												//判断点击的id
		case R.id.Alpha:													//处理淡入淡出动画
			AnimationSet animationSet_1 = new AnimationSet(true);
			AlphaAnimation alpha = new AlphaAnimation(1, 0);				//1,0表示透明度的变化
			alpha.setDuration(2000);										//设置动画时间
			animationSet_1.addAnimation(alpha);
			Alpha_btn.startAnimation(animationSet_1);

			break;
		case R.id.Rotate:													//处理旋转动画
			AnimationSet animationSet_3 = new AnimationSet(true);
			RotateAnimation rotate = new RotateAnimation(0, 360);
			rotate.setDuration(2000);
			animationSet_3.addAnimation(rotate);
			Rotate_btn.startAnimation(rotate);
			break;
		case R.id.Translate:												//处理移动动画
			AnimationSet animationSet_4 = new AnimationSet(true);
			TranslateAnimation translate = new TranslateAnimation(
					Animation.RELATIVE_TO_PARENT, 0f,						//从X轴的0到1移动
					Animation.RELATIVE_TO_PARENT, 1f,
					Animation.RELATIVE_TO_PARENT, 0f,						//Y轴不变
					Animation.RELATIVE_TO_PARENT, 0f);
			translate.setDuration(2000);
			animationSet_4.addAnimation(translate);
			Translate_btn.startAnimation(translate);
			break;
		case R.id.Scale:													//处理缩放动画
			AnimationSet animationSet_2 = new AnimationSet(true);
			ScaleAnimation scale = new ScaleAnimation(1, 0.1f, 1, 0.1f,		//X,Y轴从1缩放到0.1
			Animation.RELATIVE_TO_SELF, 1, Animation.RELATIVE_TO_SELF,
					0.1f);
			scale.setDuration(2000);
			animationSet_2.addAnimation(scale);
			Scale_btn.startAnimation(scale);
			break;
		}

	}
  ```  