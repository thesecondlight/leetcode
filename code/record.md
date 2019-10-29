---
title: 学习记录
url: 12.html
id: 12
categories:
  - A coin a day
date: 2019-10-21 11:11:18
tags: get一个硬币 
---
[TOC]
目录看右下角...


#### 1.文件权限 

rwx 1 2 4

d rwx r_x r_x

d文件目录

<!--more-->

rwx文件所有者

r_x文件所属组

r_x其他人

chmod更改权限 chomd 755 idnex.txt

#### 2.sql变量

##### 系统变量{全局变量(global) 会话变量(session)}  

##### 自定义变量{局部变量 用户(赋值)变量}



<u>*全局级别加global，会话界别加session，不加默认session*</u>

show variables;优先显示会话级变量的值，如果不存在，则显示全局级变量的值

查看所有的系统变量 :show global variables;

查看满足条件的部分系统变量：show  variables like ‘%char%’

查看指定的某个系统变量值：select 系统变量名

为系统变量赋值 eg: set autocommit=0;



用户变量 赋值 set @sum=10; set @sum:=10;

局部变量 声明 declare sum int(20); declare sum int default 10;

​                 赋值 set sum=10; select @sum:=10;

#### 3.sql函数

avg()平均值

count()返回行数

MAX()

MIN()

SUM()

<!--first()返回第一个记录的值--> select site from t2019  order by site asc limit 1;

<!--last()返回最后一个记录的值-->select site from t2019  order by site desc limit 1;

HAVING 字句  having sum(money)>1000;

UPPER()字段值转大写显示

LOWER()字段值转小写显示

MID()  select MID(remarks,1,3) from t2019; remarks字段的第一位到第三位

LEN() 字段值长度

ROUND() 字段值舍入为指定的小数位数  select ROUND(1.255); =>1

​																	  select ROUND(money,3) from t2019;=>500.12  500.120

NOW()当前系统日期和时间

FORMAT()格式化字段显示 eg：select data_format(now(),'%Y-%m') from t2019;

 sql快速参考xi：https://www.runoob.com/sql/sql-quickref.html 

#### 4.正则 正向预查 反向预查

正向预查(?=)满足前面的表达式  eg: /\b[/w]+(?=ing\b)/g/匹配全局带ing的单词，但是不要ing

反向预查(?<=)满足后面的表达式 eg:/(?<=index\\\.ts)/ 匹配以.ts结尾 ,左边是index

/g 全局匹配

/w匹配字母，数字，下划线

/d匹配数字

/b匹配单词的边界

^匹配字符串的开始

$ 匹配字符串的结束

eg:

\ba\w*\b   \b开始  a，任意(0或更多)数量的字母或数字(\w\*) \b结束

\d+ 匹配一个或更多连续的数字(+一次或更多，*0次或更多)

\b\w{6}\b 匹配刚好6个字符的单词

#### 5.尾调用优化

尾调用：在函数的最后一步是直接返回调用另一个函数

优化：在函数A的内部调用函数B  在A的调用记录上方，会形成一个B的调用记录，等到B的运行结束，将结果返回A，B的调用记录消失。(确保函数的最后一步只调用自身)

所有的调用记录形调用栈

eg:

复杂度O(n)

function f(){

​	if(n===1) return 1;

​	return n*f(n-1);

}

复杂度O(1)

function f(n,total=1){

​	if(n==1) return total; 

​	return f(n-1,n*total)

}

#### 6.mocha覆盖率

%stmts %Branch % Funcs %Lines

语句覆盖率 分之覆盖率 函数覆盖率 行覆盖率

（最弱覆盖）                                      （最全）

#### 7.递归和迭代的转化 区别

![1571377276911](http://l.yumud.com/1571377276911.png)

<!--(借用了别人借用的图)-->

#### 8.版本号

主版本号  次版本号  修订号  先行版本号  版本编译元数据(不在优先级比较的列表中)

​      X               Y               Z

X 当API的兼容性变化时，递增

Y 增加功能，不影响API的兼容性，递增

Z Bug修复，不影响API兼容性，递增

^主版本号不变  ^1.2.3==>1.2.3<=版本号<2.0.0     1.x.x

~主次不变         ~1.2.3==>1.2.3<=版本号<1.3.0      1.2.x

#### 9.SQL自定义函数

delimiter //

create function countSum(id int) return int(11)

​	DETERMINISTIC

begin

​	declare temp int;

​	select count(*) into temp from t2019 where site=id;

​	return temp; 

end

//

**deterministic

#### 10.临时表 派生表

##### 临时表 

内部临时表（MySQL自动创建） 外部临时表（create temporary table）

##### 派生表

查询结果生成的表 ，类似于临时表

select * from (select * from others) temp;   temp即派生表

#### 11.事件循环

#### 12.事务 乐观锁 悲观锁

##### ①事务

START TRANSACTION;

COMMIT;/ROLLBACK;

##### ②悲观锁 乐观锁

乐观锁 update tb set version=version+1 where version=version    在写操作频繁的场景下会不断发生重试，也会影响吞吐量

悲观锁 set autocommit=0 (不允许自动提交)

​	用for update给每行数据加排他锁 (使用条件:InnoDB，**BEGIN/COMMIT**)

​	1)根据主键进行查询，查询到数据，主键字段产生行锁 (只是查询的那个字段的数据产生锁，查询这个字段的其他数据不会产生锁)

​    2)没有查询到数据，不产生锁

​    3)根据主键，非主键含索引进行查询，查询到数据，主键字段产生行锁，非主键字段产生表锁（非主键字段的所有数据都会有锁）

​	4)....

sequelize加排它锁

await Accounts.findOne({
    where: { name: 'HelKyle' },
    lock: Sequelize.Transaction.LOCK.UPDATE
});

#### 13.tcp/ip

 https://blog.csdn.net/u012371712/article/details/80795297 

![1571379820232](http://l.yumud.com/1571379820232.png)

五层：应用层  传输层 网络层  连接层 物理层

#### 14.请求方式

get put post delete

post时，填写参数  ，返回参数ctx.request.query

#### 15.content-type

application/json  消息主体是 序列化后的JSON字符串

application/x-www-form-urlencoded  数据被编码为名称/值对。这是标准的编码格式

multipart/form-data   需要在表单中进行文件上传时，使用。

text/plain  数据以纯文本形式(text/json/xml/html)进行编码，不含任何控件或格式字符

#### 16.string.split arr.join

string.split("*") 字符串转数组 以星号作分割依据

arr.join(“*”) 数组转字符串  用星号作连接

#### 17.索引

索引

唯一索引：查到符合条件的继续查找下一项，如果下一项不符合再返回

普通索引：查到符合条件的项后直接返回

创建索引

create index sy1 on t2019(site);

添加索引

alter table t2019 add index sy2(money);

创建表时直接指定

create table t2019(

​	site int not null,

​	INDEX [sy3] (site]

)

删除索引

drop index [sy1] on t2019;

唯一索引

create unique index sy4 on t2019 (site)

#### 18.sequelize事务，加锁

t1 //is a transaction

Model.findAll({

 	where:...

},{

​	transaction: t1,  //**注意

​	lock: t1.LOCK.UPDATE,   //**注意

​	lock: t1.LOCK.SHARE

})

#### 19.与 或 异或  左移 右移(按二进制位进行运算)

与 &  同1为1，否则为0

或 |  有1则1

异或 ^  相同为1，不同为0

左移 <<  左移，移出位丢弃，右边的空位补0

右移 >>  右移，移出位丢弃，左边的空位补0