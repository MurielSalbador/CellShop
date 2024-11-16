import sqlite3

# Conexión a la base de datos
conn = sqlite3.connect('registro.db')

conn.execute('''
    CREATE TABLE registros (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        correo TEXT NOT NULL,
        contraseña TEXT NOT NULL,
        confirm_contraseña TEXT NOT NULL
    )
''')

# Cerrar la conexión a la base de datos
conn.close()

print("Base de datos inicializada correctamente.")


