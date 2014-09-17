# Android中Intent跳转与传递数据
  * 使用Intent在两个Activity之间实现跳转
  * 使用Intent的putExtra传递数据到另一个Activity
  * 使用getStringExtgra接收另一个Activity的数据
  * 通过setClsss设置两个跳转的Activity
  * 通过startActivity跳转到指定的Activity
  ```  
  	public void IntentTest(View v) {
		Intent intent = new Intent();											     //声明一个Intent对象
		intent.setClass(FullscreenActivity.this, Login.class);						 //设置当前Activity和要跳转的Activity
		EditText text_username = (EditText) this.findViewById(R.id.username);		 //从视图中获取username的EditText对象
		EditText text_password = (EditText) this.findViewById(R.id.password);
		String username = text_username.getText().toString();						 //获取username的值
		String password = text_password.getText().toString();
		intent.putExtra("username", username);										 //使用putExtra准备好要传递的数据
		intent.putExtra("password", password);
		startActivity(intent);														 //开始跳转
		FullscreenActivity.this.finish();											 //停止当前的Activity
	}
	
	
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		String username=getIntent().getStringExtra("username");						 //使用getintent下的getStringExtra获取传递过来的数据
		String password=getIntent().getStringExtra("password");
		Toast.makeText(this, username+"---"+password, Toast.LENGTH_SHORT).show();
	}
  ```  