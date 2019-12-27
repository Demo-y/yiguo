/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80012
 Source Host           : localhost:3306
 Source Schema         : yiguo

 Target Server Type    : MySQL
 Target Server Version : 80012
 File Encoding         : 65001

 Date: 23/10/2019 15:55:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for myyiguo
-- ----------------------------
DROP TABLE IF EXISTS `myyiguo`;
CREATE TABLE `myyiguo`  (
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of myyiguo
-- ----------------------------
INSERT INTO `myyiguo` VALUES ('15123129768', '111111');
INSERT INTO `myyiguo` VALUES ('13723129030', '666666');
INSERT INTO `myyiguo` VALUES ('13419966039', '999999');
INSERT INTO `myyiguo` VALUES ('13213769768', 'abcdefg');
INSERT INTO `myyiguo` VALUES ('15083473369', '123456');

SET FOREIGN_KEY_CHECKS = 1;
