SELECT job_id, SUM(salary) AS `total paymanet`
FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'IT_PROG'
ORDER BY SUM(salary) DESC;
