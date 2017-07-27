const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const low = require('lowdb');

const storage = require('lowdb/lib/storages/file-async');

const server = jsonServer.create();

server.use(jsonServer.defaults());

server.use(bodyParser.json());

const dbfile = process.env.prod === '1' ? 'db.json' : '_db.json';

const db = low(dbfile, {
  storage
});

const router = jsonServer.router(dbfile);

server.use('/api', router);

server.listen(9000, () => {
  console.log('Server running at port 9000.');
})