SELECT rating
FROM Pixar.BoxOffice
WHERE movie_id IN (
  SELECT id
  FROM Pixar.Movies
  WHERE `year` > 2009
);

SELECT b.rating
FROM Pixar.BoxOffice AS b
INNER JOIN Pixar.Movies AS m
ON b.movie_id = m.id
WHERE m.year > 2009;
