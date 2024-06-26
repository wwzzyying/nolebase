# `touch` 创建文件

## 说明

touch，触摸的含义；类似于触摸一下，多了一个文件出来的感觉。使用这个命令可以修改文件或者目录的时间属性，包括存取时间和更改时间。若文件不存在，系统会建立一个新的文件，该文件没有任何编码、内容，只是占用「文件名」的大小

### 语法

```shell
touch [-acfm][-d<日期时间>][-r<参考文件或目录>] [-t<日期时间>][--help][--version] [文件或目录…]
```

### 示例

```shell
$ ls -la
总用量 4
drwxrwxr-x  2 neko neko    6 10月  9 17:21 .
drwxr-xr-x 16 neko neko 4096 10月  9 17:21 ..

$ touch hello

neko@ls-865528-12130-12130 ~/test
$ ls -la
总用量 4
drwxrwxr-x  2 neko neko   19 10月  9 17:21 .
drwxr-xr-x 16 neko neko 4096 10月  9 17:21 ..
-rw-rw-r--  1 neko neko    0 10月  9 17:21 hello # 多了一个 hello 文件
```

如果此时我们查看 hello 文件的信息、内容，会发现里面都是空的：

```shell
$ file hello
hello: empty

$ cat hello

```

## 参数

### 其他参数

| 参数            | 说明                                                         |
| --------------- | ------------------------------------------------------------ |
| **-a**          | 改变档案的读取时间记录。                                     |
| **-m**          | 改变档案的修改时间记录。                                     |
| **-c**          | 假如目的档案不存在，不会建立新的档案。与 --no-create 的效果一样。 |
| **-f**          | 不使用，是为了与其他 unix 系统的相容性而保留。               |
| **-r**          | 使用参考档的时间记录，与 --file 的效果一样。                 |
| **-d**          | 设定时间与日期，可以使用各种不同的格式。                     |
| **-t**          | 设定档案的时间记录，格式与 date 指令相同。                   |
| **--no-create** | 不会建立新档案。                                             |
