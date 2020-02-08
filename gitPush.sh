
#!/bin/bash
git add .
git commit -m "some more"
git push -u origin master

expect "username:"
send "$2"

expect "password:"
send "$3"