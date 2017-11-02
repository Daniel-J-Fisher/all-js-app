# all-js-app
An example of a full-stack JavaScript application


Make sure the [install mongodb](https://docs.mongodb.com/getting-started/shell/tutorial/install-mongodb-on-ubuntu/) on your system


Below is the code I used on my own system to manually install mongodb binaries
```
cd ~/Downloads
curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.4.9.tgz
tar -zxvf mongodb-linux-x86_64-3.4.9.tgz
mkdir -p ~/Documents/programs/mongodb
cp -R -n mongodb-linux-x86_64-3.4.9/ ~/Documents/programs/mongodb
export PATH=/home/dfishe/Documents/programs/mongodb/mongodb-linux-x86_64-3.4.9/bin:$PATH
sudo mkdir -p /data/db
sudo chmod 777 /data/db
```
Then mongo should be started with
```
sudo service mongod start
```
