# Android SQLite入门
&nbsp;&nbsp;&nbsp;&nbsp;在所有的数据操作中，SQLite是最权威的存储引擎，下面简单的介绍一下SQLite的在项目中的实现方法。
&nbsp;&nbsp;&nbsp;&nbsp;首先是数据库的创建与更新类DBHelper.java
```  
/**
 * 用于创建和更新数据库
 * 
 * @author joy
 * 
 */
public class DBHelper extends SQLiteOpenHelper {

	private static final String DATABASE_NAME = "test.db";
	private static final int DATABASE_VERSION = 1;

	public DBHelper(Context context) {
		// CursorFactory设置为null,使用默认值
		super(context, DATABASE_NAME, null, DATABASE_VERSION);
	}

	// 数据库第一次被创建时onCreate会被调用
	@Override
	public void onCreate(SQLiteDatabase db) {
		db.execSQL("CREATE TABLE IF NOT EXISTS person"
				+ "(_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR, age INTEGER, info TEXT)");
	}

	// 如果DATABASE_VERSION值被改为2,系统发现现有数据库版本不同,即会调用onUpgrade
	@Override
	public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
		db.execSQL("ALTER TABLE person ADD COLUMN other STRING");
	}
}
```  
然后是封装了常用数据库增删改查操作的DBManager.java类  
```  
/**
 * 用于增删改查
 * 
 * @author joy
 * 
 */
public class DBManager {
	private DBHelper helper;
	private SQLiteDatabase db;

	public DBManager(Context context) {
		helper = new DBHelper(context);
		// 因为getWritableDatabase内部调用了mContext.openOrCreateDatabase(mName, 0,
		// mFactory);
		// 所以要确保context已初始化,我们可以把实例化DBManager的步骤放在Activity的onCreate里
		db = helper.getWritableDatabase();
	}

	/**
	 * add persons
	 * 
	 * @param persons
	 */
	public void add(List<Person> persons) {
		db.beginTransaction(); // 开始事务
		try {
			for (Person person : persons) {
				db.execSQL("INSERT INTO person VALUES(null, ?, ?, ?)",
						new Object[] { person.name, person.age, person.info });
			}
			db.setTransactionSuccessful(); // 设置事务成功完成
		} finally {
			db.endTransaction(); // 结束事务
		}
	}

	/**
	 * update person's age
	 * 
	 * @param person
	 */
	public void updateAge(Person person) {
		ContentValues cv = new ContentValues();
		cv.put("age", person.age);
		db.update("person", cv, "name = ?", new String[] { person.name });
	}

	/**
	 * delete old person
	 * 
	 * @param person
	 */
	public void deleteOldPerson(Person person) {
		db.delete("person", "age >= ?",
				new String[] { String.valueOf(person.age) });
	}

	/**
	 * query all persons, return list
	 * 
	 * @return List<Person>
	 */
	public List<Person> query() {
		ArrayList<Person> persons = new ArrayList<Person>();
		Cursor c = queryTheCursor();
		while (c.moveToNext()) {
			Person person = new Person();
			person._id = c.getInt(c.getColumnIndex("_id"));
			person.name = c.getString(c.getColumnIndex("name"));
			person.age = c.getInt(c.getColumnIndex("age"));
			person.info = c.getString(c.getColumnIndex("info"));
			persons.add(person);
		}
		c.close();
		return persons;
	}

	/**
	 * query all persons, return cursor
	 * 
	 * @return Cursor
	 */
	public Cursor queryTheCursor() {
		Cursor c = db.rawQuery("SELECT * FROM person", null);
		return c;
	}

	/**
	 * close database
	 */
	public void closeDB() {
		db.close();
	}
}
```  
自定义数据结构Person.java
``` 
/**
 * 用于建立数据结构
 * 
 * @author joy
 * 
 */
public class Person {
	public int _id;
	public String name;
	public int age;
	public String info;

	public Person() {
	}

	public Person(String name, int age, String info) {
		this.name = name;
		this.age = age;
		this.info = info;
	}
}
```  
为了测试方便，直接在代码中实现视图控制，生成listView来表示数据库
```  
public class MainActivity extends Activity {

	private DBManager mgr;
	private ListView listView;

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		listView = (ListView) findViewById(R.id.listView);
		// 初始化DBManager
		mgr = new DBManager(this);
	}

	@Override
	protected void onDestroy() {
		super.onDestroy();
		// 应用的最后一个Activity关闭时应释放DB
		mgr.closeDB();
	}

	public void add(View view) {
		ArrayList<Person> persons = new ArrayList<Person>();

		Person person1 = new Person("jialichen", 19, "lovely boy");
		Person person2 = new Person("yangjingxiu", 22, "strong boy");
		Person person3 = new Person("fangfang", 19, "cool boy");
		Person person4 = new Person("yaojie", 22, "high man");
		Person person5 = new Person("huangkai", 19, "a man!");
		Person person6 = new Person("MagicZhou", 21, "sexy girl");

		persons.add(person1);
		persons.add(person2);
		persons.add(person3);
		persons.add(person4);
		persons.add(person5);
		persons.add(person6);

		mgr.add(persons);
	}

	public void update(View view) {
		Person person = new Person();
		person.name = "MagicZhou";
		person.age = 22;
		person.info = "BOXER";
		mgr.updateAge(person);
	}

	public void delete(View view) {
		Person person = new Person();
		person.age = 19;
		mgr.deleteOldPerson(person);
	}

	public void query(View view) {
		List<Person> persons = mgr.query();
		ArrayList<Map<String, String>> list = new ArrayList<Map<String, String>>();
		for (Person person : persons) {
			HashMap<String, String> map = new HashMap<String, String>();
			map.put("name", person.name);
			map.put("info", person.age + " years old, " + person.info);
			list.add(map);
		}
		SimpleAdapter adapter = new SimpleAdapter(this, list,
				android.R.layout.simple_list_item_2, new String[] { "name",
						"info" }, new int[] { android.R.id.text1,
						android.R.id.text2 });
		listView.setAdapter(adapter);
	}

	public void queryTheCursor(View view) {
		Cursor c = mgr.queryTheCursor();
		startManagingCursor(c); // 托付给activity根据自己的生命周期去管理Cursor的生命周期
		CursorWrapper cursorWrapper = new CursorWrapper(c) {
			@Override
			public String getString(int columnIndex) {
				// 将简介前加上年龄
				if (getColumnName(columnIndex).equals("info")) {
					int age = getInt(getColumnIndex("age"));
					return age + " years old, " + super.getString(columnIndex);
				}
				return super.getString(columnIndex);
			}
		};
		// 确保查询结果中有"_id"列
		SimpleCursorAdapter adapter = new SimpleCursorAdapter(this,
				android.R.layout.simple_list_item_2, cursorWrapper,
				new String[] { "name", "info" }, new int[] {
						android.R.id.text1, android.R.id.text2 });
		ListView listView = (ListView) findViewById(R.id.listView);
		listView.setAdapter(adapter);
	}
} 
```  



