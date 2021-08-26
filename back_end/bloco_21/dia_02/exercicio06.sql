SELECT title
FROM Pixar.Movies
WHERE id IN (
  SELECT movie_id
  FROM Pixar.BoxOffice
  WHERE rating > 7.5
);

SELECT m.title
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE b.rating > 7.5;
