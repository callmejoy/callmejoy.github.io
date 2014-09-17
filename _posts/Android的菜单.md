# Android的菜单
  * 选项菜单(按menu键)
  ```  
  	@Override
	public boolean onCreateOptionsMenu(Menu menu) {											//创建选项菜单
		getMenuInflater().inflate(R.menu.test, menu);										//读取资源中的配置文件，在xml中自定义
		SubMenu sub = menu.addSubMenu(1, 1, 100, "设置");									//定义子菜单
		sub.add(0, 1, 100, "声音设置");														//在子菜单中添加菜单
		sub.add(0, 2, 200, "背景设置");

		return true;
	}
	@Override
	public boolean onOptionsItemSelected(MenuItem item) {									//菜单点击事件
		int id = item.getItemId();															//获取点击的菜单的id
		switch (id) {
		case R.id.start:
			Toast.makeText(this, "点击了开始菜单", Toast.LENGTH_SHORT).show();				//抛出提示信息
			break;
		case R.id.end:
			Toast.makeText(this, "点击了结束菜单", Toast.LENGTH_SHORT).show();
			break;
		return super.onOptionsItemSelected(item);
	}
  ```
  * 上下文菜单(长按)
  ```  
  
	@Override
	public void onCreateContextMenu(ContextMenu menu, View v,								//创建上下文菜单
			ContextMenuInfo menuInfo) {
		super.onCreateContextMenu(menu, v, menuInfo);
		getMenuInflater().inflate(R.menu.contextmenu, menu);								//获取上下文菜单的配置
	}

	@Override
	public boolean onContextItemSelected(MenuItem item) {									//菜单点击事件处理
		switch (item.getItemId()) {
		case R.id.a:
			Toast.makeText(this, "点啊点啊点啊点", Toast.LENGTH_SHORT).show();
			break;
		case R.id.b:
			Toast.makeText(this, "点啊点啊点啊点", Toast.LENGTH_SHORT).show();
			break;
		}
		return super.onContextItemSelected(item);
	}
  ```
  * 弹出式菜单(点击弹出菜单)
  ```  
	//此处需在视图中定义按钮，绑定点击事件到showpopup方法
  	public void showpopup(View v) {															//点击按钮后出发菜单显示
		PopupMenu popupmenu = new PopupMenu(this, v);										//实例化弹出菜单
		MenuInflater inflater = popupmenu.getMenuInflater();								//定义一个菜单填充器
		inflater.inflate(R.menu.popup, popupmenu.getMenu());								
		popupmenu.setOnMenuItemClickListener(this);											//设置菜单内容的点击
		popupmenu.show();

	}

	@Override
	public boolean onMenuItemClick(MenuItem item) {											//处理菜单内容的事件
		switch (item.getItemId()) {
		case R.id.popup1:
			Toast.makeText(this, "滴滴..", Toast.LENGTH_SHORT).show();						//抛出提示信息
			break;
		case R.id.popup2:
			Toast.makeText(this, "哒哒..", Toast.LENGTH_SHORT).show();
			break;
		}
		return false;
	}
  ```