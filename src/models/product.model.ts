import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Product, Order } from '../interfaces/product';
import connection from './connection';

const createProduct = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products(name, amount) VALUES (?, ?)', 
    [name, amount],
  );
  return { id: insertId, name, amount };
};

const getAll = async (): Promise<Order[]> => {
  const [products] = await connection.execute<RowDataPacket[] & Order[]>(
    'SELECT * FROM Trybesmith.products;',
  );
  return products;
};

const insert = async (order:number, e:number) => {
  await connection.execute('UPDATE Trybesmith.products SET order_id= ?  WHERE id = ?', [order, e]);
};

export default { 
  createProduct,
  getAll,
  insert,
};