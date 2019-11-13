

[TOC]



#### ![](http://l.yumud.com/notes.png)文件权限 

<!--more-->

rwx 1 2 4

d rwx r_x r_x

d文件目录

rwx文件所有者

r_x文件所属组

r_x其他人

chmod更改权限 chomd 755 idnex.txt

#### ![](http://l.yumud.com/notes.png)sql变量

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

#### ![](http://l.yumud.com/notes.png)sql函数

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

#### ![](http://l.yumud.com/notes.png)

《正则表达式30分钟入门》 https://deerchao.cn/tutorials/regex/regex.htm 

正向预查(?=)满足**前面**的表达式  eg: /\b[/w]+(?=ing\b)/g/匹配全局带ing的单词，但是不要ing

反向预查(?<=)满足**后面**的表达式 eg:/(?<=index\\\.ts)/ 匹配以.ts结尾 ,左边是index

\g 全局匹配

. 匹配除换行符外的任意字符

\w匹配字母，数字，下划线     \W 匹配非字母 数字 下划线 汉字的字符

\d匹配数字                                 \D 匹配非数字的字符

\b匹配单词的边界					 \B 匹配不是单词开头或结束的位置

^匹配字符串的开始  				 \[^x] 匹配除了x 以外的任意字符    \S 匹配任意不是空白符的字符

$ 匹配字符串的结束

\ 取消字符的特殊意义

+重复一次或多次

*重复0次或多次

？重复0次或1次

{n}重复n次

{n,}重复n次或多次

{n,m}重复n到m次

| 或

eg:

\ba\w*\b   \b开始  a，任意(0或更多)数量的字母或数字(\w\*) \b结束

\d+ 匹配一个或更多连续的数字(+一次或更多，*0次或更多)

\b\w{6}\b 匹配刚好6个字符的单词

^\d{5,12}}$ 匹配5-12位的数字 

\\(?0\d{2}[) -]?\d{8}  \转义字符，（左括号能出现0/1次,跟一个0，两个数字，右括号)空格-出现0/1次，八位数字

**贪婪与懒惰**

以下均为“尽可能少重复”

*？     重复任意次

+？     重复一次或更多次

？？   重复0次或1次

{n,m}？重复n-m次

{n,}?      重复n次以上

eg： a.*b  匹配最长的以a开始，b结束的字符串

​		 a.*?b 匹配最短的以a开始，b结束的字符串

嘻嘻：\a 报警字符(打印时，电脑嘀一声)

#### ![](http://l.yumud.com/notes.png)尾调用优化

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

#### ![](http://l.yumud.com/notes.png)mocha覆盖率

%stmts %Branch % Funcs %Lines

语句覆盖率 分之覆盖率 函数覆盖率 行覆盖率

（最弱覆盖）                                      （最全）

#### ![](http://l.yumud.com/notes.png)递归和迭代的转化 区别

![1571377276911](http://l.yumud.com/1571377276911.png)

<!--(借用了别人借用的图)-->

#### ![](http://l.yumud.com/notes.png)版本号

主版本号  次版本号  修订号  先行版本号  版本编译元数据(不在优先级比较的列表中)

​      X               Y               Z

X 当API的兼容性变化时，递增

Y 增加功能，不影响API的兼容性，递增

Z Bug修复，不影响API兼容性，递增

^主版本号不变  ^1.2.3==>1.2.3<=版本号<2.0.0     1.x.x

~主次不变         ~1.2.3==>1.2.3<=版本号<1.3.0      1.2.x

#### ![](http://l.yumud.com/notes.png)SQL自定义函数

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

#### ![](http://l.yumud.com/notes.png)临时表 派生表

##### 临时表 

内部临时表（MySQL自动创建） 外部临时表（create temporary table）

##### 派生表

查询结果生成的表 ，类似于临时表

select * from (select * from others) temp;   temp即派生表

#### ![](http://l.yumud.com/notes.png)事件循环

#### ![](http://l.yumud.com/notes.png)事务 乐观锁 悲观锁

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

#### ![](http://l.yumud.com/notes.png)tcp/ip

 https://blog.csdn.net/u012371712/article/details/80795297 

![1571379820232](http://l.yumud.com/1571379820232.png)

五层：应用层  传输层 网络层  连接层 物理层

#### ![](http://l.yumud.com/notes.png)请求方式

get put post delete

post时，填写参数  ，返回参数ctx.request.query

#### ![](http://l.yumud.com/notes.png)content-type

application/json  消息主体是 序列化后的JSON字符串

application/x-www-form-urlencoded  数据被编码为名称/值对。这是标准的编码格式

multipart/form-data   需要在表单中进行文件上传时，使用。

text/plain  数据以纯文本形式(text/json/xml/html)进行编码，不含任何控件或格式字符

#### ![](http://l.yumud.com/notes.png)string.split arr.join

string.split("*") 字符串转数组 以星号作分割依据

arr.join(“*”) 数组转字符串  用星号作连接

#### ![](http://l.yumud.com/notes.png)索引

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

#### ![](http://l.yumud.com/notes.png)sequelize事务，加锁

t1 //is a transaction

Model.findAll({

 	where:...

},{

​	transaction: t1,  //**注意

​	lock: t1.LOCK.UPDATE,   //**注意

​	lock: t1.LOCK.SHARE

})

#### ![](http://l.yumud.com/notes.png)与 或 异或  左移 右移(按二进制位进行运算)

与 &  同1为1，否则为0

或 |  有1则1

异或 ^  相同为1，不同为0

左移 <<  左移，移出位丢弃，右边的空位补0

右移 >>  右移，移出位丢弃，左边的空位补0

#### ![](http://l.yumud.com/notes.png)node api

path.normalize(path)规范化path

path.join([...paths])使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范

path.resolve([...paths])把路径解析为一个绝对路径

#### ![](http://l.yumud.com/notes.png)队列 BFS DFS 

队列 FIFO

BFS应用场景：遍历和找出最短路径

栈 LIFO

 https://leetcode-cn.com/explore/learn/card/queue-stack/218/stack-last-in-first-out-data-structure/875/ 

#### ![](http://l.yumud.com/notes.png)Number.MAX_SAFE_INTEGER      Number.MAX_VALUE

Number.MAX_SAFE_INTEGER   9007199254740991 小于该值能精确表示

Number.MAX_VALUE   1.7976931348623157e+308  大于该值得到的是Infinity，介于Infinity和安全值之间的无法精确表示

#### ![](http://l.yumud.com/notes.png)mocha

##### 主要api

describe(name,fn) 定义一组测试

it(name,fn)              定义一项测试

##### 第三方断言库

assert，chai

const assert = require('assert')

##### 钩子函数    

(在用例集/用例函数开始执行之前/结束执行之后，进行一些环境准备或者环境清理的工作)

before()  在本区块 **所有测试用例** 开始之前执行

after()     在本区块 **所有测试用例** 结束之后（所有）执行

beforeEach()    在本区块 **每个测试用例** 开始之前执行

afterEach()        在本区块 **每个测试用例** 结束之后执行

例子：

```javascript
describe('top', function () {

 before(function () {

  console.log('top before')

 })

 after(function () {

  console.log('top after')

 })

 beforeEach(function () {

  console.log('top beforeEach')

 })

 afterEach(function () {

  console.log('top afterEach')

 })

 it('test1', function () {

  console.log('top test1')

 })

 describe('sublevel', function () {

  before(function () {

   console.log('sublevel before')

  })

  after(function () {

   console.log('sublevel after')

  })

  beforeEach(function () {

   console.log('sublevel beforeEach')

  })

  afterEach(function () {

   console.log('sublevel afterEach')

  })

  it('test1', function () {

   console.log('sublevel test1')

  })

  it('test2', function () {

   console.log('sublevel test2')

  })

 })

 it('test2', function () {

  console.log('top test2')

 })

})


```

运行结果：

```
  top
top before
top beforeEach
top test1
    √ test1
top afterEach
top beforeEach
top test2
    √ test2
top afterEach
    sublevel
sublevel before
top beforeEach
sublevel beforeEach
sublevel test1
      √ test1
sublevel afterEach
top afterEach
top beforeEach
sublevel beforeEach
sublevel test2
      √ test2
sublevel afterEach
top afterEach
sublevel after
top after


  4 passing (12ms)
```

#### ![](http://l.yumud.com/notes.png)~~ 取反 再取反

~~  不超过32位时可以用 ~~ 达到Math.floor的效果

~按位取反，~~变回原操作数，但是省略了小数部分

#### ![](http://l.yumud.com/notes.png)桶排序

先找出桶中最大值最小值max min

按照桶的个数num，给5

桶的大小 size=(max-min+1)/num

桶 buckets = new Array(num*2)

初始化桶buckets[i]=[]

分配数据到桶（按照数据值的分布来匹配，(arr[i]-min)/size）

对每个桶进行排序

#### ![](http://l.yumud.com/notes.png)process.argv

process.argv[0] 启动node.js进程的可执行文件的所在绝对路径

process.argv[1] 正在执行的js文件的路径

其他元素将是任何其他命令行的参数

![eg](http://l.yumud.com/record_process_argv.png)

#### ![](http://l.yumud.com/notes.png)git提交冲突

##### git提交冲突

先切一个分支feature

操作操作

git add .

git commit -m "操作操作"

git push origin master=>报错，冲突

git co dev

git pull 

git co feature 

git rebase dev  

手动解决冲突

git co dev

git merge --no-ff feature

git push origin dev

最后删掉这个分支feature

#### ![](http://l.yumud.com/notes.png)二分查找

```js
function binarySearch(arr,target){
  let start =0
  let end=arr.length-1;
  while(start<=end){
      let mid=parseInt(start+(end-start)/2)
      if(target==arr[mid])
      {
          return mid
      }
      else if(target>arr[mid]){
          start=mid+1
      }
      else{
          end=mid-1
      }
  }
  return -1
} 
```

