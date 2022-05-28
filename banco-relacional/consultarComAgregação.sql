
SELECT
    -- Seleciona a coluna "regiao" como "Região"
    regiao AS 'Região',
    -- Soma os numeros da coluna "populacao" e imprime em uma coluna como "Total"
    sum(populacao) AS Total
FROM estados
-- Agrupa os dados da coluna "regiao" em uma unica linha sem repetir
GROUP BY regiao
-- Ordena as linhas da coluna Total em ordem decrescente
ORDER BY Total DESC

-- Selecionando apenas a soma do total da população no geral, sem agrupar as regioes
SELECT
    sum(populacao) AS Total
FROM estados

-- A função "avg()" retorna a media de uma lista de dados
SELECT
    avg(populacao) AS Total
FROM estados