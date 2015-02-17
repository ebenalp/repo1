-- Valentina Studio --
-- MySQL dump --
-- ---------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- ---------------------------------------------------------


-- CREATE TABLE "surveytemplate" ---------------------------
CREATE TABLE `surveytemplate` ( 
	`id` Int( 255 ) AUTO_INCREMENT NOT NULL, 
	`question` VarChar( 255 ) CHARACTER SET latin2 COLLATE latin2_general_ci NOT NULL, 
	`sortorder` Int( 255 ) NOT NULL,
	 PRIMARY KEY ( `id` )
 )
CHARACTER SET = latin2
COLLATE = latin2_general_ci
ENGINE = MyISAM
AUTO_INCREMENT = 11;
-- ---------------------------------------------------------


-- Dump data of "surveytemplate" ---------------------------
INSERT INTO `surveytemplate`(`id`,`question`,`sortorder`) VALUES ( '1', 'So wie das Coaching heute verlief, hat es mich nicht befriedigt', '1' );
INSERT INTO `surveytemplate`(`id`,`question`,`sortorder`) VALUES ( '2', 'Heute fühlte ich mich bei Coach gut aufgehoben.                                                  ', '2' );
INSERT INTO `surveytemplate`(`id`,`question`,`sortorder`) VALUES ( '3', 'Nach der heutigen Stunde zweifle ich daran, meine alten Gleise jemalsverlassen  zu können.                         ', '3' );
INSERT INTO `surveytemplate`(`id`,`question`,`sortorder`) VALUES ( '4', 'Mit der Art, wie mein Coach mit mir heute umging, kam ich gut zurecht.                                   ', '4' );
INSERT INTO `surveytemplate`(`id`,`question`,`sortorder`) VALUES ( '5', 'Durch das heutige Gespräch bin ich innerlich irgendwie ruhiger geworden', '5' );
INSERT INTO `surveytemplate`(`id`,`question`,`sortorder`) VALUES ( '6', 'Die Art, wie sich mein Coach heute mir gegenüber verhielt, war für mich hilfreich und nützlich', '6' );
INSERT INTO `surveytemplate`(`id`,`question`,`sortorder`) VALUES ( '7', 'Das heutige Gespräch hat mich körperlich ziemlich erschöpft', '7' );
INSERT INTO `surveytemplate`(`id`,`question`,`sortorder`) VALUES ( '8', 'Durch das heutige Coaching bin ich zu einer anderen Sicht meiner ProblemeGekommen', '8' );
INSERT INTO `surveytemplate`(`id`,`question`,`sortorder`) VALUES ( '9', 'Es fiel mir heute leicht, mich selbst, meine Probleme und mein Erleben ins Auge zu fassen.                              ', '9' );
INSERT INTO `surveytemplate`(`id`,`question`,`sortorder`) VALUES ( '10', 'In diesem Coaching habe ich mehr innere Sicherheit gewonnen.', '10' );
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


