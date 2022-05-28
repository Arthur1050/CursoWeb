SELECT * FROM cidades

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Neves', 1 /* Niteroi */),
    ('Raquel Lyra', 2 /* Caruaru */),
    ('Zenaldo Coutinho', null /* A coluna aceita valores null */);

SELECT * FROM prefeitos;

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rafael Greca', null);
