import sqlite3

# Conexión a la base de datos
conn = sqlite3.connect('database.db')

conn.execute('''
    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        telefono TEXT NOT NULL,
        motivo TEXT NOT NULL,
        mensaje TEXT NOT NULL
    );
''')

# Cerrar la conexión a la base de datos
conn.close()

print("Base de datos inicializada correctamente.")


