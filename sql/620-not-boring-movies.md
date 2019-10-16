# 620 有趣的电影

```mysql
select id,movie,description,rating from cinema where description !='boring' and id%2=1 order by rating desc;
```