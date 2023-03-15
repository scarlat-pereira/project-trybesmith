import { RowDataPacket } from 'mysql2';
import { User } from '../interfaces/user';
import { Login } from '../interfaces/login';
import connection from './connection';

const acessLogin = async (login: Login): Promise<User[]> => {
  const { username, password } = login;

  const [rows] = await connection.execute<RowDataPacket[] & Login[]>(
    `
        SELECT username, password FROM Trybesmith.users WHERE username = ? AND password = ?;
      `,
    [username, password],
  );
  return rows as User[];
};

export default { acessLogin };