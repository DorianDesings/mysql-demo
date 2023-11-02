import mysql from 'mysql';

const connection = () => {
  return mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      port: 3306,
      database: 'crud'
    },
    'single'
  );
};

export default connection;
