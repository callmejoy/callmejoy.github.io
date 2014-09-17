# Sharepreference缓存界面信息  
----------------
  应用中，如果客户端和服务端交互刷新数据用时太久，用户体验差，可以将每次加载的界面数据缓存下来，每次进入界面首先判断有没有缓存，如果没有缓存，就开线程去服务端拉取数据，如果有缓存，则直接调用缓存的信息，这样界面加载的速度要快很多。   
  Android应用中用于数据缓存的几种方法分别是： 
  * 使用SharePreference存储；
  * 文件存储数据；  
  * SQLite数据库存储数据；
  * 使用ContentProvider储存数据  
  
     文件存储主要用在图片缓存和游戏数据缓存，SQLite是Android内部自带的一个轻量级的数据库，功能很强大，但是使用SQLite需要自定义DBHelper，在开发初期功能任务较多的时候很难有精力去实现这样一套东西，使用起来不是很方便,如果只是纯json数据需要储存，可以考虑使用sharePreference加上Gson库来实现json数据的解析和储存，十分方便。<br />
  下面是时间中使用过的代码片段：
```  
public class UserUtils {  
    // 拿到user_info中储存的String数据
    public static String getUserInfo() {  
        SharedPreferences pref = getAppContext().getSharedPreferences(  
                "user_login", 0);  
            return pref.getString("user_info", "");  
    }  
    // 设置储存的信息，注意一定要commit()
    public static boolean saveUserInfo(String info) {  
        SharedPreferences pref = getAppContext().getSharedPreferences(  
                "user_login", 0);  
        return pref.edit().putString("user_info", info).commit();  
    }  
}  
``` 

   拿到服务器端返回的json数据后，直接调用Gson类解析
```
    Gson gson = new Gson();  
    User user = gson.fromJson(response, User.class);  
    //对user的变量做一些修改，然后保存  
    UserUtils.saveUserInfo(gson.toJson(user));  //下次使用的时候就可以不用访问网络资源了  
    User user = gson.fromJson(UserUtils.getUserInfo(), User.class);
```  
    注意在判断是否有缓存的时候，如果直接判断userInfo.getString("string", xx)，如果没有设置过内容，这里的判断会报变量未定义的错误，所以在这里可以在sharepreference中设置新的boolean型字段，用于判断是否有缓存
```
userInfo.getBoolean("ifexist", false)
```
这段代码的意思是，如果没有“ifexist”这条数据，则会默认返回false。在添加了缓存数据之后，记得将ifexist的值修改为true。
