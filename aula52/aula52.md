### Exercício 1 -

a) A resposta da pergunta é: o comando DROP COLUMN serve para remover uma coluna, no exemplo seria removida a coluna de salário.

```
ALTER TABLE Actor DROP COLUMN salary;
```

b) A resposta da pergunta é: o comando ALTER TABLE...CHANGE muda a estrutura da tabela, nesse caso irá mudar o nome da coluna gender por sex (com no máximo 5 caracteres)

```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

c) A resposta da pergunta é: o comando ALTER TABLE...CHANGE muda a estrutura da tabela, nesse caso irá mudar o número máximo de caracteres (com no máximo 255 caracteres)

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

d) Comando rodado:

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2

a) Comando rodado:

```
UPDATE Actor
SET
name = "Tatiana",
birth_date = "1991-10-11"
WHERE id = "003";
```

b) Comandos rodados:

```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE id = "003";
```

```
UPDATE Actor
SET name = "Ju Paes"
WHERE id = "003";
```

c)Comando rodado:

```
UPDATE Actor
SET name = "Juliana Paes",
salary = "20000",
birth_date = "1988-04-24",
gender = "femele"
WHERE id = "003"
```

### Exercício 3

a)Comando rodado:

```
DELETE FROM Actor WHERE name = "Fe Montenegro"
```

b)Comando rodado:

```
DELETE FROM Actor WHERE gender = "famele", salary > 1000000
```

### Exercício 4 -
