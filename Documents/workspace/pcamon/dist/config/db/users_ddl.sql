-- Valentina Studio --
-- MySQL dump --
-- ---------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- ---------------------------------------------------------


-- CREATE TABLE "uf_configuration" -------------------------
CREATE TABLE `uf_configuration` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL, 
	`name` VarChar( 150 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, 
	`value` VarChar( 150 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	 PRIMARY KEY ( `id` )
 )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 14;
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


-- CREATE TABLE "uf_contractusers" -------------------------
CREATE TABLE `uf_contractusers` ( 
	`contractid` Int( 255 ) NOT NULL, 
	`token` VarChar( 255 ) CHARACTER SET latin1 COLLATE latin1_german1_ci NOT NULL, 
	`inuse` VarChar( 1 ) CHARACTER SET latin1 COLLATE latin1_german1_ci NOT NULL DEFAULT 'N', 
	`activation_token` VarChar( 255 ) CHARACTER SET latin1 COLLATE latin1_german1_ci NULL
 )
CHARACTER SET = latin1
COLLATE = latin1_german1_ci
ENGINE = InnoDB;
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


-- CREATE TABLE "uf_filelist" ------------------------------
CREATE TABLE `uf_filelist` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL, 
	`path` VarChar( 150 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
	 PRIMARY KEY ( `id` )
, 
	CONSTRAINT `path` UNIQUE( `path` ) )
CHARACTER SET = latin1
COLLATE = latin1_swedish_ci
ENGINE = InnoDB
AUTO_INCREMENT = 3;
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


-- CREATE TABLE "uf_group_action_permits" ------------------
CREATE TABLE `uf_group_action_permits` ( 
	`id` Int( 10 ) UNSIGNED AUTO_INCREMENT NOT NULL, 
	`group_id` Int( 11 ) NOT NULL, 
	`action` VarChar( 100 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, 
	`permits` VarChar( 400 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	 PRIMARY KEY ( `id` )
 )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 17;
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


-- CREATE TABLE "uf_group_page_matches" --------------------
CREATE TABLE `uf_group_page_matches` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL, 
	`group_id` Int( 11 ) NOT NULL, 
	`page_id` Int( 11 ) NOT NULL,
	 PRIMARY KEY ( `id` )
 )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 28;
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


-- CREATE TABLE "uf_groups" --------------------------------
CREATE TABLE `uf_groups` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL, 
	`name` VarChar( 150 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, 
	`is_default` TinyInt( 1 ) NOT NULL, 
	`can_delete` TinyInt( 1 ) NOT NULL, 
	`home_page_id` Int( 11 ) NOT NULL,
	 PRIMARY KEY ( `id` )
 )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 6;
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


-- CREATE TABLE "uf_nav" -----------------------------------
CREATE TABLE `uf_nav` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL, 
	`menu` VarChar( 75 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, 
	`page` VarChar( 175 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, 
	`name` VarChar( 150 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, 
	`position` Int( 11 ) NOT NULL, 
	`class_name` VarChar( 150 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, 
	`icon` VarChar( 150 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, 
	`parent_id` Int( 11 ) NOT NULL,
	 PRIMARY KEY ( `id` )
 )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 12;
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


-- CREATE TABLE "uf_nav_group_matches" ---------------------
CREATE TABLE `uf_nav_group_matches` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL, 
	`menu_id` Int( 11 ) NOT NULL, 
	`group_id` Int( 11 ) NOT NULL,
	 PRIMARY KEY ( `id` )
 )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 12;
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


-- CREATE TABLE "uf_pages" ---------------------------------
CREATE TABLE `uf_pages` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL, 
	`page` VarChar( 150 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, 
	`private` TinyInt( 1 ) NOT NULL DEFAULT '0',
	 PRIMARY KEY ( `id` )
 )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 18;
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


-- CREATE TABLE "uf_plugin_configuration" ------------------
CREATE TABLE `uf_plugin_configuration` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL, 
	`name` VarChar( 150 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, 
	`value` VarChar( 150 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, 
	`binary` Int( 1 ) NOT NULL, 
	`variable` VarChar( 150 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	 PRIMARY KEY ( `id` )
 )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 1;
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


-- CREATE TABLE "uf_user_action_permits" -------------------
CREATE TABLE `uf_user_action_permits` ( 
	`id` Int( 10 ) UNSIGNED AUTO_INCREMENT NOT NULL, 
	`user_id` Int( 11 ) NOT NULL, 
	`action` VarChar( 100 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, 
	`permits` VarChar( 400 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	 PRIMARY KEY ( `id` )
 )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 1;
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


-- CREATE TABLE "uf_user_group_matches" --------------------
CREATE TABLE `uf_user_group_matches` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL, 
	`user_id` Int( 11 ) NOT NULL, 
	`group_id` Int( 11 ) NOT NULL,
	 PRIMARY KEY ( `id` )
 )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 15;
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


-- CREATE TABLE "uf_users" ---------------------------------
CREATE TABLE `uf_users` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL, 
	`user_name` VarChar( 50 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, 
	`display_name` VarChar( 50 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, 
	`password` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, 
	`email` VarChar( 150 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, 
	`activation_token` VarChar( 225 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, 
	`last_activation_request` Int( 11 ) NOT NULL, 
	`lost_password_request` TinyInt( 1 ) NOT NULL, 
	`lost_password_timestamp` Int( 11 ) NULL, 
	`active` TinyInt( 1 ) NOT NULL, 
	`title` VarChar( 150 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, 
	`sign_up_stamp` Int( 11 ) NOT NULL, 
	`last_sign_in_stamp` Int( 11 ) NOT NULL, 
	`enabled` TinyInt( 1 ) NOT NULL DEFAULT '1' COMMENT 'Specifies if the account is enabled.  Disabled accounts cannot be logged in to, but they retain all of their data and settings.', 
	`primary_group_id` TinyInt( 1 ) NOT NULL DEFAULT '1' COMMENT 'Specifies the primary group for the user.',
	 PRIMARY KEY ( `id` )
 )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 8;
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


