SELECT CAST(MAX(salary) AS DECIMAL(10, 2)) AS highest,
       CAST(MIN(salary) AS DECIMAL(10, 2)) AS lowest,
       CAST(SUM(salary) AS DECIMAL(10, 2)) AS sum,
       CAST(AVG(salary) AS DECIMAL(10, 2)) AS average
FROM hr.employees;
