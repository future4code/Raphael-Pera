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


**B)**
```

```

**C)**
```

```

**D)**
```

```

