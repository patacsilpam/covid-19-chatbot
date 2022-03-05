-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 04, 2022 at 02:43 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `covid19-bot`
--

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `questions` text NOT NULL,
  `reply` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `questions`, `reply`) VALUES
(1, 'hi|hello|hey|helo', 'Hello'),
(2, 'What is your name?', 'I am CovBot'),
(3, 'What to do if you are sick|What to do if you are sick?|I am sick|I have flu', 'Most people with flu have mild illness and do not need medical care or antiviral drugs. If you get sick with flu symptoms, in most cases, you should stay home and avoid contact with other people except to get medical care. If, however, you have symptoms of flu and are in a higher-risk group, or are very sick or worried about your illness, contact your health care provider (doctor, physician assistant, etc.).<a class=\"link\" href=\"https://www.cdc.gov/flu/treatment/takingcare.htm\" target=\"_blank\">Read More</a>'),
(4, 'What is Covid-19?', 'Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.</br>\r\nMost people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill and require medical attention.'),
(5, 'What are the symptoms?What are the symptoms|symptoms', 'COVID-19 affects different people in different ways. \r\nMost infected people will develop mild to moderate illness and recover without hospitalization.</br>\r\n<strong>Most common symptoms:</strong></br>\r\n- fever</br>\r\n- cough</br>\r\n- tiredness</br>\r\n- loss of taste or smell</br></br><strong>Less common symptoms:</strong></br>\r\n- sore throat</br>\r\n- headache</br>\r\n- aches and pains</br>\r\n- diarrhoea</br>\r\n- a rash on skin, or discolouration of fingers or toes\r\n- red or irritated eyes</br></br>                    \r\n<strong>Serious symptoms:</strong></br>\r\n- difficulty breathing or shortness of breath</br>\r\n- loss of speech or mobility, or confusion</br>\r\n- chest pain'),
(6, 'How it spreads?|How it spread|Spread', 'The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols.</br>\r\nYou can be infected by breathing in the virus if you are near someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth. The virus spreads more easily indoors and in crowded settings.'),
(7, 'Philippines Covid Cases|Philippines Covid Case|Philippines Covid 19 Cases|Philippines Covid-19 Cases', 'According to <a class =\"link\" target=\"_blank\" href=\"https://www.worldometers.info/\">Worldometer</a>, Philippines total cases of Covid 19 <strong class=\"strong-green\">3,663,059</strong>, Deaths <strong class=\"strong-gray\">56,451</strong>, Recovered<strong class=\"strong-dark-gray \"> \r\n 3,555,016</strong>');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
