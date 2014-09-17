# Android输入重置
------------------
  在移动开户端开发中有一些小细节会影响到用户的体验，比如说输入栏--在网页上，用户可以轻松地编辑自己的输入，而在手机上，遇到输入出错需要重新输入，一个一个词删除会非常的麻烦。这里可以加入这样一个功能，在用户输入时，让EditView捕捉输入内容的变化，在非空的情况下给用户提供一个删除按钮，在没用输入的情况下，让删除按钮消失。具体的代码实现：
```
//首先定义并且初始化两个用于辅助判断的boolean变量
private Boolean input_top = false, input_bottom = false;
```  
在编写xml文件的时候，注意将删除按钮隐藏在设计好的位置。给每个输入条加上监听器：
```
/*
	 * 重置输入框
	 */
	private TextWatcher inputDelete = new TextWatcher() {

		@Override
		public void onTextChanged(CharSequence arg0, int arg1, int arg2,
				int arg3) {

		}

		@Override
		public void beforeTextChanged(CharSequence arg0, int arg1, int arg2,
				int arg3) {
			// TODO Auto-generated method stub

		}

		@Override
		public void afterTextChanged(Editable arg0) {
			// 帐号输入
			if (input_username.getText().length() > 0 && input_top == false) {
				ic_delete_1.setVisibility(View.VISIBLE);
				input_top = true;
			} else if (input_username.getText().length() < 1
					&& input_top == true) {
				ic_delete_1.setVisibility(View.GONE);
				input_top = false;
			} else {
				return;
			}
			// 密码输入
			if (input_password.getText().length() > 0 && input_bottom == false) {
				ic_delete_2.setVisibility(View.VISIBLE);
				input_bottom = true;
			} else if (input_password.getText().length() < 1
					&& input_bottom == true) {
				ic_delete_2.setVisibility(View.GONE);
				input_bottom = false;
			} else {
				return;
			}
		}
	};
```


