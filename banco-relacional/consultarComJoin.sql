-- Selecinando todas as colunas de duas tabelas (estados e cidades) e atribuindo apelidos a elas (e; c)
SELECT * FROM estados e, cidades c
-- Quando o id da tabela estados (chave primaria) for igual ao id da tabela cidades (chave estrangeira)
WHERE e.id = c.estado_id;

SELECT e.nome, c.nome, regiao FROM estados e, cidades c
WHERE e.id = c.estado_id;

SELECT 
    e.nome AS Estado,
    c.nome AS Cidade, 
    regiao AS Regiao 
FROM estados e, cidades c
WHERE e.id = c.estado_id;


-- Outra forma de fazer uma junção de tabelas
SELECT
    c.nome as Cidade,
    e.nome as Estado,
    regiao AS Regiao
FROM estados e
-- Faz uma junção (INNER JOIN) das duas tabelas onde só serão apresentados os registros que tiverem
-- relacionados uma com o outro. Essa relação de igualdade é definida com o "ON"
INNER JOIN cidades c ON e.id = c.estado_id