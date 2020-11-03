## Exercício 1
**A)** Chave estrangeira é a chave primaria de uma tabela que é relacionada a chave primaria de outra tabela.

**B)** Query:
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    move_id VARCHAR(255),
    FOREIGN KEY (id) REFERENCES Movie(id)
)
;


INSERT INTO Rating
VALUES
(
	"001",
    "Filme execelente",
    10,
    "003"
),

(
	"002",
    "Filme espetacular",
    10,
    "002"
),

(
	"003",
    "Muito legal",
    9,
    "001"
),

(
	"004",
    "Lindo",
    10,
    "004"
)
;
```

**C)** Resultado da Query:
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jackson-raphael-pera`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`id`) REFERENCES `Movie` (`id`))
```
A query retorna um erro informando que não é possível adicionar ou atualizar uma "child row", porque o "movie_id" passado na query não existe na tabela "Movie".

**D)** Query:
```
ALTER TABLE Movie
DROP COLUMN rating
;
```

**E)**

Query:
```
DELETE
FROM Movie
WHERE id = "001"
;
```

Resposta:
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jackson-raphael-pera`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`id`) REFERENCES `Movie` (`id`))

```
O erro informa que não é possível deletar ou atualiza uma "linha pai" (parent row).
Isso indica que essa linha tem relações com outras tabelas e por isso não pode ser deletada.


---------------
---------------

## Exercício 2

**A)**
A tabela "MovieCast" contem duas colunas que receberão o id do filme na coluna "movie_id" relacionado ao id do ator na coluna "actor_id".

**B)**
```
INSERT INTO MovieCast VALUES
("001", "002"),
("001", "004"),
("002", "004"),
("002", "007"),
("003", "006"),
("004", "005")
;
```

**C)**
Resposta:
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jackson-raphael-pera`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```

Ao tentar criar uma relação com um id de ator e/ou filme inexistentes, a query retorna um erro informando que não é possível adicionar ou atualizar uma linha de uma tabela "filha".
Ou seja, não é possível criar a relação porque o id do ator/filme não existe.

**D)**

Query:
```
DELETE
FROM Actor
WHERE id = "005"
;
```

Resposta:
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jackson-raphael-pera`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```
Não é possível deletar uma linha de uma tabela que tem uma ou mais relações com outras tabelas.

------
------

## Exercício 3

**A)** O operador "ON" determina a condição da consulta da query, ou seja, serão apresentados apenas os resultados que satisfizerem os parâmetros declarados em "ON".

**B)** Query:
```
SELECT Movie.id, name, Rating.rate FROM Movie
JOIN Rating ON Movie.id = Rating.movie_id
;
```

------
------

## Exercício 4

**A)** Query:
```
SELECT Movie.id, name, Rating.rate, Rating.comment FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id
;
```

**B)** Query:
```
SELECT Movie.id, name, actor_id FROM Movie
LEFT JOIN MovieCast ON Movie.id = movie_id
;
```

**C)** Query:
```
SELECT name, AVG(Rating.rate) as "Avaliação média" FROM Movie
LEFT JOIN Rating ON Movie.id = movie_id
GROUP BY name
;
```

------
------

## Exercício 5

**A)**
A query relaciona todos os filmes com seus respectivos atores, trazendo todos os dados de ambos.
Para isso é necessário utilizar os dois "JOIN", pois o primeiro JOIN relaciona os filmes aos id's dos atores presentes na tabela relacional "MovieCast", e o segundo relaciona esses ids com os dados dos atores presentes na tabela "Actor".

**B)**
Query:
```
SELECT
m.id as "Filme (ID)",
m.name as "Título",
actor_id as "Ator (ID)",
a.name as "Ator/Atriz"
FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id
;
```

**C)**
Resposta:
```
Error Code: 1054. Unknown column 'm' in 'field list'
```
O erro ocorre porque não existe coluna "m" na tabela "Movie".

**D)**
Query:
```
SELECT m.name as "Filme", a.name as "Ator/Atriz", r.rate as "Avaliação", r.comment as "Comentário"
FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id
JOIN Rating r ON r.id = m.id
;
```


------
------

## Exercício 6

**A)**
É uma relação N:M (muitos para muitos)

**B)**
```

```

