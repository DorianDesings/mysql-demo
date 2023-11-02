import bcrypt from 'bcrypt';
import connection from '../db/create-database.js';

const conn = connection();

const userController = {};

userController.getAllUsers = (req, res, next) => {
  conn.query('SELECT * FROM users', (err, rows) => {
    if (err) next(new Error(err));
    else res.send(rows);
  });
};

userController.addUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    // Generar un hash de la contraseña
    const saltRounds = 10; // Número de rondas de sal para la encriptación
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = {
      name,
      email,
      password: hashedPassword // Guarda la contraseña encriptada en la base de datos
    };

    conn.query('INSERT INTO users SET ?', [newUser], (err, rows) => {
      if (err) next(new Error(err));
      res.send(rows);
    });

    // res.send({ message: 'register' });
  } catch (error) {
    console.error('Error al registrar al usuario:', error);
    res.status(500).send({ error: 'Error al registrar al usuario' });
  }
};

userController.updateUser = (req, res, next) => {
  conn.query('UPDATE users SET ? WHERE id= ?', [req.body, req.params.userId], (err, rows) => {
    if (err) next(new Error(err));
    res.send(rows);
  });
};

userController.deleteUser = (req, res, next) => {
  conn.query('DELETE FROM users WHERE id= ?', [req.params.userId], (err, rows) => {
    if (err) next(new Error(err));
    res.send(rows);
  });
};

export default userController;
