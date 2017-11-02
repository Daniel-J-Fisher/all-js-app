# all-js-app
An example of a full-stack JavaScript application


Make sure the [install mongodb](https://docs.mongodb.com/getting-started/shell/tutorial/install-mongodb-on-ubuntu/) on your system


Below is the code I used on my own system to manually install mongodb binaries
```
sudo apt-get purge mongodb-org*
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
sudo apt-get update
sudo apt-get install mongodb
sudo apt-get install -y mongodb-org
```
Then mongo should be started with
```
mongod
```
This should really be run as a service, but on my box I was not able to get that to work out.
