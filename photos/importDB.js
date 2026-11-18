/*
 * EXPORT database process
 * npm i -g pouchdb-dump-cli
 * pouchdb-dump https://7390b9d1-8ba0-4f7b-a302-f2a191635822-bluemix.cloudant.com/galleries > db.txt
 * upload the db.txt file to a s3 bucket
 */
const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-load'));
const URL = 'https://YOUR_ID:YOUR_PASSWORD@YOUR_COUCHDB_HOST/existing_database_name'
const db = new PouchDB(URL);
db.load('https://s3-us-west-2.amazonaws.com/your_bucket/db.txt').then(console.log).catch(console.warn);
