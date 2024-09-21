-- CRIAR O DB
-- Configuração inicial
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- Criar banco de dados
CREATE SCHEMA IF NOT EXISTS `atividade10` DEFAULT CHARACTER SET utf8;
USE `atividade10`;

-- Tabela aluno
CREATE TABLE IF NOT EXISTS `atividade10`.`aluno` (
  `aluno_id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `curso` VARCHAR(45) NOT NULL,
  `nivel` VARCHAR(45) NOT NULL,
  `idade` INT NOT NULL CHECK (idade BETWEEN 0 AND 120),
  PRIMARY KEY (`aluno_id`)
) ENGINE = InnoDB;

-- Tabela turma
CREATE TABLE IF NOT EXISTS `atividade10`.`turma` (
  `turma_id` INT NOT NULL AUTO_INCREMENT,
  `nometurma` VARCHAR(45) NOT NULL,
  `sala` VARCHAR(45) NOT NULL,
  `horario` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`turma_id`)
) ENGINE = InnoDB;

-- Tabela matrícula
CREATE TABLE IF NOT EXISTS `atividade10`.`matricula` (
  `matricula_id` INT NOT NULL AUTO_INCREMENT,
  `aluno_id` INT NOT NULL,
  `turma_id` INT NOT NULL,
  `nota_1` DECIMAL(4, 2) NOT NULL,
  `nota_2` DECIMAL(4, 2) NOT NULL,
  `nota_3` DECIMAL(4, 2) NOT NULL,
  `nota_final` DECIMAL(4, 2) NOT NULL,
  `nr_faltas` INT NOT NULL,
  PRIMARY KEY (`matricula_id`),
  INDEX `idx_matricula_aluno_id` (`aluno_id` ASC),
  INDEX `idx_matricula_turma_id` (`turma_id` ASC),
  CONSTRAINT `fk_matricula_aluno`
    FOREIGN KEY (`aluno_id`)
    REFERENCES `atividade10`.`aluno` (`aluno_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_matricula_turma`
    FOREIGN KEY (`turma_id`)
    REFERENCES `atividade10`.`turma` (`turma_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Restaura SQL Mode e restrições
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- INSERIR DADOS
INSERT INTO `atividade10`.`aluno` (`nome`, `curso`, `nivel`, `idade`) 
VALUES 
('Patolino', 'Ciências', 'Graduação', 25),
('Marvin', 'Engenharia', 'Pós-graduação', 30),
('Pernalonga', 'Artes', 'Graduação', 22),
('Taz', 'Matemática', 'Graduação', 21),
('Lola', 'Física', 'Graduação', 24),
('Coyote', 'Química', 'Graduação', 26),
('Frajola', 'Computação', 'Graduação', 23),
('Piu-Piu', 'Biologia', 'Graduação', 20),
('Gaguinho', 'Filosofia', 'Graduação', 27),
('Eufrazino', 'Direito', 'Graduação', 35),
('LeBron', 'Esportes', 'Graduação', 22),
('Duffy Duck', 'História', 'Pós-graduação', 28),
('Sam', 'Geografia', 'Graduação', 21),
('Elmer', 'Ciências Políticas', 'Pós-graduação', 32),
('Speedy', 'Literatura', 'Graduação', 24),
('Silvester', 'Economia', 'Graduação', 23),
('Wile E.', 'Física', 'Pós-graduação', 33),
('Yosemite', 'Sociologia', 'Graduação', 28),
('Lola Bunny', 'Educação', 'Graduação', 22),
('Tina Russo', 'Psicologia', 'Graduação', 25),
('K-9', 'Veterinária', 'Graduação', 29),
('Gossamer', 'Ciências da Computação', 'Pós-graduação', 31),
('Foghorn', 'Agronomia', 'Graduação', 26),
('Charlie Dog', 'Zoologia', 'Pós-graduação', 29),
('Henery Hawk', 'Ciências Ambientais', 'Graduação', 24),
('Ralph Wolf', 'Engenharia Civil', 'Pós-graduação', 32),
('Pepe Le Pew', 'Estudos Ambientais', 'Pós-graduação', 30),
('Penelope', 'Biotecnologia', 'Pós-graduação', 28),
('Cecil Turtle', 'Geologia', 'Graduação', 21),
('Rocky', 'Engenharia', 'Graduação', 22);

INSERT INTO `atividade10`.`turma` (`nometurma`, `sala`, `horario`) 
VALUES 
('Turma A', 'Sala 101', '08:00 - 10:00'),
('Turma B', 'Sala 102', '10:00 - 12:00'),
('Turma C', 'Sala 103', '13:00 - 15:00'),
('Turma D', 'Sala 104', '15:00 - 17:00'),
('Turma E', 'Sala 105', '08:00 - 10:00'),
('Turma F', 'Sala 106', '10:00 - 12:00'),
('Turma G', 'Sala 107', '13:00 - 15:00'),
('Turma H', 'Sala 108', '15:00 - 17:00'),
('Turma I', 'Sala 109', '08:00 - 10:00'),
('Turma J', 'Sala 110', '10:00 - 12:00'),
('Turma K', 'Sala 201', '13:00 - 15:00'),
('Turma L', 'Sala 202', '15:00 - 17:00'),
('Turma M', 'Sala 203', '08:00 - 10:00'),
('Turma N', 'Sala 204', '10:00 - 12:00'),
('Turma O', 'Sala 205', '13:00 - 15:00'),
('Turma P', 'Sala 206', '15:00 - 17:00'),
('Turma Q', 'Sala 207', '08:00 - 10:00'),
('Turma R', 'Sala 208', '10:00 - 12:00'),
('Turma S', 'Sala 209', '13:00 - 15:00'),
('Turma T', 'Sala 210', '15:00 - 17:00'),
('Turma U', 'Sala 301', '08:00 - 10:00'),
('Turma V', 'Sala 302', '10:00 - 12:00'),
('Turma W', 'Sala 303', '13:00 - 15:00'),
('Turma X', 'Sala 304', '15:00 - 17:00'),
('Turma Y', 'Sala 305', '08:00 - 10:00'),
('Turma Z', 'Sala 306', '10:00 - 12:00'),
('Turma AA', 'Sala 307', '13:00 - 15:00'),
('Turma AB', 'Sala 308', '15:00 - 17:00'),
('Turma AC', 'Sala 309', '08:00 - 10:00'),
('Turma AD', 'Sala 310', '10:00 - 12:00');

INSERT INTO `atividade10`.`matricula` (`aluno_id`, `turma_id`, `nota_1`, `nota_2`, `nota_3`, `nota_final`, `nr_faltas`)
VALUES 
(1, 1, 8.0, 7.5, 9.0, 8.2, 2),
(2, 2, 6.0, 7.0, 8.0, 7.0, 3),
(3, 3, 9.0, 8.5, 8.0, 8.5, 1),
(4, 4, 5.0, 6.0, 7.0, 6.0, 4),
(5, 5, 7.0, 7.5, 8.5, 7.7, 2),
(6, 6, 6.0, 6.5, 7.5, 6.7, 3),
(7, 7, 8.0, 9.0, 9.5, 8.8, 1),
(8, 8, 5.5, 6.0, 7.0, 6.2, 3),
(9, 9, 7.0, 8.0, 8.5, 7.8, 2),
(10, 10, 9.0, 8.0, 7.0, 8.0, 1),
(11, 11, 6.5, 7.5, 8.0, 7.3, 2),
(12, 12, 7.0, 7.0, 7.5, 7.2, 1),
(13, 13, 8.0, 9.0, 8.5, 8.5, 0),
(14, 14, 6.0, 7.0, 6.5, 6.5, 3),
(15, 15, 7.5, 8.0, 8.0, 7.8, 1),
(16, 16, 8.0, 8.5, 9.0, 8.5, 1),
(17, 17, 5.0, 6.0, 7.0, 6.0, 4),
(18, 18, 9.0, 9.5, 10.0, 9.5, 0),
(19, 19, 7.5, 7.0, 8.0, 7.5, 2),
(20, 20, 8.5, 9.0, 9.5, 9.0, 1),
(21, 21, 6.0, 6.5, 7.0, 6.5, 3),
(22, 22, 7.0, 7.5, 8.0, 7.5, 2),
(23, 23, 8.0, 9.0, 9.0, 8.7, 1),
(24, 24, 5.5, 6.0, 6.5, 6.0, 4),
(25, 25, 7.5, 8.0, 8.5, 8.0, 2),
(26, 26, 6.0, 6.5, 7.0, 6.5, 3),
(27, 27, 8.0, 8.5, 9.0, 8.5, 1),
(28, 28, 9.0, 9.5, 9.5, 9.3, 0),
(29, 29, 6.0, 7.0, 7.5, 6.8, 2),
(30, 30, 8.5, 9.0, 9.5, 9.0, 1);

-- CONSULTAS
-- 1. Quais os nomes de todos os alunos ?
SELECT nome FROM `atividade10`.`aluno`;

-- 2. Quais os números das matrículas dos alunos ?
SELECT matricula_id FROM `atividade10`.`matricula`;

-- 3. Quais os números das matrículas dos alunos que não estão matriculados em uma turma ?
SELECT m.matricula_id
FROM `atividade10`.`matricula` m
LEFT JOIN `atividade10`.`turma` t ON m.turma_id = t.turma_id
WHERE t.turma_id IS NULL;

-- 4. Quais os números dos alunos matriculados em uma turma de número '30' ?
SELECT aluno_id 
FROM `atividade10`.`matricula` 
WHERE turma_id = 30;

-- 5. Qual o horário da turma do aluno 'PATOLINO' ?
SELECT t.horario 
FROM `atividade10`.`matricula` m
JOIN `atividade10`.`aluno` a ON m.aluno_id = a.aluno_id
JOIN `atividade10`.`turma` t ON m.turma_id = t.turma_id
WHERE a.nome = 'Patolino';
