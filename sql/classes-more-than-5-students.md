# 596 超过5名学生的课

```mysql
select class from courses group by class having count(distinct student)>=5;
```
