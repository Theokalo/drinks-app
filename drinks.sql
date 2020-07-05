-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2020 at 11:54 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `drinks`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `events_id` varchar(256) NOT NULL,
  `user_com_name` varchar(256) NOT NULL,
  `user_com_avatarUrl` varchar(256) NOT NULL,
  `comment` varchar(256) NOT NULL,
  `time` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `events_id`, `user_com_name`, `user_com_avatarUrl`, `comment`, `time`) VALUES
(78, '1', 'Phil Hardy', 'https://graph.facebook.com/10154445192311988/picture?type=normal', 'Looking forward to this!', '2017-06-20T15:21:21.000Z'),
(79, '1', 'Roger Planes', 'https://graph.facebook.com/10153470472875756/picture?type=normal', 'Not long to go now :)', '2017-06-23T18:53:45.000Z'),
(80, '1', 'Phil Hardy', 'https://graph.facebook.com/10154445192311988/picture?type=normal', 'Thanks for coming everyone', '2017-06-24T13:31:01.000Z'),
(81, '2', 'Phil Hardy', 'https://graph.facebook.com/10154445192311988/picture?type=normal', 'Can you send details about the dress code?', '2017-06-24T14:32:27.000Z'),
(82, '3', 'Roger Planes', 'https://graph.facebook.com/10153470472875756/picture?type=normal', 'Sorry, I can\'t make this one', '2017-06-20T17:31:17.000Z'),
(83, '4', 'Mark Hartley', 'https://graph.facebook.com/10207459310094409/picture?type=normal', 'I\'ll be there', '2017-06-18T18:34:12.000Z'),
(84, '4', 'Fie Jelved', 'https://graph.facebook.com/10153981598127950/picture?type=normal', 'Me too', '2017-06-18T18:40:52.000Z'),
(85, '5', 'Phil Hardy', 'https://graph.facebook.com/10154445192311988/picture?type=normal', 'What time will everyone arrive?', '2017-01-18T13:57:28.000Z'),
(86, '5', 'Roger Planes', 'https://graph.facebook.com/10153470472875756/picture?type=normal', 'I might be a little late', '2017-01-18T13:58:58.000Z'),
(87, '5', 'Mark Hartley', 'https://graph.facebook.com/10207459310094409/picture?type=normal', 'I should be there on time', '2017-01-18T14:02:12.000Z'),
(88, '5', 'Fie Jelved', 'https://graph.facebook.com/10153981598127950/picture?type=normal', 'I\'ll be there early', '2017-01-18T16:06:49.000Z'),
(91, '1', 'Theo', 'https://i.stack.imgur.com/l60Hf.png', 'Test Comment', '2020-07-04T14:08:52.903Z'),
(92, '_74t82ksxe', 'Test ', 'https://i.stack.imgur.com/l60Hf.png', 'Comment 2', '2020-07-04T14:09:39.372Z');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` varchar(256) NOT NULL,
  `creator_name` varchar(256) NOT NULL,
  `creator_avatarUrl` varchar(256) NOT NULL,
  `title` varchar(256) NOT NULL,
  `type` varchar(256) NOT NULL,
  `time` varchar(256) NOT NULL,
  `location` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `creator_name`, `creator_avatarUrl`, `title`, `type`, `time`, `location`) VALUES
('1', 'Phil Hardy', 'https://graph.facebook.com/10154445192311988/picture?type=normal', 'James Bond Summer Ball', 'COCKTAILS', '2017-06-23T20:00:00.000Z', 'Radisson Blu Hotel'),
('2', 'Mark Hartley', 'https://graph.facebook.com/10207459310094409/picture?type=normal', 'James Bond Winter Ball', 'COCKTAILS', '2017-12-23T20:00:00.000Z', 'Radisson Blu Hotel'),
('3', 'Mark Hartley', 'https://graph.facebook.com/10207459310094409/picture?type=normal', 'Silicon Drinkabout', 'BEERS', '2017-06-23T18:00:00.000Z', 'Duke of York'),
('4', 'Mark Hartley', 'https://graph.facebook.com/10207459310094409/picture?type=normal', 'Silicon Drinkabout', 'BEERS', '2017-07-28T18:00:00.000Z', 'Old Thameside Inn'),
('5', 'Roger Planes', 'https://graph.facebook.com/10153470472875756/picture?type=normal', 'Silicon Rhino Office Warming', 'BEERS', '2017-02-24T17:00:00.000Z', 'Silicon Rhino London'),
('6', 'Phil Hardy', 'https://graph.facebook.com/10154445192311988/picture?type=normal', 'Javascript Meetup', 'COFFEES', '2017-08-21T13:00:00.000Z', 'Pret A Manger, Elephant & Castle'),
('7', 'Mark Hartley', 'https://graph.facebook.com/10207459310094409/picture?type=normal', 'Outdoor Cinema', 'MILKSHAKES', '2017-08-19T16:30:00.000Z', 'Chiswick House & Gardens'),
('_74t82ksxe', 'Theodoros KALOGEROPOULOS', 'https://i.stack.imgur.com/l60Hf.png', 'testTitle', 'BEERS', '2020-07-30', 'Paris'),
('_4zn6gdeku', 'Theo Kalo', 'https://i.stack.imgur.com/l60Hf.png', 'Second Test', 'MILKSHAKES', '2020-08-08', 'Grèce');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
