sudo service docker start

sudo chmod 777 /var/run/docker.sock

NOWDIR=`pwd`

echo ${NOWDIR}

docker run --name mongodb \
-d \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=root \
-e MONGO_INITDB_ROOT_PASSWORD=root \
-v $NOWDIR/data/mongo:/data/db \
mongo:4.0.20