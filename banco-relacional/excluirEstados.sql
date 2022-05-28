-- Excluindo (DELETE) um registro inteiro da tabela (FROM) estados
DELETE FROM `estados`
-- Estabelece uma condição que justifica qual registro será deletado
WHERE sigla = 'MN'

SELECT * FROM `estados`

DELETE FROM `estados`
WHERE id >= 1000