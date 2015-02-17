# ************************************************************
# Sequel Pro SQL dump
# Version 4135
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.5.34)
# Database: web87-coach
# Generation Time: 2014-08-20 18:17:00 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table contracts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `contracts`;

CREATE TABLE `contracts` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `valid_from` date NOT NULL,
  `valid_to` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin2;

LOCK TABLES `contracts` WRITE;
/*!40000 ALTER TABLE `contracts` DISABLE KEYS */;

INSERT INTO `contracts` (`id`, `Name`, `valid_from`, `valid_to`)
VALUES
	(1,'contract1','0000-00-00','0000-00-00');

/*!40000 ALTER TABLE `contracts` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table events
# ------------------------------------------------------------

DROP TABLE IF EXISTS `events`;

CREATE TABLE `events` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `eventtype` varchar(255) NOT NULL,
  `date` datetime DEFAULT NULL,
  `datecreated` datetime NOT NULL,
  `contractid` int(255) DEFAULT NULL,
  `url` varchar(255) NOT NULL,
  `usercreated` varchar(255) NOT NULL,
  `surveyind` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin2;

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;

INSERT INTO `events` (`id`, `title`, `description`, `eventtype`, `date`, `datecreated`, `contractid`, `url`, `usercreated`, `surveyind`)
VALUES
	(63,'asdfadf','\"','','0000-00-00 00:00:00','0000-00-00 00:00:00',1,'#newEventDialog?id=','','\"'),
	(62,'bbbbb','bbb','','0000-00-00 00:00:00','0000-00-00 00:00:00',1,'#newEventDialog?id=','','Y'),
	(61,'aaaaaaa','asdf','','2014-08-19 19:57:00','0000-00-00 00:00:00',1,'#newEventDialog?id=','','\"'),
	(60,'asfasdfasdfsdf','\"','','0000-00-00 00:00:00','0000-00-00 00:00:00',1,'#newEventDialog?id=','','Y'),
	(64,'bbbbb','bbbb','','0000-00-00 00:00:00','0000-00-00 00:00:00',1,'#newEventDialog?id=','','Y'),
	(65,'asdf','\"','','0000-00-00 00:00:00','0000-00-00 00:00:00',1,'#newEventDialog?id=','','\"'),
	(66,'asdfasdf','\"','','0000-00-00 00:00:00','0000-00-00 00:00:00',1,'#newEventDialog?id=','','Y'),
	(67,'asfasfd','\"','','0000-00-00 00:00:00','0000-00-00 00:00:00',1,'#newEventDialog?id=','','\"'),
	(68,'asdfasdf','asdfsdf','','0000-00-00 00:00:00','0000-00-00 00:00:00',1,'#newEventDialog?id=','','\"'),
	(69,'asfasdf','\"','','0000-00-00 00:00:00','0000-00-00 00:00:00',1,'#newEventDialog?id=','','\"');

/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table logtab
# ------------------------------------------------------------

DROP TABLE IF EXISTS `logtab`;

CREATE TABLE `logtab` (
  `text` varchar(2000) COLLATE latin1_german1_ci DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_german1_ci;

LOCK TABLES `logtab` WRITE;
/*!40000 ALTER TABLE `logtab` DISABLE KEYS */;

INSERT INTO `logtab` (`text`, `id`)
VALUES
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9600),
	('INSERT INTO events(title, id, contractid, description, url, date)  VALUES   (\"asfdasf\", 50, 1, \"asdf\", \"#newEventDialog?id=\", STR_TO_DATE( \"20.08.2014 15:59\",\"%d.%m.%Y  %H:%i\")) ',9601),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9602),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9603),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9604),
	('SELECT * FROM surveys WHERE 1=1  AND contractid = 1 AND eventid = 1',9605),
	('SELECT * FROM surveys WHERE 1=1  AND contractid = 1 AND eventid = 1',9606),
	('SELECT * FROM surveys WHERE 1=1  AND contractid = 1 AND eventid = 1',9607),
	('SELECT * FROM surveys WHERE 1=1  AND contractid = 1 AND eventid = 1',9608),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9609),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9610),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9611),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9612),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9613),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9614),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9615),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9616),
	('INSERT INTO events(title, id, contractid, description, url, date, surveyind)  VALUES   (\"test\", 51, 1, \"asdasdf\", \"#newEventDialog?id=\", STR_TO_DATE( \"27.08.2014 18:57\",\"%d.%m.%Y  %H:%i\"), \"on\") ',9617),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9618),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9619),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9620),
	('INSERT INTO events(title, id, contractid, description, url, date, surveyind)  VALUES   (\"afasfasdffsd\", 52, 1, \"\"\"\", \"#newEventDialog?id=\", STR_TO_DATE( \"29.08.2014 19:01\",\"%d.%m.%Y  %H:%i\"), \"Y\") ',9621),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9622),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9623),
	('INSERT INTO events(title, id, contractid, description, url, date, surveyind)  VALUES   (\"asdfasfasfd\", 53, 1, \"asdfaf\", \"#newEventDialog?id=\", STR_TO_DATE( \"30.08.2014 19:01\",\"%d.%m.%Y  %H:%i\"), \"Y\") ',9624),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9625),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9626),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9627),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9628),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9629),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9630),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9631),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9632),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9633),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9634),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9635),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9636),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9637),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9638),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9639),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9640),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9641),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9642),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9643),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9644),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9645),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9646),
	('INSERT INTO events(title, id, contractid, description, url, date, surveyind)  VALUES   (\"aaaa\", 54, 1, \"aaaaaaa\", \"#newEventDialog?id=\", STR_TO_DATE( \"20.08.2014 19:27\",\"%d.%m.%Y  %H:%i\"), \"Y\") ',9647),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9648),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9649),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9650),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9651),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9652),
	('INSERT INTO events(title, id, contractid, description, url, date, surveyind)  VALUES   (\"aaaa\", 55, 1, \"aaa\", \"#newEventDialog?id=\", STR_TO_DATE( \"20.08.2014 19:30\",\"%d.%m.%Y  %H:%i\"), \"\"\"\") ',9653),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9654),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9655),
	('INSERT INTO events(title, id, contractid, description, url, date, surveyind)  VALUES   (\"bbbb\", 56, 1, \"bbb\", \"#newEventDialog?id=\", STR_TO_DATE( \"30.08.2014 19:30\",\"%d.%m.%Y  %H:%i\"), \"\"\"\") ',9656),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9657),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9658),
	('INSERT INTO events(title, id, contractid, description, url, date, surveyind)  VALUES   (\"asdfasf\", 57, 1, \"\"\"\", \"#newEventDialog?id=\", STR_TO_DATE( \" \",\"%d.%m.%Y  %H:%i\"), \"\"\"\") ',9659),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9660),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9661),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9662),
	('INSERT INTO events(title, id, contractid, description, url, date, surveyind)  VALUES   (\"ttttt\", 58, 1, \"\"\"\", \"#newEventDialog?id=\", STR_TO_DATE( \" \",\"%d.%m.%Y  %H:%i\"), \"\"\"\") ',9663),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9664),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9665),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9666),
	('INSERT INTO events(title, id, contractid, description, url, date, surveyind)  VALUES   (\"zzzzz\", 59, 1, \"\"\"\", \"#newEventDialog?id=\", STR_TO_DATE( \" \",\"%d.%m.%Y  %H:%i\"), \"Y\") ',9667),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9668),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9669),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9670),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9671),
	('INSERT INTO events(title, id, contractid, description, url, date, surveyind)  VALUES   (\"asfasdfasdfsdf\", 60, 1, \"\"\"\", \"#newEventDialog?id=\", STR_TO_DATE( \" \",\"%d.%m.%Y  %H:%i\"), \"Y\") ',9672),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9673),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9674),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9675),
	('INSERT INTO events(title, id, contractid, description, url, date, surveyind)  VALUES   (\"aaaaaaa\", 61, 1, \"asdf\", \"#newEventDialog?id=\", STR_TO_DATE( \"19.08.2014 19:57\",\"%d.%m.%Y  %H:%i\"), \"\"\"\") ',9676),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9677),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9678),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9679),
	('INSERT INTO events(title, id, contractid, description, url, date, surveyind)  VALUES   (\"bbbbb\", 62, 1, \"bbb\", \"#newEventDialog?id=\", STR_TO_DATE( \" \",\"%d.%m.%Y  %H:%i\"), \"Y\") ',9680),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9681),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9682),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9683),
	('INSERT INTO events(title, id, contractid, description, url, date, surveyind)  VALUES   (\"asdfadf\", 63, 1, \"\"\"\", \"#newEventDialog?id=\", STR_TO_DATE( \" \",\"%d.%m.%Y  %H:%i\"), \"\"\"\") ',9684),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9685),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9686),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9687),
	('INSERT INTO events(title, id, contractid, description, url, date, surveyind)  VALUES   (\"bbbbb\", 64, 1, \"bbbb\", \"#newEventDialog?id=\", STR_TO_DATE( \" \",\"%d.%m.%Y  %H:%i\"), \"Y\") ',9688),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9689),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9690),
	('INSERT INTO events(title, id, contractid, description, url, date, surveyind)  VALUES   (\"asdf\", 65, 1, \"\"\"\", \"#newEventDialog?id=\", STR_TO_DATE( \" \",\"%d.%m.%Y  %H:%i\"), \"\"\"\") ',9691),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9692),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9693),
	('INSERT INTO events(title, id, contractid, description, url, date, surveyind)  VALUES   (\"asdfasdf\", 66, 1, \"\"\"\", \"#newEventDialog?id=\", STR_TO_DATE( \" \",\"%d.%m.%Y  %H:%i\"), \"Y\") ',9694),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9695),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9696),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9697),
	('INSERT INTO events(title, id, contractid, description, url, date, surveyind)  VALUES   (\"asfasfd\", 67, 1, \"\"\"\", \"#newEventDialog?id=\", STR_TO_DATE( \" \",\"%d.%m.%Y  %H:%i\"), \"\"\"\") ',9698),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9699),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9700),
	('INSERT INTO events(title, id, contractid, description, url, date, surveyind)  VALUES   (\"asdfasdf\", 68, 1, \"asdfsdf\", \"#newEventDialog?id=\", STR_TO_DATE( \" \",\"%d.%m.%Y  %H:%i\"), \"\"\"\") ',9701),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9702),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9703),
	('INSERT INTO events(title, id, contractid, description, url, date, surveyind)  VALUES   (\"asfasdf\", 69, 1, \"\"\"\", \"#newEventDialog?id=\", STR_TO_DATE( \" \",\"%d.%m.%Y  %H:%i\"), \"\"\"\") ',9704),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9705),
	('SELECT * FROM events WHERE 1=1  AND contractid = 1',9706),
	('SELECT * FROM surveys WHERE 1=1  AND contractid = 1 AND eventid = 1',9707);

/*!40000 ALTER TABLE `logtab` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table parties
# ------------------------------------------------------------

DROP TABLE IF EXISTS `parties`;

CREATE TABLE `parties` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `lastname` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `userid` varchar(255) NOT NULL,
  `contractid` int(255) NOT NULL,
  `type` varchar(1) NOT NULL,
  `role` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin2;



# Dump of table ratings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ratings`;

CREATE TABLE `ratings` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `subtargetid` int(255) NOT NULL,
  `rating` int(255) NOT NULL,
  `rating_date` date NOT NULL,
  `user` varchar(255) NOT NULL,
  `sortorder` int(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin2;



# Dump of table subtargets
# ------------------------------------------------------------

DROP TABLE IF EXISTS `subtargets`;

CREATE TABLE `subtargets` (
  `id` int(11) NOT NULL,
  `targetid` int(11) NOT NULL,
  `name` varchar(2000) NOT NULL,
  `description` text NOT NULL,
  `user` varchar(30) NOT NULL,
  `creation_date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table survey_save
# ------------------------------------------------------------

DROP TABLE IF EXISTS `survey_save`;

CREATE TABLE `survey_save` (
  `id` int(255) NOT NULL DEFAULT '0',
  `question` varchar(255) NOT NULL,
  `rating` int(255) NOT NULL DEFAULT '0',
  `contractid` int(255) NOT NULL,
  `sortorder` int(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin2;



# Dump of table surveys
# ------------------------------------------------------------

DROP TABLE IF EXISTS `surveys`;

CREATE TABLE `surveys` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `question` varchar(255) NOT NULL,
  `rating` int(255) NOT NULL DEFAULT '0',
  `contractid` int(255) NOT NULL,
  `sortorder` int(255) NOT NULL,
  `eventid` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin2;

LOCK TABLES `surveys` WRITE;
/*!40000 ALTER TABLE `surveys` DISABLE KEYS */;

INSERT INTO `surveys` (`id`, `question`, `rating`, `contractid`, `sortorder`, `eventid`)
VALUES
	(1,'So wie das Coaching heute verlief, hat es mich nicht befriedigt',5,1,1,50),
	(2,'Heute fühlte ich mich bei Coach gut aufgehoben.                                                  ',0,1,2,50),
	(3,'Nach der heutigen Stunde zweifle ich daran, meine alten Gleise jemalsverlassen  zu können.                         ',3,1,3,50),
	(4,'Mit der Art, wie mein Coach mit mir heute umging, kam ich gut zurecht.                                   ',0,1,4,50),
	(5,'Durch das heutige Gespräch bin ich innerlich irgendwie ruhiger geworden',0,1,5,50),
	(6,'Die Art, wie sich mein Coach heute mir gegenüber verhielt, war für mich hilfreich und nützlich',0,1,6,50),
	(7,'Das heutige Gespräch hat mich körperlich ziemlich erschöpft',0,1,7,50),
	(8,'Durch das heutige Coaching bin ich zu einer anderen Sicht meiner ProblemeGekommen',0,1,8,50),
	(9,'Es fiel mir heute leicht, mich selbst, meine Probleme und mein Erleben ins Auge zu fassen.                              ',0,1,9,50),
	(10,'In diesem Coaching habe ich mehr innere Sicherheit gewonnen.',0,1,10,50);

/*!40000 ALTER TABLE `surveys` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table surveytemplate
# ------------------------------------------------------------

DROP TABLE IF EXISTS `surveytemplate`;

CREATE TABLE `surveytemplate` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `question` varchar(255) NOT NULL,
  `sortorder` int(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin2;

LOCK TABLES `surveytemplate` WRITE;
/*!40000 ALTER TABLE `surveytemplate` DISABLE KEYS */;

INSERT INTO `surveytemplate` (`id`, `question`, `sortorder`)
VALUES
	(1,'So wie das Coaching heute verlief, hat es mich nicht befriedigt',1),
	(2,'Heute fühlte ich mich bei Coach gut aufgehoben.                                                  ',2),
	(3,'Nach der heutigen Stunde zweifle ich daran, meine alten Gleise jemalsverlassen  zu können.                         ',3),
	(4,'Mit der Art, wie mein Coach mit mir heute umging, kam ich gut zurecht.                                   ',4),
	(5,'Durch das heutige Gespräch bin ich innerlich irgendwie ruhiger geworden',5),
	(6,'Die Art, wie sich mein Coach heute mir gegenüber verhielt, war für mich hilfreich und nützlich',6),
	(7,'Das heutige Gespräch hat mich körperlich ziemlich erschöpft',7),
	(8,'Durch das heutige Coaching bin ich zu einer anderen Sicht meiner ProblemeGekommen',8),
	(9,'Es fiel mir heute leicht, mich selbst, meine Probleme und mein Erleben ins Auge zu fassen.                              ',9),
	(10,'In diesem Coaching habe ich mehr innere Sicherheit gewonnen.',10);

/*!40000 ALTER TABLE `surveytemplate` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table targets
# ------------------------------------------------------------

DROP TABLE IF EXISTS `targets`;

CREATE TABLE `targets` (
  `id` int(11) NOT NULL,
  `name` varchar(2000) NOT NULL,
  `description` text NOT NULL,
  `user` varchar(30) NOT NULL,
  `creation_date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
