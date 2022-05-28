-- Atualizando (UPDATE) dados da tabela "estados"
UPDATE estados
-- Especificando qual dado será alterado (SET) e atribuindo um noco valor a ele
SET nome = 'Maranhão'
-- Especificando aonde -em qual registro- (WHERE) o novo dado deve ser atribuido (EXTREMAMENTE IMPORTANTE)
WHERE sigla = 'MA'

SELECT nome FROM estados WHERE sigla = 'MA'


UPDATE estados
-- Alterando agora multiplos dados
SET nome = 'Paraná', populacao = 11.32
WHERE sigla = 'PR'

-- Dessa vez atribuindo um apelido à tabela "estados" ("est") e especificando as colunas com ele em notação ponto
SELECT 
    est.nome, 
    est.populacao 
FROM estados est 
WHERE sigla = 'PR'