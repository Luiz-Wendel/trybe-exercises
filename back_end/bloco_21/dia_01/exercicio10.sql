SELECT  AVG(salary) AS `total paymanet`, COUNT(*) AS emplyoees
FROM hr.employees
GROUP BY department_id
HAVING COUNT(*) > 10;
