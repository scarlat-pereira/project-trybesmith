import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Order } from '../interfaces/order';

const getAll = async (): Promise<Order[]> => {
  const [orders] = await connection.execute<RowDataPacket[] & Order[]>(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p 
      ON o.id = p.order_id
      GROUP BY o.id;`,
  );
  return orders;
};

const addOrder = async (userId: number) => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders(user_id) VALUES(?);',
    [userId],
  );
  return insertId;
};

export default {
  getAll,
  addOrder,
};