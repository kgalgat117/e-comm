#!/bin/bash
git add .
git commit -m "some more"
git push -u origin master

expect "username:"
send "kgalgat117@gmail.com"

expect "password:"
send "<password>"