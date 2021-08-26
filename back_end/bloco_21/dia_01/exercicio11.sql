UPDATE hr.employees
SET phone_number = CONCAT('777', SUBSTRING(phone_number, 3))
WHERE LEFT(phone_number, 3) = '515';
