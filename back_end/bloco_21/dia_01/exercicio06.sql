SELECT job_id, COUNT(*)
FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';
