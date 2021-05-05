-- MySQL dump 10.13  Distrib 8.0.23, for Linux (x86_64)
--
-- Host: localhost    Database: chulodb
-- ------------------------------------------------------
-- Server version	8.0.23-3ubuntu1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `idcustomer` int NOT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idcustomer`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dish`
--

DROP TABLE IF EXISTS `dish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dish` (
  `iddish` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL,
  `origin` varchar(45) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`iddish`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dish`
--

LOCK TABLES `dish` WRITE;
/*!40000 ALTER TABLE `dish` DISABLE KEYS */;
INSERT INTO `dish` VALUES (1,'Chicken Sekuwa','7.60€','Nepal','Chicken Sekuwa.jpg'),(2,'Nepalese Chicken Noodle Soup','6.50€','Nepal','Nepali-Thukpa.jpg'),(3,'Thakali Food','9.30€','Nepal','Thakali-Khana_.jpg'),(4,'Yomari','5.70€','Nepal','yomari.jpeg'),(5,'Sel Roti','5.05€','Nepal','Sel Roti.jpg'),(6,'Kheer','6.20€','Nepal','Khir-.jpg'),(7,'Momo','5.70€','Nepal','momo(dumpling).jpg'),(8,'Dhindo Set','8.00€','Nepal','Dhido-set.jpg'),(9,'Choila','6.15€','Nepal','choila.jpeg'),(10,'Kwati','6.00€','Nepal','Kwati.jfif'),(11,'Nepali Bara','4.85€','Nepal','Nepali Bara.jpg'),(12,'Classic Nepali Taas','6.82€','Nepal','tass-set.png'),(13,'Salmon Soup','5.80€','Finland','valkoinen-kalakaitto.jpg'),(14,'Karelian Pies','6.00€','Finland','FinnishPies_binary_.png'),(15,'Spinach Soup','5.10€','Finland','pinaattikeitto-1.jpg'),(16,'Pyttipannu','6.20€','Finland','pyttipannu.jpg'),(17,'Sautéed Reindeer','7.40€','Finland','poronkaristys.jpg'),(18,'Pea Soup','5.30€','Finland','hernekeitto.jpg');
/*!40000 ALTER TABLE `dish` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `idorder` int NOT NULL AUTO_INCREMENT,
  `idcustomer` int DEFAULT NULL,
  `iddish` int DEFAULT NULL,
  `deliverytime` datetime DEFAULT CURRENT_TIMESTAMP,
  `itemamount` int DEFAULT NULL,
  `totalprice` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`idorder`),
  KEY `customer_order_idx` (`idcustomer`),
  KEY `order_dish_idx` (`iddish`),
  CONSTRAINT `order_dish` FOREIGN KEY (`iddish`) REFERENCES `dish` (`iddish`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (2,1,2,'2021-05-04 03:02:28',1,'6.50€'),(3,1,2,'2021-05-04 03:08:55',1,'75€'),(4,1,2,'2021-05-04 03:15:12',1,'6.5'),(5,1,2,'2021-05-04 03:15:18',1,'6.5'),(6,1,2,'2021-05-04 03:33:34',5,'32.5');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-04  4:05:39
