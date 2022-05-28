SELECT * FROM empresas;
SELECT * FROM cidades;
SELECT * FROM empresas_unidades;

SELECT
    e.id AS id_Empresa,
    e.nome AS Empresa,
    c.id AS id_Cidade,
    c.nome AS Cidade
FROM 
    cidades c, empresas e, empresas_unidades e_u
WHERE
    c.id = e_u.cidade_id AND e.id = e_u.empresa_id;