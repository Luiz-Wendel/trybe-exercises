SELECT m.title
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE (b.international_sales + b.domestic_sales) >= 500000000
      AND m.length_minutes > 110;

SELECT title
FROM Pixar.Movies
WHERE id IN (
  SELECT movie_id
  FROM Pixar.BoxOffice
  WHERE (international_sales + domestic_sales) >= 500000000
) AND length_minutes > 110;
