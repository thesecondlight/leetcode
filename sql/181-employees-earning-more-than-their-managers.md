# 181 超过经理收入的员工

```mysql
select a.Name as Employee from Employee a,Employee b where a.ManagerId=b.Id and a.Salary>b.Salary; 
```

