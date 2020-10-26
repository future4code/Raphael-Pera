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

d)