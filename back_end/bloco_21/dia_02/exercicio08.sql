SELECT t.name, t.location
FROM Pixar.Theater AS t
WHERE EXISTS (
  SELECT *
  FROM Pixar.Movies AS m
  WHERE t.id = m.theater_id
);
