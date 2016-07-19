#!/bin/bash -e

BASEDIR=`dirname $0`/..

$BASEDIR/scripts/bin/setup.sh

source $BASEDIR/venv/bin/activate
cd $BASEDIR/task_list/
./manage.py runserver 9090
