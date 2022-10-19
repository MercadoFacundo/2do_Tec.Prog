CREATE TABLE `socio` (
  `id_socio` int PRIMARY KEY,
  `nombre` varchar(255),
  `direccion` varchar(255),
  `telefono` int,
  `id_directores` int,
  `id_genero` int,
  `id_actore` int
);

CREATE TABLE `espera` (
  `id_espera` int,
  `id_socio` int,
  `id_pelicula` int
);

CREATE TABLE `prestamo` (
  `id_prestamo` int,
  `id_socio` int,
  `id_pelicula` int,
  `fecha_prestamo` date
);

CREATE TABLE `devolucion` (
  `id_devolucion` int,
  `id_prestamos` int,
  `id_espera` int,
  `fecha_devolucion` date
);

CREATE TABLE `pelicula` (
  `id_pelicula` int,
  `titulo` varchar(255),
  `id_director` int,
  `id_actor` int,
  `id_genero` int,
  `stock` int
);

CREATE TABLE `actor` (
  `id_actor` int,
  `nombre` varchar(255)
);

CREATE TABLE `director` (
  `id_director` int,
  `nombre` varchar(255)
);

CREATE TABLE `genero` (
  `id_genero` int,
  `genero` varchar(255)
);

CREATE TABLE `socio_director` (
  `id_socio_director` int,
  `id_directores` int
);

CREATE TABLE `socio_genero` (
  `id_socio_genero` int,
  `id_genero` int
);

CREATE TABLE `socio_actor` (
  `id_socio_actor` int,
  `id_actore` int
);

ALTER TABLE `director` ADD FOREIGN KEY (`id_director`) REFERENCES `socio` (`id_directores`);

ALTER TABLE `genero` ADD FOREIGN KEY (`id_genero`) REFERENCES `socio` (`id_genero`);

ALTER TABLE `actor` ADD FOREIGN KEY (`id_actor`) REFERENCES `socio` (`id_actore`);

ALTER TABLE `pelicula` ADD FOREIGN KEY (`id_genero`) REFERENCES `genero` (`id_genero`);

ALTER TABLE `espera` ADD FOREIGN KEY (`id_socio`) REFERENCES `socio` (`id_socio`);

ALTER TABLE `espera` ADD FOREIGN KEY (`id_pelicula`) REFERENCES `pelicula` (`id_pelicula`);

ALTER TABLE `socio` ADD FOREIGN KEY (`id_socio`) REFERENCES `prestamo` (`id_socio`);

ALTER TABLE `pelicula` ADD FOREIGN KEY (`id_pelicula`) REFERENCES `prestamo` (`id_pelicula`);

ALTER TABLE `prestamo` ADD FOREIGN KEY (`id_prestamo`) REFERENCES `devolucion` (`id_prestamos`);

ALTER TABLE `espera` ADD FOREIGN KEY (`id_espera`) REFERENCES `devolucion` (`id_espera`);

ALTER TABLE `pelicula` ADD FOREIGN KEY (`id_director`) REFERENCES `director` (`id_director`);

ALTER TABLE `pelicula` ADD FOREIGN KEY (`id_actor`) REFERENCES `actor` (`id_actor`);
