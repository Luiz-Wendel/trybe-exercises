SELECT m.title, m.director, m.year, m.length_minutes, t.name, t.location 
FROM Pixar.Theater AS t
RIGHT JOIN Pixar.Movies AS m
ON m.theater_id = t.id;
