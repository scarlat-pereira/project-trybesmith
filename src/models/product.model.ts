import { ResultSetHeader } from 'mysql2';
import { Product } from '../interfaces/product';
import connection from './connection';

const createProduct = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products(name, amount) VALUES (?, ?)', 
    [name, amount],
  );
  return { id: insertId, name, amount };
};

export default { 
  createProduct,
};