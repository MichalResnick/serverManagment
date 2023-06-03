-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2023 at 12:00 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `servermanagement`
--

-- --------------------------------------------------------

--
-- Table structure for table `servers`
--

CREATE TABLE `servers` (
  `serverId` int(11) NOT NULL,
  `serverName` varchar(30) NOT NULL,
  `serverIp` varchar(60) NOT NULL,
  `serverCompanyId` int(11) NOT NULL,
  `status` enum('online','offline') NOT NULL,
  `creationTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `servers`
--

INSERT INTO `servers` (`serverId`, `serverName`, `serverIp`, `serverCompanyId`, `status`, `creationTime`) VALUES
(1, 'FlyForLol', '54.38.211.25', 1, 'online', '2023-05-01 09:44:46'),
(2, 'FlyForPlay', '48.38.86.230', 1, 'online', '2023-04-03 09:44:46'),
(3, 'PlayForIsrael', '51.38.90.230', 2, 'offline', '2023-04-04 09:48:53'),
(4, 'FlyForFighter', '170.33.110.51', 2, 'online', '2022-11-06 09:49:44'),
(5, 'Heros Flyff', '178.35.110.51', 3, 'online', '2023-01-09 09:50:28'),
(6, 'FlyForKill', '146.60.185.6', 3, 'offline', '2022-12-11 21:03:43'),
(7, 'Insanity Flyff', '53.38.87.201', 4, 'online', '2022-12-19 13:04:34'),
(8, 'FLyfForYou', '51.38.95.201', 4, 'online', '2023-02-19 15:05:21');

-- --------------------------------------------------------

--
-- Table structure for table `serverscompany`
--

CREATE TABLE `serverscompany` (
  `serverCompanyId` int(11) NOT NULL,
  `serverCompanyName` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `serverscompany`
--

INSERT INTO `serverscompany` (`serverCompanyId`, `serverCompanyName`) VALUES
(1, 'Microsoft'),
(2, 'IBM'),
(3, 'GoDaddy'),
(4, 'DigitalIO');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `servers`
--
ALTER TABLE `servers`
  ADD PRIMARY KEY (`serverId`),
  ADD KEY `HostingCompany` (`serverCompanyId`);

--
-- Indexes for table `serverscompany`
--
ALTER TABLE `serverscompany`
  ADD PRIMARY KEY (`serverCompanyId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `servers`
--
ALTER TABLE `servers`
  MODIFY `serverId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `serverscompany`
--
ALTER TABLE `serverscompany`
  MODIFY `serverCompanyId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `servers`
--
ALTER TABLE `servers`
  ADD CONSTRAINT `servers_ibfk_1` FOREIGN KEY (`serverCompanyId`) REFERENCES `serverscompany` (`serverCompanyId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
