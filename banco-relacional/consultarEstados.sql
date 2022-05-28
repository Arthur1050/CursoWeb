-- Seleciona (SELECT) todas as colunas ("*") da tabela (FROM) estados
SELECT * FROM estados;

-- Seleciona somente a coluna "nome" e a coluna "sigla" e altera o nome da coluna "estado" para (AS) "Nome do estado"
SELECT sigla, nome AS 'Nome do estado' FROM estados
-- Selecionando somente (WHERE) registros em que a região é igual a "Sul"
WHERE regiao = 'Sul'

SELECT sigla, nome, populacao AS 'Nome do estado' FROM estados
-- Selecionando somente (WHERE) registros em que a população é maior ou igual à 10 (10 milhoes)
WHERE populacao >= 10
-- Ordena (ORDER BY) os registros com a populacao em ordem decrescente (DESC) 
ORDER BY populacao DESC -- Se tirar o DESC (Decrescente), ele ficara ordenado de forma crescente