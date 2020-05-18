CREATE TABLE   IF NOT EXISTS  `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `mobile` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL COMMENT '姓名',
  `nick` varchar(255) DEFAULT NULL COMMENT '昵称',
  `detail_info` json DEFAULT NULL COMMENT '详细信息',
  `create_time` varchar(20) DEFAULT NULL COMMENT '创建时间',
  `modified_time` varchar(20) DEFAULT NULL COMMENT '更新时间',
  `level` int(11) DEFAULT NULL COMMENT '权限',
  `role` varchar(20) DEFAULT NULL COMMENT '角色',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
