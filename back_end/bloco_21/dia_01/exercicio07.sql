SELECT job_id, SUM(salary) AS `total paymanet`
FROM hr.employees
GROUP BY job_id;
