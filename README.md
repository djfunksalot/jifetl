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

2. start the containers
```bash
./jifetl.js rebuild
```

3. initialized the database
```bash
tar -xzvf data.tgz
docker exec -it dbnode initdb.sh
```
