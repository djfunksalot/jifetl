# about 
Jump Into the Fire ETL (jifetl)
automated [https://en.wikipedia.org/wiki/Extract,_transform,_load](ETL)

# requirements
- docker
- node 8+

1. start the containers
```bash
./jifetl.js rebuild
```

2. initialized the database
```bash
tar -xzvf data.tgz
docker exec -it dbnode initdb.sh
```
