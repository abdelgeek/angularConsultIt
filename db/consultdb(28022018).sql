-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 28 fév. 2018 à 18:15
-- Version du serveur :  5.7.19
-- Version de PHP :  5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `consultdb`
--

-- --------------------------------------------------------

--
-- Structure de la table `agency`
--

DROP TABLE IF EXISTS `agency`;
CREATE TABLE IF NOT EXISTS `agency` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `agency_initials` varchar(255) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `country_id` bigint(20) DEFAULT NULL,
  `approval_type_id` bigint(20) DEFAULT NULL,
  `lead_time` int(11) DEFAULT NULL,
  `price_criteria_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKtgx11d821rio4vuogtlg7018c` (`approval_type_id`),
  KEY `FKdrjp243vgxwlq0bp58odvsbt0` (`country_id`),
  KEY `FKr0fgs1da03n108bia2x6x15s1` (`price_criteria_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4572 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `agency`
--

INSERT INTO `agency` (`id`, `agency_initials`, `link`, `country_id`, `approval_type_id`, `lead_time`, `price_criteria_id`) VALUES
(13, 'NTRA', NULL, 13, 3, NULL, 0),
(12, 'MCCPT', NULL, 12, 3, NULL, 0),
(11, 'ARTCI', NULL, 11, 3, NULL, 0),
(10, 'ANRTIC', NULL, 10, 3, NULL, 0),
(9, 'ANAC', NULL, 9, 3, NULL, 0),
(8, 'ART', NULL, 8, 3, NULL, 0),
(7, 'ARCP', NULL, 7, 3, NULL, 1),
(6, 'ARTEL', NULL, 6, 3, NULL, 0),
(3, 'INACOM', NULL, 3, 3, NULL, 0),
(5, 'BOCRA', 'http://www.bocra.org.bw/', 5, 3, NULL, 1),
(4, 'ARCEP', 'http://www.arcep.bj/', 4, 3, NULL, 0),
(2, 'ARPT', 'http://www.arpt.dz', 2, 3, NULL, 0),
(30, 'SABS', 'https://www.sabs.co.za/', 1, 1, NULL, 1),
(29, 'ICASA', 'https://www.icasa.org.za', 1, 3, NULL, 1),
(28, 'NRCS', 'http://www.nrcs.org.za/', 1, 2, NULL, 1),
(14, '', NULL, 14, 3, NULL, 0),
(15, 'ETA', NULL, 15, 3, NULL, 0),
(16, 'ARCEP', NULL, 16, 3, NULL, 0),
(17, 'PURA', NULL, 17, 3, NULL, 0),
(18, 'NCA', NULL, 18, 3, NULL, 1),
(19, 'ARTP', NULL, 19, 3, NULL, 1),
(20, 'ORTEL', NULL, 20, 3, NULL, 0),
(21, 'ICGB', NULL, 21, 3, NULL, 0),
(22, 'CCK', NULL, 22, 3, NULL, 0),
(23, 'LCA', NULL, 23, 3, NULL, 0),
(24, 'LTA', NULL, 24, 3, NULL, 0),
(25, 'GTA', NULL, 25, 3, NULL, 0),
(26, 'OMERT', NULL, 26, 3, NULL, 0),
(27, 'MACRA', NULL, 27, 3, NULL, 0),
(31, 'AMRTP', NULL, 28, 3, NULL, 0),
(32, 'ANRT', NULL, 29, 3, NULL, 0),
(33, 'ICTA', NULL, 30, 3, NULL, 0),
(34, 'ARE', NULL, 31, 3, NULL, 0),
(35, 'INCM', NULL, 32, 3, NULL, 0),
(36, 'NCC', NULL, 33, 3, NULL, 0),
(37, 'ARM', NULL, 34, 3, NULL, 1),
(38, 'NCC', NULL, 35, 3, NULL, 3),
(39, 'UCC', NULL, 36, 3, NULL, 0),
(40, '', NULL, 37, 3, NULL, 0),
(41, 'ARPCE', NULL, 38, 3, NULL, 0),
(42, 'ARPCE', NULL, 39, 3, NULL, 0),
(43, 'RURA', NULL, 40, 3, NULL, 0),
(44, '', NULL, 41, 3, NULL, 0),
(45, 'ARTP', NULL, 42, 3, NULL, 0),
(46, 'ARCEP', NULL, 43, 3, NULL, 0),
(47, 'MISD', NULL, 44, 3, NULL, 0),
(48, 'NATCOM', '', 45, 3, NULL, 0),
(49, 'MPC', NULL, 46, 3, NULL, 0),
(50, 'NTC', NULL, 47, 3, NULL, 0),
(51, 'MOTPS', NULL, 48, 3, NULL, 0),
(52, 'SPTC', NULL, 49, 3, NULL, 0),
(53, 'TCRA', NULL, 50, 3, NULL, 0),
(54, 'ARTP', NULL, 51, 3, NULL, 0),
(55, 'INT', NULL, 52, 3, NULL, 2),
(56, 'CAZ', NULL, 53, 3, NULL, 0),
(57, 'POTRAZ', NULL, 54, 3, NULL, 0);

-- --------------------------------------------------------

--
-- Structure de la table `agency_frequency_band`
--

DROP TABLE IF EXISTS `agency_frequency_band`;
CREATE TABLE IF NOT EXISTS `agency_frequency_band` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `is_frequency_authorized` bit(1) NOT NULL,
  `agency` bigint(20) DEFAULT NULL,
  `frequency` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKk5jup029wernp93ekae40x9rn` (`agency`,`frequency`),
  KEY `FKopc6k1pcr7tvddwjfer0u63w8` (`frequency`)
) ENGINE=MyISAM AUTO_INCREMENT=441 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `agency_frequency_band`
--

INSERT INTO `agency_frequency_band` (`id`, `is_frequency_authorized`, `agency`, `frequency`) VALUES
(1, b'1', 1, 1),
(2, b'1', 1, 2),
(3, b'1', 1, 3),
(4, b'1', 1, 4),
(5, b'1', 1, 5),
(6, b'1', 1, 6),
(7, b'1', 1, 7),
(8, b'1', 1, 8),
(9, b'1', 2, 1),
(10, b'1', 2, 2),
(11, b'1', 2, 3),
(12, b'1', 2, 4),
(13, b'1', 2, 5),
(14, b'1', 2, 6),
(15, b'1', 2, 7),
(16, b'1', 2, 8),
(17, b'1', 3, 1),
(18, b'1', 3, 2),
(19, b'1', 3, 3),
(20, b'1', 3, 4),
(21, b'1', 3, 5),
(22, b'1', 3, 6),
(23, b'1', 3, 7),
(24, b'1', 3, 8),
(25, b'1', 4, 1),
(26, b'1', 4, 2),
(27, b'1', 4, 3),
(28, b'1', 4, 4),
(29, b'1', 4, 5),
(30, b'1', 4, 6),
(31, b'1', 4, 7),
(32, b'1', 4, 8),
(33, b'1', 5, 1),
(34, b'1', 5, 2),
(35, b'1', 5, 3),
(36, b'1', 5, 4),
(37, b'1', 5, 5),
(38, b'1', 5, 6),
(39, b'1', 5, 7),
(40, b'1', 5, 8),
(41, b'1', 6, 1),
(42, b'1', 6, 2),
(43, b'1', 6, 3),
(44, b'1', 6, 4),
(45, b'1', 6, 5),
(46, b'1', 6, 6),
(47, b'1', 6, 7),
(48, b'1', 6, 8),
(49, b'1', 7, 1),
(50, b'1', 7, 2),
(51, b'1', 7, 3),
(52, b'1', 7, 4),
(53, b'1', 7, 5),
(54, b'1', 7, 6),
(55, b'1', 7, 7),
(56, b'1', 7, 8),
(57, b'1', 8, 1),
(58, b'1', 8, 2),
(59, b'1', 8, 3),
(60, b'1', 8, 4),
(61, b'1', 8, 5),
(62, b'1', 8, 6),
(63, b'1', 8, 7),
(64, b'1', 8, 8),
(65, b'1', 9, 1),
(66, b'1', 9, 2),
(67, b'1', 9, 3),
(68, b'1', 9, 4),
(69, b'1', 9, 5),
(70, b'1', 9, 6),
(71, b'1', 9, 7),
(72, b'1', 9, 8),
(73, b'1', 10, 1),
(74, b'1', 10, 2),
(75, b'1', 10, 3),
(76, b'1', 10, 4),
(77, b'1', 10, 5),
(78, b'1', 10, 6),
(79, b'1', 10, 7),
(80, b'1', 10, 8),
(81, b'1', 11, 1),
(82, b'1', 11, 2),
(83, b'1', 11, 3),
(84, b'1', 11, 4),
(85, b'1', 11, 5),
(86, b'1', 11, 6),
(87, b'1', 11, 7),
(88, b'1', 11, 8),
(89, b'1', 12, 1),
(90, b'1', 12, 2),
(91, b'1', 12, 3),
(92, b'1', 12, 4),
(93, b'1', 12, 5),
(94, b'1', 12, 6),
(95, b'1', 12, 7),
(96, b'1', 12, 8),
(97, b'1', 13, 1),
(98, b'1', 13, 2),
(99, b'1', 13, 3),
(100, b'1', 13, 4),
(101, b'1', 13, 5),
(102, b'1', 13, 6),
(103, b'1', 13, 7),
(104, b'1', 13, 8),
(105, b'1', 14, 1),
(106, b'1', 14, 2),
(107, b'1', 14, 3),
(108, b'1', 14, 4),
(109, b'1', 14, 5),
(110, b'1', 14, 6),
(111, b'1', 14, 7),
(112, b'1', 14, 8),
(113, b'1', 15, 1),
(114, b'1', 15, 2),
(115, b'1', 15, 3),
(116, b'1', 15, 4),
(117, b'1', 15, 5),
(118, b'1', 15, 6),
(119, b'1', 15, 7),
(120, b'1', 15, 8),
(121, b'1', 16, 1),
(122, b'1', 16, 2),
(123, b'1', 16, 3),
(124, b'1', 16, 4),
(125, b'1', 16, 5),
(126, b'1', 16, 6),
(127, b'1', 16, 7),
(128, b'1', 16, 8),
(129, b'1', 17, 1),
(130, b'1', 17, 2),
(131, b'1', 17, 3),
(132, b'1', 17, 4),
(133, b'1', 17, 5),
(134, b'1', 17, 6),
(135, b'1', 17, 7),
(136, b'1', 17, 8),
(137, b'1', 18, 1),
(138, b'1', 18, 2),
(139, b'1', 18, 3),
(140, b'1', 18, 4),
(141, b'1', 18, 5),
(142, b'1', 18, 6),
(143, b'1', 18, 7),
(144, b'1', 18, 8),
(145, b'1', 19, 1),
(146, b'1', 19, 2),
(147, b'1', 19, 3),
(148, b'1', 19, 4),
(149, b'1', 19, 5),
(150, b'1', 19, 6),
(151, b'1', 19, 7),
(152, b'1', 19, 8),
(153, b'1', 20, 1),
(154, b'1', 20, 2),
(155, b'1', 20, 3),
(156, b'1', 20, 4),
(157, b'1', 20, 5),
(158, b'1', 20, 6),
(159, b'1', 20, 7),
(160, b'1', 20, 8),
(161, b'1', 21, 1),
(162, b'1', 21, 2),
(163, b'1', 21, 3),
(164, b'1', 21, 4),
(165, b'1', 21, 5),
(166, b'1', 21, 6),
(167, b'1', 21, 7),
(168, b'1', 21, 8),
(169, b'1', 23, 1),
(170, b'1', 23, 2),
(171, b'1', 23, 3),
(172, b'1', 23, 4),
(173, b'1', 23, 5),
(174, b'1', 23, 6),
(175, b'1', 23, 7),
(176, b'1', 23, 8),
(177, b'1', 24, 1),
(178, b'1', 24, 2),
(179, b'1', 24, 3),
(180, b'1', 24, 4),
(181, b'1', 24, 5),
(182, b'1', 24, 6),
(183, b'1', 24, 7),
(184, b'1', 24, 8),
(185, b'1', 25, 1),
(186, b'1', 25, 2),
(187, b'1', 25, 3),
(188, b'1', 25, 4),
(189, b'1', 25, 5),
(190, b'1', 25, 6),
(191, b'1', 25, 7),
(192, b'1', 25, 8),
(193, b'1', 26, 1),
(194, b'1', 26, 2),
(195, b'1', 26, 3),
(196, b'1', 26, 4),
(197, b'1', 26, 5),
(198, b'1', 26, 6),
(199, b'1', 26, 7),
(200, b'1', 26, 8),
(201, b'1', 31, 1),
(202, b'1', 31, 2),
(203, b'1', 31, 3),
(204, b'1', 31, 4),
(205, b'1', 31, 5),
(206, b'1', 31, 6),
(207, b'1', 31, 7),
(208, b'1', 31, 8),
(209, b'1', 32, 1),
(210, b'1', 32, 2),
(211, b'1', 32, 3),
(212, b'1', 32, 4),
(213, b'1', 32, 5),
(214, b'1', 32, 6),
(215, b'1', 32, 7),
(216, b'1', 32, 8),
(217, b'1', 33, 1),
(218, b'1', 33, 2),
(219, b'1', 33, 3),
(220, b'1', 33, 4),
(221, b'1', 33, 5),
(222, b'1', 33, 6),
(223, b'1', 33, 7),
(224, b'1', 33, 8),
(225, b'1', 34, 1),
(226, b'1', 34, 2),
(227, b'1', 34, 3),
(228, b'1', 34, 4),
(229, b'1', 34, 5),
(230, b'1', 34, 6),
(231, b'1', 34, 7),
(232, b'1', 34, 8),
(233, b'1', 35, 1),
(234, b'1', 35, 2),
(235, b'1', 35, 3),
(236, b'1', 35, 4),
(237, b'1', 35, 5),
(238, b'1', 35, 6),
(239, b'1', 35, 7),
(240, b'1', 35, 8),
(241, b'1', 36, 1),
(242, b'1', 36, 2),
(243, b'1', 36, 3),
(244, b'1', 36, 4),
(245, b'1', 36, 5),
(246, b'1', 36, 6),
(247, b'1', 36, 7),
(248, b'1', 36, 8),
(249, b'1', 37, 1),
(250, b'1', 37, 2),
(251, b'1', 37, 3),
(252, b'1', 37, 4),
(253, b'1', 37, 5),
(254, b'1', 37, 6),
(255, b'1', 37, 7),
(256, b'1', 37, 8),
(257, b'1', 38, 1),
(258, b'1', 38, 2),
(259, b'1', 38, 3),
(260, b'1', 38, 4),
(261, b'1', 38, 5),
(262, b'1', 38, 6),
(263, b'1', 38, 7),
(264, b'1', 38, 8),
(265, b'1', 39, 1),
(266, b'1', 39, 2),
(267, b'1', 39, 3),
(268, b'1', 39, 4),
(269, b'1', 39, 5),
(270, b'1', 39, 6),
(271, b'1', 39, 7),
(272, b'1', 39, 8),
(273, b'1', 40, 1),
(274, b'1', 40, 2),
(275, b'1', 40, 3),
(276, b'1', 40, 4),
(277, b'1', 40, 5),
(278, b'1', 40, 6),
(279, b'1', 40, 7),
(280, b'1', 40, 8),
(281, b'1', 41, 1),
(282, b'1', 41, 2),
(283, b'1', 41, 3),
(284, b'1', 41, 4),
(285, b'1', 41, 5),
(286, b'1', 41, 6),
(287, b'1', 41, 7),
(288, b'1', 41, 8),
(289, b'1', 42, 1),
(290, b'1', 42, 2),
(291, b'1', 42, 3),
(292, b'1', 42, 4),
(293, b'1', 42, 5),
(294, b'1', 42, 6),
(295, b'1', 42, 7),
(296, b'1', 42, 8),
(297, b'1', 43, 1),
(298, b'1', 43, 2),
(299, b'1', 43, 3),
(300, b'1', 43, 4),
(301, b'1', 43, 5),
(302, b'1', 43, 6),
(303, b'1', 43, 7),
(304, b'1', 43, 8),
(305, b'1', 44, 1),
(306, b'1', 44, 2),
(307, b'1', 44, 3),
(308, b'1', 44, 4),
(309, b'1', 44, 5),
(310, b'1', 44, 6),
(311, b'1', 44, 7),
(312, b'1', 44, 8),
(313, b'1', 45, 1),
(314, b'1', 45, 2),
(315, b'1', 45, 3),
(316, b'1', 45, 4),
(317, b'1', 45, 5),
(318, b'1', 45, 6),
(319, b'1', 45, 7),
(320, b'1', 45, 8),
(321, b'1', 46, 1),
(322, b'1', 46, 2),
(323, b'1', 46, 3),
(324, b'1', 46, 4),
(325, b'1', 46, 5),
(326, b'1', 46, 6),
(327, b'1', 46, 7),
(328, b'1', 46, 8),
(329, b'1', 47, 1),
(330, b'1', 47, 2),
(331, b'1', 47, 3),
(332, b'1', 47, 4),
(333, b'1', 47, 5),
(334, b'1', 47, 6),
(335, b'1', 47, 7),
(336, b'1', 47, 8),
(337, b'1', 48, 1),
(338, b'1', 48, 2),
(339, b'1', 48, 3),
(340, b'1', 48, 4),
(341, b'1', 48, 5),
(342, b'1', 48, 6),
(343, b'1', 48, 7),
(344, b'1', 48, 8),
(345, b'1', 49, 1),
(346, b'1', 49, 2),
(347, b'1', 49, 3),
(348, b'1', 49, 4),
(349, b'1', 49, 5),
(350, b'1', 49, 6),
(351, b'1', 49, 7),
(352, b'1', 49, 8),
(353, b'1', 50, 1),
(354, b'1', 50, 2),
(355, b'1', 50, 3),
(356, b'1', 50, 4),
(357, b'1', 50, 5),
(358, b'1', 50, 6),
(359, b'1', 50, 7),
(360, b'1', 50, 8),
(361, b'1', 51, 1),
(362, b'1', 51, 2),
(363, b'1', 51, 3),
(364, b'1', 51, 4),
(365, b'1', 51, 5),
(366, b'1', 51, 6),
(367, b'1', 51, 7),
(368, b'1', 51, 8),
(369, b'1', 52, 1),
(370, b'1', 52, 2),
(371, b'1', 52, 3),
(372, b'1', 52, 4),
(373, b'1', 52, 5),
(374, b'1', 52, 6),
(375, b'1', 52, 7),
(376, b'1', 52, 8),
(377, b'1', 53, 1),
(378, b'1', 53, 2),
(379, b'1', 53, 3),
(380, b'1', 53, 4),
(381, b'1', 53, 5),
(382, b'1', 53, 6),
(383, b'1', 53, 7),
(384, b'1', 53, 8),
(385, b'1', 54, 1),
(386, b'1', 54, 2),
(387, b'1', 54, 3),
(388, b'1', 54, 4),
(389, b'1', 54, 5),
(390, b'1', 54, 6),
(391, b'1', 54, 7),
(392, b'1', 54, 8),
(393, b'1', 55, 1),
(394, b'1', 55, 2),
(395, b'1', 55, 3),
(396, b'1', 55, 4),
(397, b'1', 55, 5),
(398, b'1', 55, 6),
(399, b'1', 55, 7),
(400, b'1', 55, 8),
(401, b'1', 56, 1),
(402, b'1', 56, 2),
(403, b'1', 56, 3),
(404, b'1', 56, 4),
(405, b'1', 56, 5),
(406, b'1', 56, 6),
(407, b'1', 56, 7),
(408, b'1', 56, 8),
(409, b'1', 57, 1),
(410, b'1', 57, 2),
(411, b'1', 57, 3),
(412, b'1', 57, 4),
(413, b'1', 57, 5),
(414, b'1', 57, 6),
(415, b'1', 57, 7),
(416, b'1', 57, 8),
(417, b'1', 27, 1),
(418, b'1', 27, 2),
(419, b'1', 27, 3),
(420, b'1', 27, 4),
(421, b'1', 27, 5),
(422, b'1', 27, 6),
(423, b'1', 27, 7),
(424, b'1', 27, 8),
(425, b'1', 29, 1),
(426, b'1', 29, 2),
(427, b'1', 29, 3),
(428, b'1', 29, 4),
(429, b'1', 29, 5),
(430, b'1', 29, 6),
(431, b'1', 29, 7),
(432, b'1', 29, 8),
(433, b'0', 22, 1),
(434, b'0', 22, 2),
(435, b'0', 22, 3),
(436, b'0', 22, 4),
(437, b'1', 22, 5),
(438, b'1', 22, 6),
(439, b'1', 22, 7),
(440, b'1', 22, 8);

-- --------------------------------------------------------

--
-- Structure de la table `agency_requirements`
--

DROP TABLE IF EXISTS `agency_requirements`;
CREATE TABLE IF NOT EXISTS `agency_requirements` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `is_required` bit(1) DEFAULT NULL,
  `agency` bigint(20) DEFAULT NULL,
  `requirements` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKawu8d1ob2nyhbfc9lkhwstaps` (`agency`,`requirements`),
  KEY `FKb89q3r4t6ykx1butfibk7u8yr` (`requirements`)
) ENGINE=MyISAM AUTO_INCREMENT=115 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `agency_requirements`
--

INSERT INTO `agency_requirements` (`id`, `is_required`, `agency`, `requirements`) VALUES
(2, b'1', 2, 1),
(3, b'1', 3, 1),
(4, b'1', 4, 1),
(5, b'1', 5, 1),
(6, b'1', 6, 1),
(7, b'1', 7, 1),
(8, b'1', 8, 1),
(9, b'1', 9, 1),
(10, b'1', 10, 1),
(11, b'1', 11, 1),
(12, b'1', 12, 1),
(13, b'1', 13, 1),
(14, b'1', 14, 1),
(15, b'1', 15, 1),
(16, b'1', 16, 1),
(17, b'1', 17, 1),
(18, b'1', 18, 1),
(19, b'1', 19, 1),
(20, b'1', 20, 1),
(21, b'1', 21, 1),
(22, b'1', 22, 1),
(23, b'1', 23, 1),
(24, b'1', 24, 1),
(25, b'1', 25, 1),
(26, b'1', 26, 1),
(27, b'1', 27, 1),
(28, b'1', 28, 1),
(29, b'1', 29, 1),
(30, b'1', 30, 1),
(31, b'1', 31, 1),
(32, b'1', 32, 1),
(33, b'1', 33, 1),
(34, b'1', 34, 1),
(35, b'1', 35, 1),
(36, b'1', 36, 1),
(37, b'1', 37, 1),
(38, b'1', 38, 1),
(39, b'1', 39, 1),
(40, b'1', 40, 1),
(41, b'1', 41, 1),
(42, b'1', 42, 1),
(43, b'1', 43, 1),
(44, b'1', 44, 1),
(45, b'1', 45, 1),
(46, b'1', 46, 1),
(47, b'1', 47, 1),
(48, b'1', 48, 1),
(49, b'1', 49, 1),
(50, b'1', 50, 1),
(51, b'1', 51, 1),
(52, b'1', 52, 1),
(53, b'1', 53, 1),
(54, b'1', 54, 1),
(55, b'1', 55, 1),
(56, b'1', 56, 1),
(57, b'1', 57, 1),
(59, b'1', 2, 2),
(60, b'1', 3, 2),
(61, b'1', 4, 2),
(62, b'1', 5, 2),
(63, b'1', 6, 2),
(64, b'1', 7, 2),
(65, b'1', 8, 2),
(66, b'1', 9, 2),
(67, b'1', 10, 2),
(68, b'1', 11, 2),
(69, b'1', 12, 2),
(70, b'1', 13, 2),
(71, b'1', 14, 2),
(72, b'1', 15, 2),
(73, b'1', 16, 2),
(74, b'1', 17, 2),
(75, b'1', 18, 2),
(76, b'1', 19, 2),
(77, b'1', 20, 2),
(78, b'1', 21, 2),
(79, b'1', 22, 2),
(80, b'1', 23, 2),
(81, b'1', 24, 2),
(82, b'1', 25, 2),
(83, b'1', 26, 2),
(84, b'1', 27, 2),
(85, b'1', 28, 2),
(86, b'1', 29, 2),
(87, b'1', 30, 2),
(88, b'1', 31, 2),
(89, b'1', 32, 2),
(90, b'1', 33, 2),
(91, b'1', 34, 2),
(92, b'1', 35, 2),
(93, b'1', 36, 2),
(94, b'1', 37, 2),
(95, b'1', 38, 2),
(96, b'1', 39, 2),
(97, b'1', 40, 2),
(98, b'1', 41, 2),
(99, b'1', 42, 2),
(100, b'1', 43, 2),
(101, b'1', 44, 2),
(102, b'1', 45, 2),
(103, b'1', 46, 2),
(104, b'1', 47, 2),
(105, b'1', 48, 2),
(106, b'1', 49, 2),
(107, b'1', 50, 2),
(108, b'1', 51, 2),
(109, b'1', 52, 2),
(110, b'1', 53, 2),
(111, b'1', 54, 2),
(112, b'1', 55, 2),
(113, b'1', 56, 2),
(114, b'1', 57, 2);

-- --------------------------------------------------------

--
-- Structure de la table `approval_type`
--

DROP TABLE IF EXISTS `approval_type`;
CREATE TABLE IF NOT EXISTS `approval_type` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `approval_type`
--

INSERT INTO `approval_type` (`id`, `name`) VALUES
(1, 'Emc'),
(2, 'Safety'),
(3, 'Telecommunications');

-- --------------------------------------------------------

--
-- Structure de la table `category_price`
--

DROP TABLE IF EXISTS `category_price`;
CREATE TABLE IF NOT EXISTS `category_price` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `number_modules` int(11) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `regards_the_encryption_function` bit(1) DEFAULT NULL,
  `agency_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1s5c4yufjb8rff0pov5a71n0a` (`agency_id`)
) ENGINE=MyISAM AUTO_INCREMENT=88 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `category_price`
--

INSERT INTO `category_price` (`id`, `name`, `number_modules`, `price`, `regards_the_encryption_function`, `agency_id`) VALUES
(1, 'category algeria', 0, 2000, b'0', 2),
(2, 'category angola', 0, 3000, b'0', 3),
(3, 'category botswana A', 0, 2500, b'0', 5),
(4, 'category botswana B', 0, 5000, b'0', 5),
(5, 'category botswana C', 0, 11000, b'0', 5),
(6, 'category botswana D', 0, 25000, b'0', 5),
(17, 'category ghana c', 0, 1400, b'0', 18),
(16, 'category ghana b', 0, 2600, b'0', 18),
(15, 'category ghana A', 0, 3600, b'0', 18),
(14, 'category burundi B', 0, 3000, b'0', 7),
(13, 'category burundi A', 0, 3500, b'0', 7),
(18, 'category guinee A', 0, 2800, b'0', 19),
(19, 'category guinee b', 0, 2300, b'0', 19),
(20, 'category guinee c', 0, 1400, b'0', 19),
(21, 'category guinee d', 0, 3500, b'0', 19),
(22, 'category guinee e', 0, 2100, b'0', 19),
(23, 'category guinea g', 0, 3266, b'0', 19),
(24, 'category guinea f', 0, 2100, b'0', 19),
(25, 'category niger a', 0, 2300, b'0', 37),
(26, 'category niger b', 0, 8100, b'0', 37),
(27, 'category niger c', 0, 5200, b'0', 37),
(28, 'category niger d', 0, 4100, b'0', 37),
(29, 'category niger e', 0, 2900, b'0', 37),
(30, 'category nigeria 1 module', 1, 3600, b'0', 38),
(31, 'category nigeria 2 module', 2, 8000, b'0', 38),
(32, 'category nigeria 3 module', 3, 9800, b'0', 38),
(33, 'category nigeria smartphone', 0, 9800, b'0', 38),
(34, 'category nigeria tablet', 0, 2600, b'0', 38),
(35, 'category tunisia rf + encryption', 0, 10000, b'1', 55),
(36, 'category tunisia rf only', 0, 3000, b'0', 55),
(37, 'category south africa icasa(RF)', 0, 2600, b'0', 29),
(38, 'category south africa nrcs(safety)', 0, 2600, b'0', 28),
(39, 'category Egypte', 0, 3250, b'0', 13),
(40, 'category', 0, 5890, b'0', 12),
(41, 'category', 0, 3250, b'0', 11),
(42, 'category', 0, 3500, b'0', 10),
(43, 'category', 0, 3600, b'0', 9),
(44, 'category', 0, 3650, b'0', 8),
(45, 'category', 0, 4300, b'0', 6),
(46, 'category', 0, 5890, b'0', 4),
(48, 'category', 0, 12840, b'0', 2),
(49, 'category', 0, 3600, b'0', 14),
(50, 'category', 0, 87500, b'0', 15),
(51, 'category', 0, 3600, b'0', 16),
(52, 'category', 0, 58900, b'0', 17),
(53, 'category', 0, 10250, b'0', 20),
(54, 'category', 0, 3250, b'0', 21),
(55, 'category', 0, 4300, b'0', 22),
(56, 'category', 0, 4300, b'0', 23),
(57, 'category', 0, 3000, b'0', 24),
(58, 'category', 0, 5400, b'0', 25),
(59, 'category', 0, 5890, b'0', 26),
(60, 'category', 0, 3250, b'0', 27),
(61, 'category', 0, 4300, b'0', 31),
(62, 'category', 0, 3100, b'0', 32),
(63, 'category', 0, 2600, b'0', 33),
(64, 'category', 0, 5890, b'0', 36),
(65, 'category', 0, 3250, b'0', 37),
(66, 'category', 0, 8700, b'0', 38),
(67, 'category', 0, 4300, b'0', 39),
(68, 'category', 0, 7800, b'0', 40),
(69, 'category', 0, 7800, b'0', 41),
(70, 'category', 0, 5890, b'0', 42),
(71, 'category', 0, 3250, b'0', 43),
(72, 'category', 0, 7800, b'0', 44),
(73, 'category', 0, 4300, b'0', 45),
(74, 'category', 0, 3250, b'0', 46),
(75, 'category', 0, 5890, b'0', 47),
(76, 'category', 0, 3250, b'0', 48),
(77, 'category', 0, 7800, b'0', 49),
(78, 'category', 0, 3250, b'0', 50),
(79, 'category', 0, 2500, NULL, 51),
(80, 'category', 0, 5822, NULL, 52),
(81, 'category', 0, 3200, b'0', 53),
(82, 'category', 0, 3250, b'0', 54),
(84, 'category', 0, 1150, b'0', 56),
(85, 'category', 0, 3600, b'0', 57),
(86, 'category mauritania', 0, 3250, b'0', 34),
(87, 'category mozambique', 0, 2600, b'0', 35);

-- --------------------------------------------------------

--
-- Structure de la table `category_price_equipement_types`
--

DROP TABLE IF EXISTS `category_price_equipement_types`;
CREATE TABLE IF NOT EXISTS `category_price_equipement_types` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `category_price_id` bigint(20) DEFAULT NULL,
  `equipment_type_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKs2pu9iy2f6vlog8rekbiqgfdk` (`category_price_id`,`equipment_type_id`),
  KEY `FKnqvdvot2eq1sb8m9bt2k6ftn3` (`equipment_type_id`)
) ENGINE=MyISAM AUTO_INCREMENT=58 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `category_price_equipement_types`
--

INSERT INTO `category_price_equipement_types` (`id`, `category_price_id`, `equipment_type_id`) VALUES
(1, 3, 8),
(2, 3, 7),
(3, 4, 9),
(4, 4, 10),
(5, 4, 11),
(6, 4, 12),
(7, 4, 13),
(8, 4, 18),
(9, 4, 14),
(10, 4, 15),
(11, 4, 16),
(12, 4, 17),
(13, 5, 19),
(14, 5, 20),
(15, 5, 21),
(16, 5, 22),
(17, 5, 23),
(18, 5, 24),
(19, 5, 25),
(20, 6, 26),
(21, 6, 27),
(22, 6, 28),
(23, 6, 29),
(24, 6, 30),
(25, 14, 39),
(26, 14, 38),
(27, 14, 37),
(28, 14, 36),
(29, 13, 35),
(30, 13, 34),
(31, 13, 33),
(32, 13, 32),
(33, 13, 31),
(34, 14, 40),
(35, 14, 41),
(36, 14, 42),
(37, 15, 43),
(38, 15, 44),
(39, 15, 45),
(40, 15, 46),
(41, 16, 47),
(42, 16, 48),
(43, 17, 44),
(44, 17, 50),
(45, 17, 51),
(46, 17, 52),
(47, 17, 53),
(48, 18, 45),
(49, 18, 53),
(50, 19, 53),
(51, 19, 55),
(52, 25, 12),
(53, 25, 56),
(54, 26, 56),
(55, 26, 57),
(56, 33, 59),
(57, 34, 60);

-- --------------------------------------------------------

--
-- Structure de la table `country`
--

DROP TABLE IF EXISTS `country`;
CREATE TABLE IF NOT EXISTS `country` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_llidyp77h6xkeokpbmoy710d4` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=1874 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `country`
--

INSERT INTO `country` (`id`, `name`) VALUES
(32, 'Mozambique'),
(31, 'Mauritania'),
(30, 'Maurice'),
(29, 'Morroco'),
(28, 'Mali'),
(27, 'Malawi'),
(26, 'Madagascar'),
(25, 'Libya'),
(24, 'Liberia'),
(23, 'Lesotho'),
(22, 'Kenya'),
(21, 'Bissau Guinea'),
(20, 'Equatoriale Guinea'),
(19, 'Guinea'),
(18, 'Ghana'),
(17, 'Gambia'),
(16, 'Gabon '),
(15, 'Ethiopia'),
(14, 'Erythree'),
(13, 'Egypt'),
(12, 'Djibouti'),
(11, 'Cote d’Ivoire'),
(10, 'Comores'),
(9, 'Cape Verde'),
(8, 'Cameroon'),
(7, 'Burundi'),
(6, 'Burkina Faso'),
(5, 'Botswana'),
(4, 'Benin'),
(3, 'Angola'),
(2, 'Algeria'),
(1, 'South Africa'),
(33, 'Namibia'),
(34, 'Niger'),
(35, 'Nigeria'),
(36, 'Uganda'),
(37, 'Centrafrican Republic '),
(38, 'Republic of Congo'),
(39, 'RDC'),
(40, 'Rwanda'),
(41, 'Sao Tome Principe'),
(42, 'Senegal'),
(43, 'Chad'),
(44, 'Seychelles '),
(45, 'Sierra Leone'),
(46, 'Somalia'),
(47, 'Sudan'),
(48, 'South Sudan'),
(49, 'Swaziland'),
(50, 'Tanzania'),
(51, 'Togo'),
(52, 'Tunisia'),
(53, 'Zambia'),
(54, 'Zimbabwe');

-- --------------------------------------------------------

--
-- Structure de la table `equipment`
--

DROP TABLE IF EXISTS `equipment`;
CREATE TABLE IF NOT EXISTS `equipment` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) DEFAULT NULL,
  `is_encrypt` bit(1) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=52 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `equipment`
--

INSERT INTO `equipment` (`id`, `brand`, `is_encrypt`, `name`, `model`) VALUES
(6, 'bn', NULL, 'hg', 'vv'),
(5, 'bn', NULL, 'hg', 'vv'),
(7, NULL, NULL, NULL, NULL),
(8, 'c', NULL, 'c', 'c'),
(9, NULL, NULL, NULL, NULL),
(10, 'zv', NULL, 'ab', 'ag'),
(11, 'zv', NULL, 'ab', 'ag'),
(12, 'h', NULL, 'h', 'h'),
(13, 'h', NULL, 'h', 'h'),
(14, 'h', NULL, 'h', 'h'),
(15, 'f', NULL, 'd', 's'),
(16, 'dgg', NULL, 'sd', 'fg'),
(17, 'hg', NULL, 'hy', 'hj'),
(18, 'f', NULL, 'f', 'f'),
(19, 'f', NULL, 'f', 'f'),
(20, 'd', NULL, 'ci', 'abd'),
(21, 'z', NULL, 'gile', 'j'),
(22, '25', NULL, '25', 'hg'),
(23, '52', NULL, 'gb', '21'),
(24, 'vf', NULL, 'c', 'cisse'),
(25, 'vf', NULL, 'c', 'cisse'),
(26, 'vf', NULL, 'c', 'cisse'),
(27, 'vf', NULL, 'c', 'cisse'),
(28, 'vf', NULL, 'c', 'cisse'),
(29, 'fg', NULL, 'fg', 'fg'),
(30, 'fg', NULL, 'fg', 'fg'),
(31, 'fg', NULL, 'fg', 'fg'),
(32, 'sd', NULL, 'fv', 'fg'),
(33, 'sd', NULL, 'fv', 'fg'),
(34, 'dfd', NULL, 'dfd', 'fd'),
(35, 'dfd', NULL, 'dfd', 'fd'),
(36, 'dfd', NULL, 'dfd', 'fd'),
(37, 'dfd', NULL, 'dfd', 'fd'),
(38, 'dfd', NULL, 'dfd', 'fd'),
(39, 'dfd', NULL, 'dfd', 'fd'),
(40, 'dfd', NULL, 'dfd', 'fd'),
(41, 'hyj', NULL, 'df', 'gfg'),
(42, '2', NULL, 'title', 'enum'),
(43, '2', NULL, 'title', 'enum'),
(44, '2', NULL, 'title', 'enum'),
(45, 'test brand', NULL, 'test', 'test model'),
(46, 'test brand', NULL, 'test', 'test model'),
(47, 'test brand', NULL, 'test', 'test model'),
(48, NULL, NULL, NULL, NULL),
(49, 'test', NULL, 'test', 'test'),
(50, 'yut', NULL, 'trut', 'tuu'),
(51, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `equipment_nature`
--

DROP TABLE IF EXISTS `equipment_nature`;
CREATE TABLE IF NOT EXISTS `equipment_nature` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `approval_type_id` bigint(20) DEFAULT NULL,
  `has_frequency` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKgiefjp9ndfl3xmo8t628r0bmt` (`approval_type_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `equipment_nature`
--

INSERT INTO `equipment_nature` (`id`, `name`, `approval_type_id`, `has_frequency`) VALUES
(1, 'Radio frequency', 3, b'1'),
(2, 'Non Radio Frequency', 3, b'0');

-- --------------------------------------------------------

--
-- Structure de la table `equipment_technologie`
--

DROP TABLE IF EXISTS `equipment_technologie`;
CREATE TABLE IF NOT EXISTS `equipment_technologie` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `equipment_nature_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKnhxcr5o5r1sqkqri25posc86c` (`equipment_nature_id`)
) ENGINE=MyISAM AUTO_INCREMENT=65 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `equipment_technologie`
--

INSERT INTO `equipment_technologie` (`id`, `name`, `equipment_nature_id`) VALUES
(1, 'GSM/IMT-2000', 2),
(46, 'Switching and Signaling Systems', 1),
(2, 'Wimax', 2),
(3, 'Tetra', 2),
(4, 'Dect', 2),
(5, 'Satellite', 2),
(6, 'Two-way radio transceiver', 2),
(7, 'Point-to-multipoint link', 2),
(8, 'Point-to-point link', 2),
(9, 'Receiver only', 2),
(10, 'Repeater', 2),
(11, 'Rlan(Wlan)', 2),
(12, 'RFID', 2),
(13, 'LTE', 2),
(14, 'SRD', 2),
(15, 'Model control', 2),
(16, 'Wideband wireless systems', 2),
(17, 'Wireless microphones', 2),
(18, 'Paging systems', 2),
(19, 'Broadcoast', 2),
(20, 'Inductive loop system', 2),
(21, 'Smart Metering', 2),
(22, 'Telecontrol, Telemetering', 2),
(23, 'Monitoring equipement', 2),
(24, 'Measuring equipment', 2),
(25, 'Passive component', 2),
(26, 'Amplifiers', 2),
(27, 'LPVS', 2),
(28, 'AVI', 2),
(29, 'RTTT', 2),
(30, 'FDDA', 2),
(45, 'Soft Switch', 1),
(44, 'E1', 1),
(43, 'DECT', 1),
(42, 'Transmission systems', 1),
(31, 'Wireless microphones', 1),
(47, 'ISDN BRI', 1),
(48, 'VOIP systems', 1),
(49, 'International Gateway', 1),
(50, 'Telephone Networks', 1),
(51, 'ISDN PRI', 1),
(52, 'Measuring Equipement', 1),
(53, 'Copper Transmission', 1),
(54, 'Data Communication Networks', 1),
(55, 'ADSL', 1),
(56, 'Lines connections and circuits', 1),
(57, 'DVB', 1),
(58, 'Powerline Telecommunication', 1),
(59, 'PSTN', 1),
(60, 'Fibre optic', 1),
(61, 'Audio Visual systems', 1),
(62, 'Telex, Teletext, telefax', 1),
(63, 'Telephone Equipement', 1),
(64, 'Copper', 1);

-- --------------------------------------------------------

--
-- Structure de la table `equipment_type`
--

DROP TABLE IF EXISTS `equipment_type`;
CREATE TABLE IF NOT EXISTS `equipment_type` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=61 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `equipment_type`
--

INSERT INTO `equipment_type` (`id`, `name`) VALUES
(9, 'Alarm systems'),
(8, 'Low power Devices'),
(7, 'Cellular phones'),
(10, 'Answering Machines'),
(11, 'Basic telephone'),
(12, 'Cordless phone'),
(13, 'Data modems(incl. switches,routers)'),
(14, 'Wireless microphones'),
(15, 'Basic routers'),
(16, 'Faxes'),
(17, 'Wireless terminals'),
(18, 'Dtt set- top-box receivers'),
(19, 'PABX with 24-47 ports'),
(20, 'Vsat terminal'),
(21, 'Multiplex equipment (voice and data)'),
(22, 'Radio interface equipment'),
(23, 'Radio transmitters (incl broadcoasting)'),
(24, 'Pabx with less than 24 ports'),
(25, 'Switch with less than 24 ports'),
(26, 'Pabx with 48 -127 ports'),
(27, 'Pabx with 128 -255'),
(28, 'Pabx with 256 and more'),
(29, 'Satellite earth station'),
(30, 'Vsat terminal'),
(31, 'Téléphone DECT'),
(32, 'Terminal RNIS'),
(33, 'Modem ADSL'),
(34, 'Terminaux faible puissance et portée'),
(35, 'Modem FAX'),
(36, 'Routeur point d’accès Wireless'),
(37, 'Routeur Wireless'),
(38, 'Radio téléphonie fixe'),
(39, 'Radio mobile terrestre'),
(40, 'Radio HF/VHF/UHF marine'),
(41, 'Terminal GSM/DCS/PCS etc.'),
(42, 'Terminal WIMAX'),
(43, 'Routers'),
(44, 'Switches'),
(45, 'Modems'),
(46, 'PBX'),
(47, 'Microwave'),
(48, 'VSAT Transceivers'),
(54, 'Station terrienne'),
(50, 'Media gateways'),
(51, 'PSTN '),
(52, 'BSCs'),
(53, 'MSCs'),
(55, 'Cable a fibre optique'),
(56, 'Srd'),
(57, 'PABX accessories'),
(58, 'GPS divices'),
(59, 'Smartphone'),
(60, 'Tablet');

-- --------------------------------------------------------

--
-- Structure de la table `frequency_band`
--

DROP TABLE IF EXISTS `frequency_band`;
CREATE TABLE IF NOT EXISTS `frequency_band` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `max_frequency` int(11) DEFAULT NULL,
  `min_frequency` int(11) DEFAULT NULL,
  `unit` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `frequency_band`
--

INSERT INTO `frequency_band` (`id`, `max_frequency`, `min_frequency`, `unit`) VALUES
(1, 30, 9, 'MHz'),
(2, 390, 30, 'MHz'),
(3, 890, 390, 'MHz'),
(4, 3000, 890, 'MHz'),
(5, 10, 3, 'GHz'),
(6, 20, 10, 'GHz'),
(7, 40, 20, 'GHz'),
(8, NULL, 40, 'GHz');

-- --------------------------------------------------------

--
-- Structure de la table `invoice`
--

DROP TABLE IF EXISTS `invoice`;
CREATE TABLE IF NOT EXISTS `invoice` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `total_amount` double DEFAULT NULL,
  `date` date DEFAULT NULL,
  `purchase_order_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKpbnhtmx9crcudpxcr5j2xjool` (`purchase_order_id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `invoice`
--

INSERT INTO `invoice` (`id`, `total_amount`, `date`, `purchase_order_id`) VALUES
(1, 4500, '2018-01-04', 45),
(2, 4000, '2018-01-09', 47),
(3, 16000, '2018-01-12', 48),
(4, 8000, '2018-01-12', 49),
(5, 4500, '2018-01-12', 50),
(6, 4500, '2018-01-12', 51),
(7, 4500, '2018-01-12', 52),
(8, 4000, '2018-01-12', 53),
(9, 6000, '2018-01-12', 54),
(10, 6000, '2018-01-12', 55),
(11, 8000, '2018-01-12', 56),
(12, 5500, '2018-01-12', 57),
(13, 2500, '2018-01-12', 58),
(14, 8000, '2018-01-12', 59),
(15, 500, '2018-01-12', 60),
(16, 4500, '2018-01-12', 61),
(17, 4500, '2018-01-12', 62),
(18, 1500, '2018-01-12', 63),
(19, 1500, '2018-01-12', 64),
(20, 1500, '2018-01-12', 65),
(21, 10000, '2018-01-12', 66),
(22, 14000, '2018-01-19', 67),
(23, 14000, '2018-01-19', 68),
(24, 14000, '2018-01-19', 69),
(25, NULL, '2018-01-26', 70),
(26, NULL, '2018-01-26', 71),
(27, NULL, '2018-01-26', 72),
(28, NULL, '2018-01-26', 73),
(29, NULL, '2018-01-26', 74),
(30, NULL, '2018-01-27', 75),
(31, NULL, '2018-01-28', 76);

-- --------------------------------------------------------

--
-- Structure de la table `price_criteria`
--

DROP TABLE IF EXISTS `price_criteria`;
CREATE TABLE IF NOT EXISTS `price_criteria` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `price_criteria`
--

INSERT INTO `price_criteria` (`id`, `name`) VALUES
(1, 'Equipment Type'),
(2, 'Encryption Feature'),
(0, 'no criteria'),
(3, 'number of module');

-- --------------------------------------------------------

--
-- Structure de la table `project`
--

DROP TABLE IF EXISTS `project`;
CREATE TABLE IF NOT EXISTS `project` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `country_id` bigint(20) DEFAULT NULL,
  `equipment_id` bigint(20) DEFAULT NULL,
  `purchase_order_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKo7wti3q1fswj0os6lha1ncvhw` (`country_id`),
  KEY `FKpx3kxe8i0g71irwvts73y9ihl` (`equipment_id`),
  KEY `FK2r2i9a1aci6u3sx862iqsyc51` (`purchase_order_id`)
) ENGINE=MyISAM AUTO_INCREMENT=112 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `project`
--

INSERT INTO `project` (`id`, `date`, `country_id`, `equipment_id`, `purchase_order_id`) VALUES
(1, '2018-01-04', 13, 11, 35),
(2, '2018-01-04', 9, 11, 35),
(3, '2018-01-04', 29, 11, 35),
(4, '2018-01-04', 33, 11, 35),
(5, '2018-01-04', 12, 12, 36),
(6, '2018-01-04', 13, 12, 36),
(7, '2018-01-04', 12, 13, 37),
(8, '2018-01-04', 13, 13, 37),
(9, '2018-01-04', 12, 14, 38),
(10, '2018-01-04', 13, 14, 38),
(11, '2018-01-04', 6, 15, 39),
(12, '2018-01-04', 2, 15, 39),
(13, '2018-01-04', 16, 15, 39),
(14, '2018-01-04', 12, 16, 40),
(15, '2018-01-04', 5, 16, 40),
(16, '2018-01-04', 8, 16, 40),
(17, '2018-01-04', 3, 17, 41),
(18, '2018-01-04', 13, 17, 41),
(19, '2018-01-04', 9, 17, 41),
(20, '2018-01-04', 8, 17, 41),
(21, '2018-01-04', 12, 17, 41),
(22, '2018-01-04', 12, 18, 42),
(23, '2018-01-04', 5, 18, 42),
(24, '2018-01-04', 7, 18, 42),
(25, '2018-01-04', 12, 19, 43),
(26, '2018-01-04', 5, 19, 43),
(27, '2018-01-04', 7, 19, 43),
(28, '2018-01-04', 32, 19, 43),
(29, '2018-01-04', 28, 19, 43),
(30, '2018-01-04', 24, 19, 43),
(31, '2018-01-04', 13, 19, 43),
(32, '2018-01-04', 17, 19, 43),
(33, '2018-01-04', 21, 19, 43),
(34, '2018-01-04', 18, 20, 44),
(35, '2018-01-04', 14, 20, 44),
(36, '2018-01-04', 5, 20, 44),
(37, '2018-01-04', 13, 21, 45),
(38, '2018-01-04', 9, 21, 45),
(39, '2018-01-09', 15, 22, 47),
(40, '2018-01-09', 19, 22, 47),
(41, '2018-01-12', 13, 23, 48),
(42, '2018-01-12', 9, 23, 48),
(43, '2018-01-12', 3, 23, 48),
(44, '2018-01-12', 12, 23, 48),
(45, '2018-01-12', 8, 23, 48),
(46, '2018-01-12', 5, 23, 48),
(47, '2018-01-12', 13, 24, 49),
(48, '2018-01-12', 9, 24, 49),
(49, '2018-01-12', 3, 24, 49),
(50, '2018-01-12', 12, 25, 50),
(51, '2018-01-12', 8, 25, 50),
(52, '2018-01-12', 12, 26, 51),
(53, '2018-01-12', 8, 26, 51),
(54, '2018-01-12', 9, 27, 52),
(55, '2018-01-12', 13, 27, 52),
(56, '2018-01-12', 14, 28, 53),
(57, '2018-01-12', 18, 28, 53),
(58, '2018-01-12', 5, 29, 54),
(59, '2018-01-12', 14, 29, 54),
(60, '2018-01-12', 5, 30, 55),
(61, '2018-01-12', 14, 30, 55),
(62, '2018-01-12', 12, 31, 56),
(63, '2018-01-12', 8, 31, 56),
(64, '2018-01-12', 5, 31, 56),
(65, '2018-01-12', 5, 32, 57),
(66, '2018-01-12', 8, 32, 57),
(67, '2018-01-12', 13, 33, 58),
(68, '2018-01-12', 12, 34, 59),
(69, '2018-01-12', 8, 34, 59),
(70, '2018-01-12', 5, 34, 59),
(71, '2018-01-12', 1, 35, 60),
(72, '2018-01-12', 13, 36, 61),
(73, '2018-01-12', 9, 36, 61),
(74, '2018-01-12', 13, 37, 62),
(75, '2018-01-12', 9, 37, 62),
(76, '2018-01-12', 25, 38, 63),
(77, '2018-01-12', 29, 38, 63),
(78, '2018-01-12', 25, 39, 64),
(79, '2018-01-12', 29, 39, 64),
(80, '2018-01-12', 25, 40, 65),
(81, '2018-01-12', 29, 40, 65),
(82, '2018-01-12', 14, 41, 66),
(83, '2018-01-12', 5, 41, 66),
(84, '2018-01-12', 11, 41, 66),
(85, '2018-01-12', 7, 41, 66),
(86, '2018-01-19', 13, 42, 67),
(87, '2018-01-19', 9, 42, 67),
(88, '2018-01-19', 12, 42, 67),
(89, '2018-01-19', 7, 42, 67),
(90, '2018-01-19', 4, 42, 67),
(91, '2018-01-19', 16, 42, 67),
(92, '2018-01-19', 13, 43, 68),
(93, '2018-01-19', 9, 43, 68),
(94, '2018-01-19', 12, 43, 68),
(95, '2018-01-19', 7, 43, 68),
(96, '2018-01-19', 4, 43, 68),
(97, '2018-01-19', 16, 43, 68),
(98, '2018-01-19', 13, 44, 69),
(99, '2018-01-19', 9, 44, 69),
(100, '2018-01-19', 12, 44, 69),
(101, '2018-01-19', 7, 44, 69),
(102, '2018-01-19', 4, 44, 69),
(103, '2018-01-19', 16, 44, 69),
(104, '2018-01-26', 9, 45, 70),
(105, '2018-01-26', 5, 45, 70),
(106, '2018-01-26', 9, 46, 71),
(107, '2018-01-26', 5, 46, 71),
(108, '2018-01-26', 9, 47, 72),
(109, '2018-01-26', 5, 47, 72),
(110, '2018-01-26', 3, 49, 74),
(111, '2018-01-26', 6, 49, 74);

-- --------------------------------------------------------

--
-- Structure de la table `purchase_order`
--

DROP TABLE IF EXISTS `purchase_order`;
CREATE TABLE IF NOT EXISTS `purchase_order` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `total_amount` double DEFAULT NULL,
  `quotation_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK264mq9l1u99cn67a1dypssv6d` (`quotation_id`)
) ENGINE=MyISAM AUTO_INCREMENT=77 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `purchase_order`
--

INSERT INTO `purchase_order` (`id`, `date`, `total_amount`, `quotation_id`) VALUES
(30, '2018-01-02', NULL, 98),
(29, '2018-01-02', NULL, 97),
(31, '2018-01-04', NULL, 99),
(32, '2018-01-04', NULL, 100),
(33, '2018-01-04', NULL, 101),
(34, '2018-01-04', NULL, 102),
(35, '2018-01-04', NULL, 103),
(36, '2018-01-04', NULL, 104),
(37, '2018-01-04', NULL, 105),
(38, '2018-01-04', NULL, 106),
(39, '2018-01-04', NULL, 107),
(40, '2018-01-04', NULL, 108),
(41, '2018-01-04', 12500, 109),
(42, '2018-01-04', 8000, 110),
(43, '2018-01-04', 19500, 111),
(44, '2018-01-04', 7500, 112),
(45, '2018-01-04', 4500, 113),
(46, '2018-01-09', NULL, NULL),
(47, '2018-01-09', 4000, 153),
(48, '2018-01-12', 16000, 154),
(49, '2018-01-12', 8000, 155),
(50, '2018-01-12', 4500, 156),
(51, '2018-01-12', 4500, 157),
(52, '2018-01-12', 4500, 158),
(53, '2018-01-12', 4000, 159),
(54, '2018-01-12', 6000, 160),
(55, '2018-01-12', 6000, 161),
(56, '2018-01-12', 8000, 162),
(57, '2018-01-12', 5500, 163),
(58, '2018-01-12', 2500, 164),
(59, '2018-01-12', 8000, 165),
(60, '2018-01-12', 500, 166),
(61, '2018-01-12', 4500, 167),
(62, '2018-01-12', 4500, 168),
(63, '2018-01-12', 1500, 170),
(64, '2018-01-12', 1500, 171),
(65, '2018-01-12', 1500, 172),
(66, '2018-01-12', 10000, 173),
(67, '2018-01-19', 14000, 174),
(68, '2018-01-19', 14000, 175),
(69, '2018-01-19', 14000, 176),
(70, '2018-01-26', NULL, 180),
(71, '2018-01-26', NULL, 181),
(72, '2018-01-26', NULL, 182),
(73, '2018-01-26', NULL, 183),
(74, '2018-01-26', NULL, 184),
(75, '2018-01-27', NULL, 185),
(76, '2018-01-28', NULL, 196);

-- --------------------------------------------------------

--
-- Structure de la table `quotation`
--

DROP TABLE IF EXISTS `quotation`;
CREATE TABLE IF NOT EXISTS `quotation` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  `approval_type_id` bigint(20) DEFAULT NULL,
  `data_sheet_url` varchar(255) DEFAULT NULL,
  `has_encryption_feature` bit(1) DEFAULT NULL,
  `equipment_nature_id` bigint(20) DEFAULT NULL,
  `equipment_type_id` bigint(20) DEFAULT NULL,
  `total_amount` double DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_el2ivjtfn6ltss2o5fera7myl` (`number`),
  KEY `FK57xvoem5kp6fmif9ikxecmoph` (`approval_type_id`),
  KEY `FKm12t84492qkl4qmu1hri07xcc` (`equipment_nature_id`),
  KEY `FK39osx05dq5a2wv61nacu2eidg` (`equipment_type_id`)
) ENGINE=MyISAM AUTO_INCREMENT=197 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `quotation`
--

INSERT INTO `quotation` (`id`, `date`, `status`, `approval_type_id`, `data_sheet_url`, `has_encryption_feature`, `equipment_nature_id`, `equipment_type_id`, `total_amount`, `reference`, `number`) VALUES
(195, '2018-01-28 00:00:00', b'0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'QUOT18022816'),
(196, '2018-01-28 00:00:00', b'1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'QUOT18022817'),
(194, '2018-01-28 00:00:00', b'0', 1, NULL, b'0', NULL, 9, NULL, NULL, 'QUOT18022815'),
(193, '2018-01-28 00:00:00', b'0', NULL, 'src\\main\\resources\\static\\upload-dir\\201828154622433.pdf', NULL, NULL, NULL, NULL, NULL, 'QUOT18022814'),
(192, '2018-01-28 00:00:00', b'0', 1, NULL, b'1', NULL, 9, NULL, NULL, 'QUOT18022813'),
(191, '2018-01-28 00:00:00', b'1', 3, NULL, b'0', 1, 9, NULL, NULL, 'QUOT18022812');

-- --------------------------------------------------------

--
-- Structure de la table `quotation_categories`
--

DROP TABLE IF EXISTS `quotation_categories`;
CREATE TABLE IF NOT EXISTS `quotation_categories` (
  `quotation_id` bigint(20) NOT NULL,
  `categories_id` bigint(20) NOT NULL,
  KEY `FK25dem6sneck3x7x9xcfvpbdji` (`categories_id`),
  KEY `FKjw9eegdvrexxedyxj0t6263vf` (`quotation_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `quotation_categories`
--

INSERT INTO `quotation_categories` (`quotation_id`, `categories_id`) VALUES
(1, 1),
(1, 4),
(2, 1),
(4, 1),
(5, 13),
(6, 2),
(6, 1),
(7, 2),
(7, 1),
(8, 2),
(8, 1),
(8, 3),
(8, 8),
(8, 7),
(8, 13),
(8, 15),
(9, 1),
(10, 13),
(11, 13),
(12, 1),
(12, 13),
(13, 1),
(14, 1),
(15, 1),
(21, 2),
(21, 1),
(41, 2),
(77, 1),
(78, 2),
(78, 1),
(80, 1),
(80, 13),
(81, 1),
(81, 7),
(81, 13),
(82, 8),
(83, 2),
(83, 8),
(86, 28),
(88, 22),
(88, 23),
(88, 24),
(88, 26),
(88, 27),
(88, 28),
(91, 23),
(91, 27),
(92, 19),
(93, 16),
(94, 16),
(95, 16),
(96, 16),
(96, 27),
(96, 32),
(96, 35),
(97, 16),
(97, 27),
(97, 32),
(97, 35),
(98, 16),
(98, 27),
(98, 32),
(98, 35),
(99, 23),
(99, 27),
(100, 29),
(100, 30),
(100, 33),
(100, 34),
(100, 37),
(102, 24),
(102, 28),
(102, 44),
(102, 48),
(103, 24),
(103, 28),
(103, 44),
(103, 48),
(104, 27),
(104, 28),
(105, 27),
(105, 28),
(106, 27),
(106, 28),
(107, 17),
(107, 21),
(107, 31),
(108, 20),
(108, 23),
(108, 27),
(109, 18),
(109, 23),
(109, 24),
(109, 27),
(109, 28),
(110, 20),
(110, 22),
(110, 27),
(111, 20),
(111, 22),
(111, 27),
(111, 28),
(111, 32),
(111, 36),
(111, 39),
(111, 43),
(111, 47),
(112, 20),
(112, 29),
(112, 33),
(113, 24),
(113, 28),
(114, 20),
(114, 29),
(114, 33),
(115, 23),
(115, 27),
(116, 23),
(116, 27),
(116, 49),
(116, 81),
(117, 16),
(118, 16),
(119, 16),
(120, 18),
(121, 24),
(121, 28),
(122, 16),
(123, 16),
(124, 16),
(125, 18),
(125, 24),
(125, 28),
(126, 18),
(126, 24),
(126, 28),
(127, 16),
(128, 16),
(128, 24),
(128, 28),
(129, 16),
(129, 18),
(129, 24),
(129, 28),
(129, 47),
(130, 53),
(130, 77),
(131, 16),
(146, 24),
(146, 28),
(147, 24),
(147, 28),
(148, 24),
(148, 28),
(150, 80),
(150, 84),
(151, 18),
(151, 24),
(151, 28),
(152, 20),
(152, 23),
(152, 27),
(153, 30),
(153, 34),
(154, 18),
(154, 20),
(154, 23),
(154, 24),
(154, 27),
(154, 28),
(155, 18),
(155, 24),
(155, 28),
(156, 23),
(156, 27),
(157, 23),
(157, 27),
(158, 24),
(158, 28),
(159, 29),
(159, 33),
(160, 20),
(160, 29),
(161, 20),
(161, 29),
(162, 20),
(162, 23),
(162, 27),
(163, 20),
(163, 23),
(164, 28),
(165, 20),
(165, 23),
(165, 27),
(166, 45),
(167, 24),
(167, 28),
(168, 24),
(168, 28),
(169, 40),
(169, 47),
(170, 40),
(170, 47),
(171, 40),
(171, 47),
(172, 40),
(172, 47),
(173, 20),
(173, 22),
(173, 26),
(173, 29),
(174, 19),
(174, 22),
(174, 24),
(174, 27),
(174, 28),
(174, 31),
(175, 19),
(175, 22),
(175, 24),
(175, 27),
(175, 28),
(175, 31),
(176, 19),
(176, 22),
(176, 24),
(176, 27),
(176, 28),
(176, 31);

-- --------------------------------------------------------

--
-- Structure de la table `quotation_equipment_technologie`
--

DROP TABLE IF EXISTS `quotation_equipment_technologie`;
CREATE TABLE IF NOT EXISTS `quotation_equipment_technologie` (
  `quotation_id` bigint(20) NOT NULL,
  `equipment_technologie_id` bigint(20) NOT NULL,
  KEY `FKggfptjbsir3mf18w3p1sgvo59` (`equipment_technologie_id`),
  KEY `FKkk6u2v44u17np7s2wpusqbpwb` (`quotation_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `quotation_equipment_technologie`
--

INSERT INTO `quotation_equipment_technologie` (`quotation_id`, `equipment_technologie_id`) VALUES
(88, 46),
(88, 42),
(88, 49),
(88, 45),
(88, 31),
(88, 50),
(89, 6),
(90, 45),
(90, 31),
(90, 50),
(91, 46),
(92, 46),
(96, 49),
(97, 49),
(98, 49),
(99, 46),
(99, 42),
(100, 46),
(100, 42),
(100, 50),
(100, 31),
(102, 46),
(102, 42),
(102, 49),
(102, 53),
(103, 46),
(103, 42),
(103, 49),
(103, 53),
(104, 53),
(104, 54),
(104, 55),
(105, 53),
(105, 54),
(105, 55),
(106, 53),
(106, 54),
(106, 55),
(107, 2),
(107, 6),
(108, 1),
(108, 5),
(108, 9),
(109, 31),
(109, 50),
(109, 54),
(110, 2),
(110, 10),
(110, 22),
(111, 2),
(111, 10),
(111, 22),
(112, 46),
(112, 42),
(112, 53),
(112, 49),
(113, 1),
(113, 5),
(114, 1),
(114, 5),
(114, 9),
(114, 10),
(114, 14),
(115, 2),
(115, 3),
(115, 7),
(115, 18),
(115, 14),
(116, 62),
(116, 58),
(116, 54),
(120, 46),
(121, 57),
(125, 1),
(125, 5),
(125, 9),
(126, 49),
(126, 42),
(128, 9),
(128, 13),
(128, 17),
(128, 14),
(128, 10),
(129, 1),
(129, 5),
(130, 1),
(130, 5),
(146, 1),
(146, 5),
(147, 1),
(147, 5),
(148, 1),
(148, 5),
(151, 1),
(151, 5),
(151, 9),
(152, 42),
(152, 46),
(152, 49),
(152, 45),
(152, 31),
(152, 50),
(153, 1),
(154, 1),
(154, 5),
(154, 2),
(154, 6),
(155, 1),
(155, 5),
(156, 2),
(156, 6),
(157, 1),
(157, 5),
(157, 9),
(158, 1),
(158, 5),
(158, 9),
(159, 1),
(159, 5),
(159, 2),
(159, 6),
(160, 2),
(160, 6),
(160, 10),
(161, 2),
(161, 6),
(161, 10),
(162, 2),
(162, 6),
(162, 10),
(163, 1),
(163, 5),
(163, 10),
(163, 6),
(164, 1),
(164, 2),
(164, 6),
(165, 2),
(165, 6),
(165, 3),
(165, 4),
(165, 8),
(167, 1),
(167, 5),
(167, 9),
(168, 1),
(168, 5),
(168, 9),
(169, 2),
(169, 6),
(170, 2),
(170, 6),
(171, 2),
(171, 6),
(172, 2),
(172, 6),
(173, 23),
(173, 19),
(174, 46),
(174, 42),
(174, 56),
(175, 46),
(175, 42),
(175, 56),
(176, 46),
(176, 42),
(176, 56),
(178, 46),
(178, 45),
(178, 31),
(178, 42),
(178, 47),
(179, 46),
(179, 59),
(179, 52),
(179, 48),
(180, 11),
(181, 11),
(182, 11),
(184, 14),
(184, 18),
(191, 45),
(191, 31);

-- --------------------------------------------------------

--
-- Structure de la table `quotation_frequencies`
--

DROP TABLE IF EXISTS `quotation_frequencies`;
CREATE TABLE IF NOT EXISTS `quotation_frequencies` (
  `quotation_id` bigint(20) NOT NULL,
  `frequencies_id` bigint(20) NOT NULL,
  KEY `FKqa3s8xi45u2s0xbhqjontbr6w` (`frequencies_id`),
  KEY `FKisors9y1emlcc14fxu128dftw` (`quotation_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `quotation_frequencies`
--

INSERT INTO `quotation_frequencies` (`quotation_id`, `frequencies_id`) VALUES
(1, 1),
(1, 2),
(4, 8),
(5, 7),
(6, 1),
(6, 8),
(7, 1),
(7, 8),
(8, 8),
(12, 8),
(14, 4),
(15, 4),
(21, 4),
(77, 8),
(78, 8),
(80, 8),
(81, 8),
(82, 8),
(82, 2),
(83, 8),
(83, 2),
(86, 2),
(88, 8),
(88, 7),
(90, 2),
(91, 1),
(91, 7),
(92, 1),
(92, 7),
(96, 7),
(97, 7),
(98, 7),
(99, 1),
(99, 7),
(100, 8),
(100, 7),
(102, 1),
(102, 7),
(103, 1),
(103, 7),
(104, 1),
(104, 7),
(105, 1),
(105, 7),
(106, 1),
(106, 7),
(109, 1),
(109, 2),
(109, 8),
(112, 1),
(112, 7),
(116, 2),
(116, 8),
(120, 2),
(121, 1),
(121, 7),
(121, 8),
(121, 2),
(126, 1),
(126, 7),
(126, 8),
(126, 2),
(152, 1),
(152, 7),
(174, 1),
(174, 7),
(174, 2),
(174, 8),
(175, 1),
(175, 7),
(175, 2),
(175, 8),
(176, 1),
(176, 7),
(176, 2),
(176, 8),
(178, 1),
(178, 2),
(178, 3),
(178, 4),
(179, 1),
(179, 2),
(179, 8),
(191, 2);

-- --------------------------------------------------------

--
-- Structure de la table `record_counter`
--

DROP TABLE IF EXISTS `record_counter`;
CREATE TABLE IF NOT EXISTS `record_counter` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `current_month` varchar(255) DEFAULT NULL,
  `current_year` varchar(255) DEFAULT NULL,
  `quotation_counter` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `record_counter`
--

INSERT INTO `record_counter` (`id`, `current_month`, `current_year`, `quotation_counter`) VALUES
(1, '02', NULL, 17);

-- --------------------------------------------------------

--
-- Structure de la table `requirements`
--

DROP TABLE IF EXISTS `requirements`;
CREATE TABLE IF NOT EXISTS `requirements` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `requirements`
--

INSERT INTO `requirements` (`id`, `name`) VALUES
(1, 'Loa'),
(2, 'Doc');

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `role_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `activated` tinyint(1) DEFAULT '1',
  `description` varchar(255) DEFAULT NULL,
  `role_wording` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_type` varchar(31) NOT NULL,
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `actived` tinyint(1) DEFAULT '1',
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `is_confirm` tinyint(1) NOT NULL DEFAULT '0',
  `last_name` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`user_type`, `user_id`, `actived`, `email`, `first_name`, `is_confirm`, `last_name`, `mobile`, `password`, `username`) VALUES
('', 1, 1, 'at.cisse@consultit-now.com', 'CisseAbdoulaye Toumoutou', 1, 'Abdoulaye Toumoutou', '09514212', '882baf28143fb700b388a87ef561a6e5', 'abdel');

-- --------------------------------------------------------

--
-- Structure de la table `users_role`
--

DROP TABLE IF EXISTS `users_role`;
CREATE TABLE IF NOT EXISTS `users_role` (
  `authorized` bit(1) NOT NULL,
  `users_user_id` bigint(20) NOT NULL,
  `role_role_id` bigint(20) NOT NULL,
  PRIMARY KEY (`role_role_id`,`users_user_id`),
  KEY `FKf9glr0ygo1efad4byt5nt7149` (`users_user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
