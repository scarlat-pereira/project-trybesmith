import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { User } from '../interfaces/user';
import connection from './connection';

const create = async (user: User) => {
  const { username, vocation, level, password } = user;
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
};

const selectId = async (user: string) => {
  const id = await connection.execute<RowDataPacket[]>(
    'SELECT id FROM Trybesmith.users WHERE username = ?',
    [user],
  );
  return id;
};

export default { create, selectId };