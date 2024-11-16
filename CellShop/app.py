from flask import Flask, request, send_from_directory, redirect, url_for
import sqlite3

app = Flask(__name__)


#CONECTAR A DB CONTACTOS------------------
def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn


#CONECTAR A DB REGISTROS------------------
def get_registro_connection():
    conn = sqlite3.connect('registro.db')
    conn.row_factory = sqlite3.Row
    return conn


@app.route('/')
def casa():
    return send_from_directory('html', 'index.html')

@app.route('/contacto')
def formulario():
    return send_from_directory('html', 'contacto.html')

@app.route('/carrito')
def carrito():
    return send_from_directory('html', 'carrito.html')

@app.route('/faq')
def faq():
    return send_from_directory('html', 'FAQ.html')





#REGISTROS--------------------------
@app.route('/registro', methods=['GET', 'POST'])
def registro():
    if request.method == 'POST':
        nombre = request.form.get('name')
        correo = request.form.get('email')
        contraseña = request.form.get('password')
        confirm_contraseña = request.form.get('confirm_password')
        
        conn = get_registro_connection()
        conn.execute(
            'INSERT INTO registros (nombre, correo, contraseña, confirm_contraseña) VALUES (?, ?, ?, ?)',
            (nombre, correo, contraseña, confirm_contraseña)
        )
        conn.commit()
        conn.close()
        
        return redirect(url_for('casa'))

    return send_from_directory('html', 'registros.html')




# CONTACTOS-----------------
@app.route('/submit', methods=['POST'])
def submit():
    # Obtener datos enviados desde el formulario
    name = request.form['name']
    email = request.form['email']
    phone = request.form['phone']
    motivo = request.form['motivo']
    mensaje = request.form['mensaje']
    
    # Guardar los datos en la base de datos
    conn = get_db_connection()
    conn.execute('INSERT INTO users (name, email, telefono, motivo, mensaje) VALUES (?, ?, ?, ?, ?)',
                 (name, email, phone, motivo, mensaje))
    conn.commit()
    conn.close()

    # Redirigir al usuario a la página principal
    return redirect(url_for('casa'))



if __name__ == '__main__':
    app.run(debug=True)
