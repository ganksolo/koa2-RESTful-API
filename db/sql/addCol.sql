ALTER TABLE `user` ADD COLUMN `mobile` 
Int (11) DEFAULT NULL COMMENT '手机号' AFTER `password`;