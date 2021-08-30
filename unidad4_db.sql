-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/

-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-08-2021 a las 05:21:41
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `guia1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `code` char(10) NOT NULL,
  `des` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `stock_act` varchar(100) NOT NULL,
  `stock_min` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`code`, `des`, `price`, `stock_act`, `stock_min`) VALUES
('0008', 'PANTALONES', '150.00', '50', '20'),
('P001', 'APPLE', '20.00', '500', '200'),
('P002', 'CHOCOLATE CAKE G', '45.00', '100', '50'),
('P003', 'TRES LECHES', '30.00', '100', '50'),
('P004', 'APPLE ', '40.00', '150', '30'),
('P005', 'RICE WITH MILK - SPECIAL PACKAGING', '13.00', '40', '20'),
('P006', 'PURPLE PORRIDGE', '1.50', '70', '30'),
('P007', 'YPGURT ARABE', '3.00', '100', '50'),
('P008', 'BREAD WITH CHICKEN', '2.00', '500', '300'),
('P009', 'BROWNIE', '3.00', '300', '150'),
('P010', 'KISS OF MOZA', '1.00', '400', '100'),
('P011', 'LIMON PIE', '1.70', '100', '70'),
('P012', 'ORAGE CAKE', '16.00', '10', '4'),
('P013', 'PASTEL DE FRESA ', '41.00', '100', '60'),
('P014', 'ALFAJORES', '0.30', '400', '300'),
('P015', 'CHOCOTEJAS', '2.00', '100', '80'),
('P016', 'SIGH TO THE LIMEÑA', '3.50', '100', '80'),
('P017', 'PIE', '50.00', '500', '100'),
('P018', 'CAKE', '20.00', '300', '50'),
('P019', 'CHOCOLATE', '20.00', '200', '50'),
('P020', 'MCHeads', '1000.00', '100', '50'),
('P021', 'Pons', '12.58', '70', '60'),
('P022', 'Profuct', '50', '100', '20'),
('P023', 'Calzon', '50.50', '100', '50'),
('T005', 'ZAPATOS ', '1000.00', '1', '12');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`code`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
