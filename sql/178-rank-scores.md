# 178 分数排名

```mysql
select a.Score,(select count(distinct b.Score) from Scores b where b.Score>=a.Score) as rank from Scores a order by Score desc;  
```