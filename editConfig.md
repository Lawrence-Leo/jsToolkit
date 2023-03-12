作用：**统一不同编辑器的编码风格**

配置：

控制 .editorconfig 是否生效的字段

````
root = true
````

设置字符集

````
# 设置字符集
charset = utf-8
````

后缀文件匹配

````
# 匹配全部文件
[*]
# 匹配py结尾的文件
[*.py]
# 匹配js和py结尾的文件
[*.{js,py}]
````

结尾换行符（ lf、cr、crlf）

````
end_of_line = lf
````

文件结尾插入新行

````
insert_final_newline = true
````

删除一行中的前后空格

````
trim_trailing_whitespace = true
````

缩进风格（space、tab）

````
indent_style = space
````

缩进空格数

````
indent_size = 4
````

推荐配置

````
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

# 对后缀名为 md 的文件生效
[*.md]
trim_trailing_whitespace = false
````



