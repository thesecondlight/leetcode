# 182 查找重复的电子邮箱

```mysql
select distinct(a.Email) from Person a,Person b where a.Id != b.Id and a.Email = b.Email;
select Email from Person group by Email having count(Email)>1;
```