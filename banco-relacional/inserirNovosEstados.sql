-- Inserindo (INSERT) um novo registro na tabaela (INTO) estados
INSERT INTO estados (id, nome, sigla, regiao, populacao)
-- Mesmo com o "id" sendo um campo de "auto_increment", podemos defirnir-lo com o valor que quisermos
VALUES (1000, 'Novo', 'NV', 'Sul', 2.54)

SELECT * FROM `estados`

INSERT INTO `estados` (nome, sigla, regiao, populacao)
-- Não foi declarado o novo id dessa vez, mas ele pegou o ultimo (1000) e incrementou em cima dele, ficando 1001
VALUES ('Mais Novo', 'MN', 'Norte', 2.51)