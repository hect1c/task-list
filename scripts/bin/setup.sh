#!/bin/bash -e

BASEDIR=`dirname $0`/../..

if [ ! -d "$BASEDIR/venv" ]; then
    virtualenv $BASEDIR/venv
    echo "Virtualenv created."
fi

if [ ! -f "$BASEDIR/venv/updated" -o $BASEDIR/requirements.txt -nt $BASEDIR/venv/updated ]; then
    sudo pip install -r $BASEDIR/requirements.txt
    touch $BASEDIR/venv/updated
    echo "Requirements installed."
fi
