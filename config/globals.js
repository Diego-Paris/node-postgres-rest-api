const globals = {
  // --- NODE ENVIRONMENT --- //
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,

  // --- POSTGRESQL  VARS --- //
  PG_HOST: process.env.PG_HOST,
  PG_USER: process.env.PG_USER,
  PG_PASS: process.env.PG_PASS,
  PG_DB: process.env.PG_DB,
  PG_PORT: process.env.PG_PORT,
}

module.exports = globals;