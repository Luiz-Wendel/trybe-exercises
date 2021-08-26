SELECT m.title ,b.domestic_sales, b.international_sales
FROM Pixar.BoxOffice AS b
INNER JOIN Pixar.Movies AS m
ON b.movie_id = m.id;
