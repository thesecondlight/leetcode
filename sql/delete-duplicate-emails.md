# 196 删除重复的电子邮箱

```mysql
delete a from Person a,Person b where a.Email=b.Email and a.Id>b.Id;
```