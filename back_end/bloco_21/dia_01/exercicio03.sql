SELECT job_id, AVG(salary) AS average
FROM hr.employees
GROUP BY job_id;
