const app = require("./app");
const to = require("./utils").to;
const db = app.db;
const globals = require('./config/globals');

const port = globals.PORT || 5000;

async function runServer() {

  // Test connection to Database
  const [err, dbVersion] = await to(testDB());

  if (err) {
    console.error(`Could not connect to Database \n${err}`);
    return
  }

  console.log(`Connected to Database! Server Version: ${dbVersion}`);

  console.log(`Current environment: [ ${process.env.NODE_ENV} ]`);

  app.listen(port, () => {
    console.log(`Listening: http://localhost:${port}`);
  });
}

async function testDB() {
  const c = await db.connect(); // try to connect
  c.done(); // success, release connection
  return c.client.serverVersion; // return server version
}

runServer();