SELECT last_name, hire_date
FROM hr.employees
WHERE MONTH(hire_date) = 7
      AND YEAR(hire_date) = 1987;
