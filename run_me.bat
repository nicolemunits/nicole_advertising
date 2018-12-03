md ..\data\db
start mongod.exe --dbpath ..\data\db
timeout /t 1
start mongo.exe MyDatabase --eval "db.dropDatabase()"
timeout /t 1
start node db/mongodb.js
timeout /t 2
start node server/server.js
timeout /t 3
start chrome.exe --allow-file-access-from-files \localhost:8080
pause