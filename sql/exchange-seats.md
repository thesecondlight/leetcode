# 626 换座位

```mysql
select (case when id%2=0 then id-1 when id=(select max(id) from seat) then id else id+1 end)as id ,student from seat order by id;
```
