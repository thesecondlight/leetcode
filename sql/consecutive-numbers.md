# 180 连续出现的数字

```mysql
select 
    distinct a.Num AS ConsecutiveNums 
from 
    Logs a left join Logs b on a.Num = b.Num
    left join Logs c on b.Num = c.Num
where 
    a.id = b.id -1 and b.id = c.id -1
```
