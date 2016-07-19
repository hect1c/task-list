#!/bin/bash

./node_modules/bower/bin/bower install
./node_modules/gulp/bin/gulp.js default

BASEDIR=`dirname $0`/..

chmod +x $BASEDIR/scripts/bin/setup.sh && $BASEDIR/scripts/bin/setup.sh

source $BASEDIR/venv/bin/activate
cd $BASEDIR/task_list/
./manage.py makemigrations task_list
./manage.py migrate

# source ./ven  v/bin/activate
# cd $BASEDIR/task_list/
# ./manage.py runserver 9090

#
# if [ ! -d "$BASEDIR/venv" ]; then
#     virtualenv -q $BASEDIR/venv --no-site-packages
#     echo "Virtualenv created."
# fi
#
# if [ ! -f "$BASEDIR/venv/updated" -o $BASEDIR/requirements.txt -nt $BASEDIR/venv/updated ]; then
#     pip install -r $BASEDIR/requirements.txt $BASEDIR/venv
#     touch $BASEDIR/venv/updated
#     echo "Requirements installed."
# fi
#
# source $BASEDIR/venv/bin/activate
#

#
