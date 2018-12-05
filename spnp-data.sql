-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 05, 2018 at 03:58 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `spnp`
--

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `createdBy` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`id`, `description`, `amount`, `type`, `createdBy`, `createdAt`) VALUES
(2, 'presupuesto prueba', 100, 'presupuesto', 2, '2018-12-05 15:55:14');

-- --------------------------------------------------------

--
-- Table structure for table `request_comp`
--

CREATE TABLE `request_comp` (
  `id` int(11) NOT NULL,
  `RequestID` int(11) NOT NULL,
  `area` varchar(10) NOT NULL,
  `entity` varchar(10) NOT NULL,
  `program` varchar(10) NOT NULL,
  `subprogram` varchar(10) NOT NULL,
  `activity` varchar(10) NOT NULL,
  `source` varchar(10) NOT NULL,
  `expenses` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `request_comp`
--

INSERT INTO `request_comp` (`id`, `RequestID`, `area`, `entity`, `program`, `subprogram`, `activity`, `source`, `expenses`) VALUES
(1, 2, '1', '002', '0.0.1.003', '0.0.1.003', '0.0.1.003', '0.0.1.003', '0.0.1.003');

-- --------------------------------------------------------

--
-- Table structure for table `request_logs`
--

CREATE TABLE `request_logs` (
  `id` int(11) NOT NULL,
  `RequestID` int(11) NOT NULL,
  `amount` float NOT NULL,
  `changeBy` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `request_logs`
--

INSERT INTO `request_logs` (`id`, `RequestID`, `amount`, `changeBy`, `createdAt`) VALUES
(1, 2, 200, 3, '2018-12-05 15:57:59');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(25) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `type` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `createdAt`, `type`) VALUES
(1, 'admin', 'admin@admin.com', 'admin', '2018-12-05 10:51:46', 'admin'),
(2, 'entity', 'entity@entity.com', 'entity', '2018-12-05 10:53:07', 'entity'),
(3, 'analyst', 'analyst@analyst.com', 'analyst', '2018-12-05 10:53:07', 'analyst');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`id`),
  ADD KEY `request_user` (`createdBy`);

--
-- Indexes for table `request_comp`
--
ALTER TABLE `request_comp`
  ADD PRIMARY KEY (`id`),
  ADD KEY `request_comp` (`RequestID`);

--
-- Indexes for table `request_logs`
--
ALTER TABLE `request_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `request_logs` (`RequestID`),
  ADD KEY `logs_user` (`changeBy`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `request_comp`
--
ALTER TABLE `request_comp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `request_logs`
--
ALTER TABLE `request_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `request`
--
ALTER TABLE `request`
  ADD CONSTRAINT `request_user` FOREIGN KEY (`createdBy`) REFERENCES `user` (`id`);

--
-- Constraints for table `request_comp`
--
ALTER TABLE `request_comp`
  ADD CONSTRAINT `request_comp` FOREIGN KEY (`RequestID`) REFERENCES `request` (`id`);

--
-- Constraints for table `request_logs`
--
ALTER TABLE `request_logs`
  ADD CONSTRAINT `logs_user` FOREIGN KEY (`changeBy`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `request_logs` FOREIGN KEY (`RequestID`) REFERENCES `request` (`id`);
