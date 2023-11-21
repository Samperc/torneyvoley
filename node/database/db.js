import pg from 'pg';


const pool = new pg.Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'TorneoVoley',
    port: '5432'
})


export default pool;