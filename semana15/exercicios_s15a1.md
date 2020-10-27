### Exercício 1
a)
* **VARCHAR (255)**: define que o dado inserido será uma string com até 255 caracteres
* **PRIMARY KEY**: define que o dado será a chave primária da tabela
* **NOT NULL**: define que o dado não pode ser nulo
* **DATE**: define que o dado será do tipo "data"

b)
* **SHOW DATABASES**: O comando apresenta uma tabela com duas linhas: "information_schema" e "jackson-raphael-pera"
* **SHOW TABLES**: o comando apresenta uma tabela com apenas uma linha mastrando o nome da tabela "Actor" recém-criada

c)
* **DESCRIBE Actor**:  o comando apresenta uma tabela contendo os nomes e configurações das colunas da tabela "Actor"

-----------------------------------
### Exercício 2
a) A query é:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)

VALUES (
    "002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);
```

b) O erro ocorreu porque já existe uma linha com o id = "002". Como o id é uma chave primária, é único, e não pode estar presente em mais de uma linha.

c) Erro gerado:

    Error Code: 1136. Column count doesn't match value count at row 1

  Esse erro ocorre a quantidade de valores passados (5) não condiz com a quantidade de valores pré-definida na linha de "INSERT" (3)

  Correção:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)

VALUES(
    "003", 
    "Fernanda Montenegro",
    300000,
    "1929-10-19", 
    "female"
);
```

d) Erro gerado:

    Error Code: 1364. Field 'name' doesn't have a default value

Esse erro ocorre porque não foi informado um valor para a coluna "name" e ele não pode ser igual a "null" de acordo com o esquema da tabela

Correção:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)

VALUES(
  "004",
  "Antonio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```


e) Erro gerado:

    Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

Esse erro ocorre porque o valor da data de nascimento não foi passado como VARCHAR (string)

Correção
```
INSERT INTO Actor (id, name, salary, birth_date, gender)

VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

f) Atriz criada:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)

VALUES(
  "006", 
  "Regina Casé",
  75000,
  "1972-09-01", 
  "female"
);
```

Ator criado:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)

VALUES(
  "007", 
  "Malvino Salvador",
  312000,
  "1976-02-26", 
  "male"
);
```

-----------------------------------
### Exercício 3
a) A query é:
````
SELECT *
FROM Actor
WHERE gender = "female"
````

b) A query é:
````
SELECT salary
FROM Actor
WHERE name = "Tony Ramos"
;
````

c) A query é:
````
SELECT *
FROM Actor
WHERE gender = "invalid"
;
````

Esse comando retorna uma tabela vazia, já que não existe nenhum ator com o "gender" cadastrado como "invalid"

d) A query é:
````
SELECT id, name, salary
FROM Actor
WHERE salary <= 500000
;
````

e) Erro gerado:
````
Error Code: 1054. Unknown column 'nome' in 'field list'

````

Esse erro ocorreu porque não existe nenhum campo chamado "nome" na tabela consultada (Actor).

Correção:
````
SELECT id, name from Actor WHERE id = "002"
````


-----------------------------------
### Exercício 4
````
SELECT *
from Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
;
````
a) A query acima retorna todas as informações dos atores cujos nomes comecem com as letras "A" ou "J" e cujos salários sejam maiores que 300.000.

b) A query é:
````
SELECT *
from Actor
WHERE name NOT LIKE "A%" AND salary > 350000
;
````

c) A query é:
````
SELECT *
from Actor
WHERE name LIKE "%G%" OR name LIKE "%g%"
;
````

d) A query é:
````
SELECT *
from Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000
;
````


-----------------------------------
### Exercício 5
a) A query é:
````
CREATE TABLE Filmes (
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sinopse VARCHAR(255) NOT NULL,
    data_lancamento DATE NOT NULL,
    avaliacao INT NOT NULL
)
````

b) A query é:
````
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)

VALUES(
	"001",
    "Se eu fosse você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
````

c) A query é:
````
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)

VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
````

d) A query é:
````
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)

VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
````

e) A query é:
````
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)

VALUES(
	"004",
    "Deus é brasileiro",
    "Cansado dos erros cometidos pela humanidade, Deus (Antônio Fagundes) resolve tirar umas férias nas estrelas. Mas, para isso, ele precisa encontrar um santo que se ocupe de seus deveres enquanto ele estiver ausente.",
    "2003-01-31",
    10
);
````





-----------------------------------
### Exercício 6
a) A query é:
````
SELECT id, nome, avaliacao
from Filmes
WHERE id = "002"
;
````

b) A query é:
````
SELECT *
from Filmes
WHERE nome = "Deus é brasileiro"
;
````

c) A query é:
````
SELECT id, nome, sinopse
from Filmes
WHERE avaliacao >= 7
;
````

-----------------------------------
### Exercício 7
a) A query é:
````
Select *
from Filmes
WHERE nome LIKE "%vida%"
;
````

b) A query é:
````
SELECT *
from Filmes
WHERE nome LIKE "%brasil%" or sinopse LIKE "%brasil%"
;
````

c) A query é:
````
SELECT *
from Filmes
WHERE data_lancamento < "2020-10-26"
;
````

d) A query é:
````
SELECT *
from Filmes
WHERE
	data_lancamento < "2020-10-26"
    AND
    (nome LIKE "%brasil%" or sinopse LIKE "%brasil%")
    AND
    avaliacao > 7
;
````
