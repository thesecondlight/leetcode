# 197 上升的温度

```mysql
select a.Id from Weather a,Weather b where a.Temperature>b.Temperature and datediff(a.RecordDate,b.RecordDate)=1;
```
