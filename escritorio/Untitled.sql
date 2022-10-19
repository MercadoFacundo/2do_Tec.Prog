CREATE TABLE `usuario` (
  `id_usuario` int,
  `username` varcharacter,
  `password` varcharacter,
  `nombre` varcharacter,
  `apellido` varcharacter,
  `dni` varcharacter,
  `id_contacto` varcharacter,
  `id_rol` int,
  `id_sala` int
);

CREATE TABLE `sala` (
  `id_sala` int,
  `nombre` varcharacter,
  `id_alumno` int
);

CREATE TABLE `rol` (
  `id_rol` int,
  `nombre` varcharacter,
  `funciones` varcharacter
);

CREATE TABLE `alumno` (
  `id_alumnos` int,
  `nombre` varcharacter,
  `apellido` varcharacter,
  `dni` varcharacter,
  `id_tutor` int,
  `id_sala` int
);

CREATE TABLE `tutor` (
  `id_tutor` int,
  `nombre` varcharacter,
  `apellido` varcharacter,
  `id_contacto` varcharacter
);

CREATE TABLE `asistencia` (
  `id_asistencia` int,
  `id_alumno` int,
  `fecha` date,
  `presencia` boolean
);

CREATE TABLE `contacto` (
  `id_contacto` int,
  `barrio` varcharacter,
  `calle` varcharacter,
  `telefono` int,
  `codigo_postal` int
);

CREATE TABLE `hoja` (
  `id_hoja` int,
  `id_sala` int,
  `id_asistencia` int,
  `fecha` date
);
