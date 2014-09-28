---
layout: post
title: PHP+form文件上传
description: 网页中文件上传是很常见的一个功能，也是初学php过程中碰到的可能稍微复杂一点模块。下面介绍自己在项目中遇到的各种问题......
category: blog
---
#### 直接上代码
  * html中
  
  ``` 
  <form action="image-upload" method="post" enctype="multipart/form-data">
                <input type="file" name="pic">
                <input id="recommand-submit-btn" type="submit">
  </form>  
  ```
                        
##### action为你想要跳转的控制器中的方法，现在表单提交之后图片会在服务器上生成一个临时文件，php脚本结束之后会被清除掉
  * 图片路径的php代码  
  
  ``` 
  $_FILES['file']['tmp_name'];
  ```
  现在要做的是，在图片被清除之前，将它转移到其他目录下，这里我把图片转移到自己的./view/images目录下。  
  
```
move_uploaded_file($_FILES["pic"]["tmp_name"],"./view/images/".$_FILES["pic"]["name"]);  
```
  name为图片文件的名称。  
  这个地方可能会遇到permission deny的问题，由于图片的转移要操作文件，这里要注意文件和文件夹权限问题。最方便的方法是直接将文件的权限改成777：
  
  ```
  sudo chmod 777 路径；
  ```