-- CRIAR O DB
-- Configuração inicial
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- Criar banco de dados
CREATE SCHEMA IF NOT EXISTS `atividade12` DEFAULT CHARACTER SET utf8;
USE `atividade12`;

-- Tabela de Professores
CREATE TABLE Professores (
    id_professor INT AUTO_INCREMENT PRIMARY KEY,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    titulacao VARCHAR(50),
    telefone VARCHAR(20) NOT NULL
);

-- Tabela de Turmas
CREATE TABLE Turmas (
    id_turma INT AUTO_INCREMENT PRIMARY KEY,
    quantidade_alunos INT NOT NULL,
    horario_aula TIME NOT NULL,
    duracao_aula INT NOT NULL, -- duração em minutos
    data_inicial DATE NOT NULL,
    data_final DATE NOT NULL,
    tipo_curso VARCHAR(50),
    id_professor INT,
    FOREIGN KEY (id_professor) REFERENCES Professores(id_professor)
);

-- Tabela de Alunos
CREATE TABLE Alunos (
    id_aluno INT AUTO_INCREMENT PRIMARY KEY,
    codigo_matricula VARCHAR(20) NOT NULL UNIQUE,
    data_matricula DATE NOT NULL,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(255),
    telefone VARCHAR(20) NOT NULL,
    data_nascimento DATE NOT NULL,
    altura DECIMAL(5,2),
    peso DECIMAL(5,2)
);

-- Tabela de Monitores
CREATE TABLE Monitores (
    id_monitor INT AUTO_INCREMENT PRIMARY KEY,
    id_aluno INT UNIQUE,
    id_turma INT,
    FOREIGN KEY (id_aluno) REFERENCES Alunos(id_aluno),
    FOREIGN KEY (id_turma) REFERENCES Turmas(id_turma)
);

-- Tabela de Matrículas
CREATE TABLE Matriculas (
    id_matricula INT AUTO_INCREMENT PRIMARY KEY,
    id_aluno INT,
    id_turma INT,
    FOREIGN KEY (id_aluno) REFERENCES Alunos(id_aluno),
    FOREIGN KEY (id_turma) REFERENCES Turmas(id_turma)
);

-- Tabela de Ausências
CREATE TABLE Ausencias (
    id_ausencia INT AUTO_INCREMENT PRIMARY KEY,
    id_matricula INT,
    data_ausencia DATE NOT NULL,
    FOREIGN KEY (id_matricula) REFERENCES Matriculas(id_matricula)
);

-- Restaura SQL Mode e restrições
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- INSERIR DADOS
-- Inserindo Professores
INSERT INTO Professores (cpf, nome, data_nascimento, titulacao, telefone) VALUES
('123.456.789-00', 'Maria Silva', '1980-05-10', 'Mestre', '9999-8888'),
('987.654.321-00', 'João Santos', '1975-11-15', 'Doutor', '8888-7777'),
('456.789.123-00', 'Ana Oliveira', '1985-03-22', 'Especialista', '7777-6666');

-- Inserindo Turmas
INSERT INTO Turmas (quantidade_alunos, horario_aula, duracao_aula, data_inicial, data_final, tipo_curso, id_professor) VALUES
(10, '09:00:00', 120, '2024-01-10', '2024-02-10', 'Programação', 1),
(15, '10:30:00', 90, '2024-01-15', '2024-02-15', 'Banco de Dados', 2),
(20, '14:00:00', 150, '2024-01-20', '2024-03-20', 'Design Gráfico', 3);

-- Inserindo Alunos
INSERT INTO Alunos (codigo_matricula, data_matricula, nome, endereco, telefone, data_nascimento, altura, peso) VALUES
('ALU001', '2024-01-05', 'Carlos Almeida', 'Rua A, 123', '9999-1111', '2000-02-20', 1.75, 70),
('ALU002', '2024-01-06', 'Fernanda Costa', 'Rua B, 234', '9999-2222', '1999-03-25', 1.65, 60),
('ALU003', '2024-01-07', 'Lucas Pereira', 'Rua C, 345', '9999-3333', '2001-04-30', 1.80, 80),
('ALU004', '2024-01-08', 'Juliana Rocha', 'Rua D, 456', '9999-4444', '2000-05-15', 1.70, 55);

-- Inserindo Monitores
INSERT INTO Monitores (id_aluno, id_turma) VALUES
(1, 1),
(2, 2);

-- Inserindo Matrículas
INSERT INTO Matriculas (id_aluno, id_turma) VALUES
(1, 1),
(2, 2),
(3, 2),
(4, 3);

-- Inserindo Ausências
INSERT INTO Ausencias (id_matricula, data_ausencia) VALUES
(1, '2024-01-10'),
(2, '2024-01-15'),
(3, '2024-01-20');

-- CONSULTAS
-- Fazer consultas SQL que respondam as seguintes questões:

-- 1) Listar os dados dos alunos;
SELECT * FROM Alunos;

-- 2) Listar os dados dos alunos e as turmas que eles estão matriculados;
SELECT a.*, t.*
FROM Alunos a
JOIN Matriculas m ON a.id_aluno = m.id_aluno
JOIN Turmas t ON m.id_turma = t.id_turma;

-- 3) Listar os alunos que não possuem faltas;
SELECT a.*
FROM Alunos a
LEFT JOIN Matriculas m ON a.id_aluno = m.id_aluno
LEFT JOIN Ausencias aus ON m.id_matricula = aus.id_matricula
WHERE aus.id_ausencia IS NULL;

-- 4) Listar os professores e a quantidade de turmas que cada um leciona;
SELECT p.nome, COUNT(t.id_turma) AS quantidade_turmas
FROM Professores p
LEFT JOIN Turmas t ON p.id_professor = t.id_professor
GROUP BY p.id_professor;

-- 5) Listar nome dos professores, apenas um dos números de telefone do professor, dados (id da turma, data início, data fim e horário) das turmas que o professor leciona, curso da turma e alunos matriculados ordenado por nome do professor, id turma e nome do aluno;
SELECT p.nome AS nome_professor, 
       p.telefone, 
       t.id_turma, 
       t.data_inicial, 
       t.data_final, 
       t.horario_aula, 
       t.tipo_curso, 
       a.nome AS nome_aluno
FROM Professores p
JOIN Turmas t ON p.id_professor = t.id_professor
JOIN Matriculas m ON t.id_turma = m.id_turma
JOIN Alunos a ON m.id_aluno = a.id_aluno
ORDER BY p.nome, t.id_turma, a.nome;

-- Fazer alterações nas tabelas:
-- 1) Alterar o nome de todos os professores para maiúsculo;
SET SQL_SAFE_UPDATES = 0;
UPDATE Professores
SET nome = UPPER(nome);
SET SQL_SAFE_UPDATES = 1;  -- Ativa novamente o modo de atualização segura

-- 2) Colocar o nome de todos os alunos que estão na turma com o maior número de alunos em maiúsculo;
SET SQL_SAFE_UPDATES = 0;
UPDATE Alunos
SET nome = UPPER(nome)
WHERE id_aluno IN (
    SELECT m.id_aluno
    FROM Matriculas m
    JOIN Turmas t ON m.id_turma = t.id_turma
    WHERE t.quantidade_alunos = (
        SELECT MAX(quantidade_alunos) FROM Turmas
    )
);
SET SQL_SAFE_UPDATES = 1;  -- Ativa novamente o modo de atualização segura

-- 3) Excluir as ausências dos alunos nas turmas que estes são monitores;
DELETE aus
FROM Ausencias aus
JOIN Matriculas m ON aus.id_matricula = m.id_matricula
JOIN Monitores mon ON m.id_aluno = mon.id_aluno;
