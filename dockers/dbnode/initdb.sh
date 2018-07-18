#!/usr/bin/env bash
cp $PROJECT_ROOT/data/csv/*.csv /var/lib/mysql-files/
for file in $PROJECT_ROOT/data/sql/autorun/*.sql; do
    echo "Executing $file"
    mysql -uroot -p$MYSQL_ROOT_PASSWORD $MYSQL_DATABASE < $file
done
