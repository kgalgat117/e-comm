#!/bin/bash
git add .
git commit -m "$1"
git push -u origin master

expect "Username for 'https://github.com':"
send "$2"

expect "Password for 'https://$2@github.com':"
send "$3"