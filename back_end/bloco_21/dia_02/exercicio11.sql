SELECT m1.title, m1.length_minutes, m2.title, m2.length_minutes
FROM Pixar.Movies AS m1, Pixar.Movies AS m2
WHERE m1.director = m2.director;
