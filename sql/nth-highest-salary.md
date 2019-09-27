# 177 第N高的薪水

```mysql
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  DECLARE NQ INT DEFAULT N-1;
  IF (NQ<0) THEN
    RETURN NULL;
  ELSE
  RETURN (
      # Write your MySQL query statement below.
       select IFNULL(
           (
               select distinct Salary from Employee order by Salary desc limit NQ,1
           ),NULL) AS getNthHighestSalary
  );
  END IF;
END
```