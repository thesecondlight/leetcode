# 196 删除重复的电子邮箱

```mysql
select b.Name as Department,a.Name as Employee,a.salary from Employee a join Department b on a.DepartmentId=b.Id where (a.DepartmentId,Salary) IN (select DepartmentId,MAX(Salary) from Employee group by DepartmentId);
```