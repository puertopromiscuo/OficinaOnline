-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 20-01-2014 a las 11:22:02
-- Versión del servidor: 5.6.12-log
-- Versión de PHP: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `testusers`
--
CREATE DATABASE IF NOT EXISTS `testusers` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `testusers`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyects`
--

CREATE TABLE IF NOT EXISTS `proyects` (
  `pro_id` int(4) NOT NULL AUTO_INCREMENT,
  `pro_name` varchar(20) NOT NULL,
  `pro_startDate` date NOT NULL,
  `pro_endDate` date NOT NULL,
  PRIMARY KEY (`pro_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userproyect`
--

CREATE TABLE IF NOT EXISTS `userproyect` (
  `user_id` int(11) NOT NULL,
  `pro_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(8) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=99 ;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(52, 'lkasdnmlks', 'slkdmslkm', 'dmsldml'),
(53, 'dacid', 'david.es', '1111'),
(54, 'gugui', 'gugui.es', '1111'),
(55, 'iedkkl', 'qkdfmflÃ±', 'w'),
(57, 'djdj', 'manuelodoghertyzufia@gmail.com', 'djjdj'),
(70, 'j', 'jesusgraficap@gmail.com', '1111'),
(73, 'kdjfk', 'lksdkl', 'dklflk'),
(74, 'dsfklÃ±', 'smdkldml', 'dksmlk'),
(75, 'dÃ±lackÃ±laÃ‘LDÃ‘Lad', 'Ã‘LlÃ±sÃ±l', 'lkÃ±ld'),
(78, 'zsÃ±lckÃ±Kl', 'lklk', 'lk'),
(79, 'sdkÃ±lLKC', 'lÃ±skÃ±l', 'ldÃ±ldÃ±'),
(80, 'lkdsÃ±l', 'kdkldmkl', 'kdklkld'),
(81, 'sdf d', 'jjdkj', 'jdjkdkj'),
(82, 'ldskj', 'kdnkl nfkl', 'jdkjskn'),
(83, 'lÃ±dmÃ±l', 'lÃ±vdÃ±l,', 'lÃ±,dÃ±,'),
(84, 'kjldjfl', 'kdmlk', 'kdflmekl'),
(85, 'skdlk', 'kldlkdlk', 'kldkldlk'),
(86, 'lksdjlk', 'mdkldmm', 'kldmkl'),
(87, 'opdkpof', 'dofkp', 'dokdpok'),
(89, 'lfl', 'fdkllk', 'cdklk'),
(90, '', 'Ã±sd', 'Ã±df'),
(92, 'ldÃ±', 'lÃ±', 'Ã±Ã±l'),
(93, 'jekek', 'jeiker_navajas@hotmail.es', 'dklfm'),
(95, 'dsfkl', 'jeiker_navajas@hotmail.es', 'ksjdl'),
(96, 'kldfsn', 'lkfmkll', 'klfmlkd'),
(97, 'kodocklKLMC', 'lkdlk', 'kldmkl'),
(98, 'Ã±ldkfÃ±l', 'Ã±lÃ±ldÃ±l', 'ldlÃ±');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
