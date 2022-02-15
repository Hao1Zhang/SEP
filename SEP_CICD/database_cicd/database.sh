#!/bin/bash
cd /home/ubuntu/SEP/SEP2021_CONT6_proto_Database
git pull
mysql -u root -pSEP1314cont6 <<EOF
use SEP_Db;
source /home/ubuntu/SEP/SEP2021_CONT6_proto_Database/cico.sql;
EOF
exit;