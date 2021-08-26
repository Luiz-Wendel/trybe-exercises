SELECT m.title, b.rating
FROM Pixar.BoxOffice AS b
INNER JOIN Pixar.Movies AS m
ON b.movie_id = m.id
ORDER BY b.rating DESC;
