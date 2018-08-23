# about 
Jump Into the Fire ETL (jifetl)
automated [https://en.wikipedia.org/wiki/Extract,_transform,_load](ETL)

# requirements
- docker
- node 8+ 

1. install dependencies
```bash
cd <PROJECT_ROOT>
npm install
```

2. create the network
```bash
docker network create jifetl
```

3. create a configuration file
```bash
cp jifetcl_example.json jifetl.json
```

4. initialized the database
```bash
tar -xzvf data.tgz
docker exec -it dbnode initdb.sh
```

# notes
kill all containers
```bash
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```
Delete all images
```bash
docker rmi $(docker images -q)
```
