# 183 从不订购的客户

```mysql
select a.Name as Customers from Customers a left join Orders b on a.Id=b.CustomerId where b.Id is null;
```