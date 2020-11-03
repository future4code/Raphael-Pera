## Exercício 1
a) Altera a tabela "Actor", removendo a coluna "salary"

b) Altera o nome da coluna "gender" para "sex", e define o tipo da coluna como "VARCHAR(6)", que aceita somente strings

c) Altera apenas o tipo da coluna para "VARCHAR(255)"

d) A query para alterar a coluna "gender" é:
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

---

## Exercício 2
a) A query é:
```
UPDATE Actor
SET name = "Fernanda Montenegro",
    birth_date = "1929-10-19"
WHERE id = "003"
;
```

b) A query é:
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes"
;

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES"
;
```

c) A query é:
```
UPDATE Actor
SET name = "Juliana Paes",
	salary = 260000,
    birth_date = "1979-03-26",
    gender = "female"
WHERE id = "005"
;
```

d) A query é:
```
UPDATE Actor
SET name = "Juliana Paes",
	salary = 260000,
    birth_date = "1979-03-26",
    gender = "female"
WHERE id = "014"
;
```
Resposta gerada:
```
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

```
Não ocorre um erro própriamente dito, mas nenhum dado da tabela é alterado.


---

## Exercício 3
a) A query é:
```
DELETE
FROM Actor
WHERE name = "Fernanda Montenegro"
;
```

b) A query é:
```
DELETE
FROM Actor
WHERE gender = "male" AND salary > 1000000
;
```

---

## Exercício 4
a) A query é:
```
SELECT MAX(salary)
FROM Actor
;
```

b) A query é:
```
SELECT MIN(salary)
FROM Actor
WHERE gender = "female"
;
```

c) A query é:
```
SELECT COUNT(*)
FROM Actor
WHERE gender = "female"
;
```

d) A query é:
```
SELECT SUM(salary)
FROM Actor
;
```

---

## Exercício 5
a) A query retorna uma tabela com duas colunas, sendo que a primeira contem as quantidades de indivíduos contidos em cada um dos gêneros ("male" e "female") e a segunda apresenta o "gender" de cada grupo.

b) A query é:
```
SELECT id, name
FROM Actor
ORDER BY name DESC
;
```

c) A query é:
```
SELECT *
FROM Actor
ORDER BY salary DESC
;
```

d) A query é:
```
SELECT *
FROM Actor
ORDER BY salary DESC
LIMIT 3
;
```

e) A query é:
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender
;
```

---

## Exercício 6
a) A query é:
```
ALTER TABLE Movie
ADD playing_limit_date DATE
;
```

b) A query é:
```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

c) A query é:
```
UPDATE Movie
SET playing_limit_date = "2020-12-31"
WHERE id = "004"
;

UPDATE Movie
SET playing_limit_date = "2020-09-15"
WHERE id = "002"
;
```

d) As querys são:
```
DELETE
FROM Movie
WHERE id="002"
;

UPDATE Movie
SET sinopsis = "Essa nova sinopse não é tão elaborada quanto a primeira"
WHERE id = "002"
;
```
Resposta gerada:
```
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

```
Não ocorre um erro própriamente dito, mas nenhum dado da tabela é alterado, já que não existe nenhum id = "002".

---

## Exercício 7
a) A query é:
```
SELECT COUNT(*)
FROM Movie
WHERE rating > 7.5
;
```

b) A query é:
```
SELECT AVG(rating)
FROM Movie
;
```

c) A query é:
```
SELECT COUNT(*)
FROM Movie
WHERE playing_limit_date >= CURDATE()
;
```

d) A query é:
```
SELECT COUNT(*)
FROM Movie
WHERE release_date > CURDATE()
;
```

e) A query é:
```
SELECT MAX(rating) FROM Movie;
```

f) A query é:
```
SELECT MIN(rating) FROM Movie;
```

---

## Exercício 8
a) A query é:
```
SELECT * FROM Movie
ORDER BY name ASC
;
```

b) A query é:
```
SELECT * FROM Movie
ORDER BY name DESC
LIMIT 5
;
```

c) A query é:
```
SELECT * FROM Movie
WHERE playing_limit_date >= CURDATE()
ORDER BY release_date DESC
LIMIT 3
;
```

d) A query é:
```
SELECT * FROM Movie
ORDER BY rating DESC
LIMIT 3
;
```