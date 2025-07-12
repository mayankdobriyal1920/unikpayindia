// Load module
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file
// Initialize pool
var pool = mysql.createPool({
    connectionLimit : 10,
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'CA@cool12345',
    database: process.env.DB_NAME || 'caworld',
    debug    :  false
});
export default pool;