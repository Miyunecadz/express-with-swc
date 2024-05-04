export default {
  hostname: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'dbuser',
  password: process.env.DB_PASS || 'password',
  database: process.env.DB_NAME || 'dbname',
  dialect: process.env.DB_DIALECT || 'postgres',
  port: parseInt(process.env.DB_PORT as string, 10) || 5432,
  max_connection: parseInt(process.env.DB_MAX_CONNECTION as string, 10) || 20,
  idle_timeout: parseInt(process.env.DB_IDLE_TIMEOUT as string, 10) || 30000,
  connection_timeout: parseInt(process.env.DB_CONNECTION_TIMEOUT as string, 10) || 2000,
}