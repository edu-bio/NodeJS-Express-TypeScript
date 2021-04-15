import { createPool } from 'mysql2/promise';

export async function conectar() {
    const connection = await createPool({
        host: '192.168.1.37:33060/libros',
        user: 'root',
        password: 'root',
        database: 'libros',
        connectionLimit: 10
    })
    return connection;
}